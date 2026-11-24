import { state, saveState, removeFish } from '../state.js';
import { QUESTS } from './quests.js';
import { fishById, rarityById, formatWeight, RARITIES } from '../fishing/fishData.js';
import { RODS } from '../fishing/rod.js';

// ------------------------------------------------------------------ helpers
function close(g) { return () => g.dialogue.close(); }

/** Generic quest-aware conversation */
function questTalk(g, npc, cfg) {
  const Q = g.quests;
  // 1) turn-ins first
  const ready = Q.turnInReady(npc.id);
  if (ready) {
    const st = QUESTS[ready].stages[state.quests[ready].stage];
    const lines = (cfg.thanks && cfg.thanks[ready]) || ['做得好！這是你的獎勵。'];
    g.dialogue.run(npc, [...lines.slice(0, -1), {
      text: lines[lines.length - 1],
      options: [{ label: `領取獎勵 $${QUESTS[ready].reward}`, cls: 'green', action: () => {
        if (st.kind === 'deliver') {
          const f = state.inventory.find((x) => x.id === st.fishId);
          if (f) removeFish(f.uid);
          g.onInventoryChanged();
        }
        Q.advance(ready);
        g.dialogue.close();
      } }],
    }]);
    return;
  }
  // 2) new quest offers
  for (const qid of cfg.quests || []) {
    if (Q.canStart(qid)) {
      const lines = cfg.offers[qid];
      g.dialogue.run(npc, [...lines.slice(0, -1), {
        text: lines[lines.length - 1],
        options: [
          { label: `接受任務「${QUESTS[qid].title}」`, cls: 'green', action: () => { Q.start(qid); g.dialogue.close(); } },
          { label: '下次再說', cls: 'gray', action: close(g) },
        ],
      }]);
      return;
    }
  }
  // 3) hints for active quests
  for (const qid of cfg.quests || []) {
    if (Q.isActive(qid) && cfg.hints && cfg.hints[qid]) {
      g.dialogue.run(npc, [{ text: cfg.hints[qid], options: [...(cfg.extra ? cfg.extra(g, npc) : []), { label: '好的！', cls: 'gray', action: close(g) }] }]);
      return;
    }
  }
  // 4) idle chatter
  const idle = Array.isArray(cfg.idle) ? cfg.idle[Math.floor(Math.random() * cfg.idle.length)] : cfg.idle;
  g.dialogue.run(npc, [{ text: idle, options: [...(cfg.extra ? cfg.extra(g, npc) : []), { label: '再見', cls: 'gray', action: close(g) }] }]);
}

// ------------------------------------------------------------------ tutorial
const TUTORIAL_PAGES = [
  '首先按鍵盤上的【1】拿出你的「新手釣竿」。左下角會顯示釣竿的屬性。',
  '面向水面，【按住滑鼠左鍵】開始蓄力，角色旁邊會出現力道條。【放開】就會把浮標甩出去——力道越大甩得越遠！',
  '浮標一定要落在水裡才行。落水後耐心等一下……「上鉤速度」越高，魚就越快咬餌。等待時再點一下左鍵可以收回浮標。',
  '當浮標被猛力拉下去、頭上冒出【!】時，畫面上會跳出【SHAKE】按鈕，快速點擊它們把魚鉤牢！',
  '接著是收線小遊戲：【按住左鍵或空白鍵】白色控制條會往右移，放開就會往左滑。想辦法讓魚的圖示一直待在白條裡面！',
  '魚待在白條裡，下方的進度條就會慢慢填滿；魚跑出去，進度就會下降，歸零的話魚就跑掉了。',
  '小知識：「控制力」讓白條變寬，「復原力」讓魚跑出白條時進度掉得比較慢，「運氣」提高稀有魚機率，「最大重量」是釣竿能輕鬆拉起的重量。',
  '釣到的魚會放進背包（按 B 查看）。拿去碼頭入口旁的魚商・老陳那裡就能換成錢！',
  '熟練之後，去碼頭找船匠・阿木叫一艘船，往東南方開就能到 normal Island。那裡有更多魚和委託在等你！',
];

export const SCRIPTS = {
  tutor(g, npc) {
    const Q = g.quests;
    if (Q.turnInReady('tutor')) {
      return questTalk(g, npc, { thanks: { tutorial: ['太厲害了！你已經學會釣魚、還把魚賣掉了！', '這 $100 是給你的畢業禮物。去找碼頭的阿海，他也許有事情要拜託你！'] } });
    }
    if (Q.canStart('tutorial')) {
      g.dialogue.run(npc, [
        '喔！你就是新來的釣客吧？歡迎來到 noob Island！',
        '我是導師・阿凱，負責教新手怎麼釣魚、怎麼把魚賣掉換錢。',
        {
          text: '要我從頭教你嗎？',
          options: [
            { label: '好！請教我釣魚', cls: 'green', action: () => g.dialogue.run(npc, [...TUTORIAL_PAGES, { text: '就這樣！先試著釣一條魚，再拿去賣給老陳吧。我在這裡等你的好消息！', options: [{ label: '交給我吧！', cls: 'green', action: () => { Q.start('tutorial'); g.dialogue.close(); } }] }]) },
            { label: '我已經會了', cls: 'gray', action: () => { Q.start('tutorial'); g.dialogue.run(npc, ['哈哈，真有自信！那就去釣一條魚，再賣給碼頭旁邊的魚商・老陳證明給我看吧！']); } },
          ],
        },
      ]);
      return;
    }
    if (Q.isActive('tutorial')) {
      const st = QUESTS.tutorial.stages[state.quests.tutorial.stage];
      const hint = {
        equip: '先按【1】把釣竿拿出來！',
        catch: '面向大海按住左鍵蓄力、放開甩竿。魚上鉤就狂點 SHAKE，然後用左鍵控制白條把魚拉上來！',
        sell: '魚商・老陳就在碼頭入口那個紅白條紋的攤位，跟他說話就能賣魚。',
      }[st.type] || '加油！';
      g.dialogue.run(npc, [{ text: hint, options: [
        { label: '再教我一次', action: () => g.dialogue.run(npc, TUTORIAL_PAGES) },
        { label: '知道了！', cls: 'gray', action: close(g) },
      ] }]);
      return;
    }
    g.dialogue.run(npc, [{ text: ['今天的海風真舒服，很適合釣魚！', '聽說晚上會出現白天看不到的魚喔。', '運氣越高，越容易釣到稀有的魚。'][Math.floor(Math.random() * 3)], options: [
      { label: '再教我一次釣魚', action: () => g.dialogue.run(npc, TUTORIAL_PAGES) },
      { label: '再見', cls: 'gray', action: close(g) },
    ] }]);
  },

  merchant(g, npc) { merchantTalk(g, npc); },

  rodshop(g, npc) {
    const r = RODS.starter;
    g.dialogue.run(npc, [{
      text: '歡迎光臨釣具店！目前店裡只有「新手釣竿」，更厲害的釣竿還在從大陸運過來的路上……',
      options: [
        { label: '看看新手釣竿', action: () => g.dialogue.run(npc, [
          `【${r.name}】${r.desc}`,
          `上鉤速度 ${r.lure}%・運氣 ${r.luck}%・控制力 ${r.control}・復原力 ${r.resilience}%・最大重量 ${r.maxWeight.toLocaleString()} kg`,
          '你已經有一把了，好好愛惜它吧！',
        ]) },
        { label: '再見', cls: 'gray', action: close(g) },
      ],
    }]);
  },

  shipwright(g, npc) {
    if (g.quests.turnInReady(npc.id)) {
      return questTalk(g, npc, { thanks: { voyage: ['喔？從 noob Island 一路開過來的嗎？了不起！', '歡迎來到 normal Island！這裡的魚商、主廚、研究員都在找能幹的釣客。這是阿海託我轉交的獎勵！'] } });
    }
    g.dialogue.run(npc, [{
      text: '要出海嗎？我可以幫你準備一艘小汽艇，免費的！',
      options: [
        { label: '叫一艘船', cls: 'green', action: () => { g.spawnBoatAt(npc.def.boatSpawn); g.dialogue.run(npc, ['好了！船就停在碼頭旁邊，靠近按【E】就能上船。開船用 W/S 加速倒退、A/D 轉向，按住 Shift 可以全速前進！']); } },
        { label: '怎麼開船？', action: () => g.dialogue.run(npc, [
          '靠近船按【E】上船，W 前進、S 倒退、A/D 轉向，按住 Shift 全速前進。',
          '在船上按【1】拿出釣竿就能直接在海上釣魚（記得先停船）。外海有很多大型魚！',
          `從 noob Island 往東南方開就是 normal Island。要下船時靠近陸地或碼頭再按【E】。`,
        ]) },
        { label: '不用了', cls: 'gray', action: close(g) },
      ],
    }]);
  },

  hai(g, npc) {
    questTalk(g, npc, {
      quests: ['dock5', 'voyage'],
      offers: {
        dock5: ['嘿，新手！我是阿海，從小就在這個碼頭釣魚。', '碼頭盡頭水比較深，常常有好魚。想證明自己的話，就在 noob Island 釣 5 條魚給我看看吧！'],
        voyage: ['你的技術進步很多了嘛！', 'noob Island 的魚已經難不倒你了。去找船匠阿木叫艘船，開到東南方的 normal Island 吧，那裡的船匠大石是我的老朋友。'],
      },
      hints: {
        dock5: '在 noob Island 附近的水域都算！碼頭盡頭是我最推薦的位置。',
        voyage: '找船匠・阿木叫船，然後往東南方一直開，看到大島和風車就對了！',
      },
      thanks: { dock5: ['5 條！不錯不錯，你有釣魚的天分！', '這是你的獎勵。之後再來找我，我還有事想拜託你。'] },
      idle: ['外海有很大的魚，但是要小心，太重的魚釣竿可能拉不太動。', '天黑之後，碼頭的燈籠會亮起來，很漂亮喔。', '聽說在 noob Island 的夜晚，會有發出月光的魟魚出沒……'],
    });
  },

  de(g, npc) {
    questTalk(g, npc, {
      quests: ['night3'],
      offers: { night3: ['年輕人，你知道嗎？有些魚只在晚上才會出現。', '螢光魷魚、鮟鱇魚……還有傳說中的深淵利維坦。', '等天黑之後，幫我釣 3 條魚回來吧，讓我看看你夜釣的本事！'] },
      hints: { night3: '晚上是指太陽下山之後（大約 18:30 ~ 05:30）。右上角的時鐘會變成月亮。' },
      thanks: { night3: ['哈哈！夜裡的海很美吧？', '你已經是個夜釣好手了，收下吧！'] },
      idle: ['我在這個碼頭釣了四十年的魚……', '一天一夜只有十分鐘，時間過得真快啊。', '月光照在海面上的時候，最容易遇到稀有的傢伙。'],
    });
  },

  anna(g, npc) {
    questTalk(g, npc, {
      quests: ['salmon'],
      offers: { salmon: ['啊，你是釣客嗎？太好了！', '我是這裡餐廳的主廚安娜，今晚的招牌菜需要一條新鮮的鮭魚。', '鮭魚在 normal Island 附近的海裡就釣得到，可以幫我帶一條來嗎？'] },
      hints: { salmon: '鮭魚在 normal Island 的海岸附近，屬於「罕見」等級。釣到之後別賣掉喔，直接拿來給我！' },
      thanks: { salmon: ['哇！這條鮭魚好新鮮！', '今晚的鮭魚排一定會大受好評，這是你的報酬！'] },
      idle: ['今天的特餐是香煎鱈魚，要來一份嗎？', '新鮮的魚只要簡單調味就很好吃了。'],
    });
  },

  lin(g, npc) {
    questTalk(g, npc, {
      quests: ['pond3', 'rare1'],
      offers: {
        pond3: ['你好，我是海洋研究員林博士。', '這座池塘是淡水的，和海裡的魚完全不一樣！錦鯉、虹鱒……甚至還有傳說中的黃金錦鯉。', '可以幫我在池塘釣 3 條魚，協助我的研究嗎？'],
        rare1: ['池塘的資料很有幫助！接下來我想研究稀有魚種。', `魚的稀有度由低到高是：${RARITIES.map((r) => r.name).join(' → ')}。`, '幫我釣一條「稀有」等級以上的魚吧！運氣越高越容易遇到。'],
      },
      hints: { pond3: '池塘就在我旁邊！甩竿時要讓浮標落在池塘水面上。', rare1: '稀有以上的魚很少見，多釣幾次、晚上也試試看。也可以去外海碰碰運氣！' },
      thanks: { pond3: ['太好了，這些樣本很有價值！'], rare1: ['這……這真是太棒了！這條魚的數據非常珍貴！', '這是研究經費的一部分，請收下！'] },
      idle: ['每種魚都有自己出沒的地點和時間，記得看看圖鑑（按 N）。', '「巨大」、「閃亮」、「白化」都是罕見的變異，價值會更高喔。'],
    });
  },
};

// ------------------------------------------------------------------ merchant (Fisch-like)
function merchantTalk(g, npc) {
  const inv = state.inventory;
  const total = inv.reduce((a, f) => a + f.value, 0);
  const held = g.player.heldFish;
  if (g.quests.turnInReady(npc.id)) return questTalk(g, npc, {});
  const opts = [];
  if (held) {
    const def = fishById[held.id];
    opts.push({ label: `賣掉手上的${def.name}（$${held.value}）`, cls: 'green', action: () => sell(g, npc, [held]) });
  }
  if (inv.length) {
    opts.push({ label: `全部賣掉（${inv.length} 條・$${total}）`, cls: 'green', action: () => g.dialogue.run(npc, [{
      text: `全部 ${inv.length} 條魚，一共 $${total.toLocaleString()}。確定要全部賣掉嗎？`,
      options: [
        { label: '確定賣掉！', cls: 'green', action: () => sell(g, npc, [...inv]) },
        { label: '再想想', cls: 'gray', action: () => merchantTalk(g, npc) },
      ],
    }]) });
  }
  opts.push({ label: '價格怎麼算？', action: () => g.dialogue.run(npc, [
    '魚的價格看種類、稀有度跟重量。同一種魚越重越值錢！',
    '帶有「巨大」、「閃亮」、「白化」這些變異的魚，我會用更好的價錢收購。',
    { text: '完美收線（魚從頭到尾都沒跑出白條）的魚，價值還會多 10%！', options: [{ label: '了解', cls: 'gray', action: () => merchantTalk(g, npc) }] },
  ]) });
  opts.push({ label: '沒事，再見', cls: 'gray', action: close(g) });
  const greet = inv.length
    ? (held ? `喔！手上那條${fishById[held.id].name}看起來不錯嘛！要賣嗎？` : `歡迎！你的背包裡有 ${inv.length} 條魚，總共值 $${total.toLocaleString()}。要賣點什麼？`)
    : '嘿！我是魚商，什麼魚都收！等你釣到魚再拿來給我看看吧。';
  g.dialogue.run(npc, [{ text: greet, options: opts }]);
}

function sell(g, npc, items) {
  let sum = 0;
  for (const it of items) { if (removeFish(it.uid)) sum += it.value; }
  if (g.player.heldFish && !state.inventory.includes(g.player.heldFish)) g.selectSlot(0);
  state.money += sum;
  saveState();
  g.ui.setMoney(state.money, true);
  g.sound.coin();
  g.onInventoryChanged();
  g.quests.onEvent('sell', { count: items.length });
  const lines = ['成交！謝謝惠顧～', '好貨！下次再來！', '這些魚很新鮮，合作愉快！'];
  g.dialogue.run(npc, [{ text: `一共 $${sum.toLocaleString()}，拿好！${lines[Math.floor(Math.random() * lines.length)]}`, options: [{ label: '謝啦！', cls: 'gray', action: close(g) }] }]);
}
