import { state, saveState } from '../state.js';
import { rarityById } from '../fishing/fishData.js';

/*
 Stage kinds:
  { kind:'event', type:'equip'|'catch'|'sell', count, filter(data) }
  { kind:'turnin', npc }            – talk to npc to finish
  { kind:'deliver', npc, fishId }   – talk to npc while carrying fishId
*/
export const QUESTS = {
  tutorial: {
    title: '新手教學', giver: 'tutor', reward: 100,
    stages: [
      { kind: 'event', type: 'equip', count: 1, text: '按 1 拿出新手釣竿' },
      { kind: 'event', type: 'catch', count: 1, text: '按住左鍵甩竿，釣到第一條魚' },
      { kind: 'event', type: 'sell', count: 1, text: '把魚賣給魚商・老陳', target: 'merchant_noob' },
      { kind: 'turnin', npc: 'tutor', text: '回去找導師・阿凱 領獎勵', target: 'tutor' },
    ],
  },
  dock5: {
    title: '碼頭試身手', giver: 'hai', reward: 150, requires: ['tutorial'],
    stages: [
      { kind: 'event', type: 'catch', count: 5, text: '在 noob Island 釣到 5 條魚', filter: (d) => d.pool === 'noob' },
      { kind: 'turnin', npc: 'hai', text: '回報碼頭漁夫・阿海', target: 'hai' },
    ],
  },
  voyage: {
    title: '出航！', giver: 'hai', reward: 120, requires: ['dock5'],
    stages: [
      { kind: 'event', type: 'arrive', count: 1, text: '找船匠・阿木叫船，開到 normal Island', filter: (d) => d.island === 'normal' },
      { kind: 'turnin', npc: 'shipwright_normal', text: '跟 normal Island 的船匠・大石 打招呼', target: 'shipwright_normal' },
    ],
  },
  night3: {
    title: '夜釣達人', giver: 'de', reward: 300,
    stages: [
      { kind: 'event', type: 'catch', count: 3, text: '在夜晚釣到 3 條魚（不含垃圾）', filter: (d) => d.night && d.fish.rarity !== 'trash' },
      { kind: 'turnin', npc: 'de', text: '回報老漁夫・德叔', target: 'de' },
    ],
  },
  salmon: {
    title: '主廚的委託', giver: 'anna', reward: 250,
    stages: [
      { kind: 'deliver', npc: 'anna', fishId: 'salmon', text: '帶一條鮭魚給主廚・安娜（normal Island 海岸）', target: 'anna' },
    ],
  },
  pond3: {
    title: '池塘研究', giver: 'lin', reward: 200,
    stages: [
      { kind: 'event', type: 'catch', count: 3, text: '在 normal Island 的池塘釣到 3 條魚', filter: (d) => d.pool === 'pond' },
      { kind: 'turnin', npc: 'lin', text: '回報研究員・林博士', target: 'lin' },
    ],
  },
  rare1: {
    title: '稀有魚調查', giver: 'lin', reward: 600, requires: ['pond3'],
    stages: [
      { kind: 'event', type: 'catch', count: 1, text: '釣到一條「稀有」以上的魚', filter: (d) => rarityById[d.fish.rarity].index >= rarityById.rare.index },
      { kind: 'turnin', npc: 'lin', text: '回報研究員・林博士', target: 'lin' },
    ],
  },
};

export class Quests {
  constructor(game) { this.g = game; }

  q(id) { return state.quests[id]; }
  isDone(id) { return !!(state.quests[id] && state.quests[id].done); }
  isActive(id) { const q = state.quests[id]; return !!q && !q.done; }
  canStart(id) {
    const def = QUESTS[id];
    return !state.quests[id] && (def.requires || []).every((r) => this.isDone(r));
  }
  stage(id) { const q = state.quests[id]; return q ? QUESTS[id].stages[q.stage] : null; }

  start(id) {
    if (!this.canStart(id)) return;
    state.quests[id] = { stage: 0, progress: 0, done: false };
    this.g.ui.toast(`📜 接受任務：${QUESTS[id].title}`, '#ffd75e');
    this.g.sound.chime();
    // instant-complete checks
    if (id === 'tutorial' && this.g.fishing.equipped) this.onEvent('equip', {});
    saveState();
    this.render();
  }

  advance(id) {
    const q = state.quests[id];
    q.stage++; q.progress = 0;
    if (q.stage >= QUESTS[id].stages.length) { this.finish(id); return; }
    this.g.sound.coin();
    saveState();
    this.render();
  }

  finish(id) {
    const def = QUESTS[id];
    const q = state.quests[id];
    q.done = true;
    state.money += def.reward;
    this.g.ui.setMoney(state.money, true);
    this.g.ui.toast(`✅ 任務完成：${def.title}　獎勵 $${def.reward}`, '#8dff9a');
    this.g.sound.jingle(4);
    saveState();
    this.render();
  }

  onEvent(type, data = {}) {
    for (const [id, q] of Object.entries(state.quests)) {
      if (q.done) continue;
      const st = QUESTS[id].stages[q.stage];
      if (st.kind !== 'event' || st.type !== type) continue;
      if (st.filter && !st.filter(data)) continue;
      q.progress += data.count || 1;
      if (q.progress >= st.count) this.advance(id);
      else { saveState(); this.render(); }
    }
  }

  /** can npc finish something right now? */
  turnInReady(npcId) {
    for (const [id, q] of Object.entries(state.quests)) {
      if (q.done) continue;
      const st = QUESTS[id].stages[q.stage];
      if ((st.kind === 'turnin' || st.kind === 'deliver') && st.npc === npcId) {
        if (st.kind === 'deliver' && !state.inventory.some((f) => f.id === st.fishId)) continue;
        return id;
      }
    }
    return null;
  }

  markerFor(npcId) {
    if (this.turnInReady(npcId)) return '?';
    for (const [id, def] of Object.entries(QUESTS)) if (def.giver === npcId && this.canStart(id)) return '!';
    return null;
  }

  activeList() {
    const out = [];
    for (const [id, q] of Object.entries(state.quests)) {
      if (q.done) continue;
      const def = QUESTS[id];
      const steps = def.stages.map((s, i) => {
        let text = s.text;
        if (i === q.stage && s.kind === 'event' && s.count > 1) text += `（${q.progress}/${s.count}）`;
        if (i === q.stage && s.kind === 'deliver') text += state.inventory.some((f) => f.id === s.fishId) ? '（✔ 背包中有）' : '（背包中沒有）';
        return { text, done: i < q.stage, current: i === q.stage };
      }).filter((s, i) => i <= q.stage);
      out.push({ id, title: def.title, steps, reward: `$${def.reward}` });
    }
    return out;
  }

  /** npc id the first active quest wants you to go to */
  currentTarget() {
    for (const [id, q] of Object.entries(state.quests)) {
      if (q.done) continue;
      const st = QUESTS[id].stages[q.stage];
      if (st.target) return st.target;
    }
    return null;
  }

  render() { this.g.ui.renderQuests(this.activeList()); }
}
