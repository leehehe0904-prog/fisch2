import { state } from '../state.js';
import { fishById, rarityById, formatWeight, MUTATIONS, FISH, RARITIES, POOL_NAMES } from '../fishing/fishData.js';
import { RODS } from '../fishing/rod.js';

const $ = (s) => document.querySelector(s);

const RARITY_ICON = { trash: '🗑️', common: '🐟', rare: '🐟', epic: '🐠', legendary: '🐠', mythical: '🦈', exotic: '🐉', secret: '✨' };
function itemIcon(def) {
  if (def.shape === 'boot') return '🥾';
  if (def.shape === 'can') return '🥫';
  if (def.shape === 'weed') return '🌿';
  if (def.shape === 'wood') return '🪵';
  if (def.shape === 'squid') return '🦑';
  if (def.shape === 'round') return '🐡';
  if (def.shape === 'shark' || def.shape === 'whale') return '🦈';
  if (def.shape === 'flat') return '🐟';
  return RARITY_ICON[def.rarity] || '🐟';
}
export function rarityStyle(r) {
  if (r.color === 'rainbow') return { cls: 'rainbow', color: '#fff' };
  if (r.id === 'secret') return { cls: 'secret-glow', color: r.color };
  return { cls: '', color: r.color };
}
export const mutationById = Object.fromEntries(MUTATIONS.map((m) => [m.id, m]));

export class UI {
  constructor() {
    this.zone = $('#zoneBanner');
    this.moneyEl = $('#moneyText');
    this.powerEl = $('#powerBar');
    this.shakeLayer = $('#shakeLayer');
    this.reelEl = $('#reel');
    this.reelBar = $('.reel-bar');
    this.reelFish = $('.reel-fish');
    this.reelFill = $('.reel-progress .fill');
    this.reelPct = $('.reel-pct');
    this.reelWarn = $('.reel-warn');
    this.catchEl = $('#catchPopup');
    this.hotbarEl = $('#hotbar');
    this.toastsEl = $('#toasts');
    this.interactEl = $('#interact');
    this.questsEl = $('#quests');
    this.rodStatsEl = $('#rodStats');
    this.wp = $('#waypoint');
    this.panels = { backpack: $('#backpack'), help: $('#help'), dex: $('#dex'), menu: $('#menu') };
    for (const [k, p] of Object.entries(this.panels)) p.querySelector('.close').onclick = () => this.togglePanel(k, false);
    this.onSelectSlot = null;
    this._zoneTimer = null;
    this.selected = 0;
  }

  anyPanelOpen() { return Object.values(this.panels).some((p) => !p.classList.contains('hidden')); }

  togglePanel(name, force) {
    const p = this.panels[name];
    const show = force ?? p.classList.contains('hidden');
    for (const [k, o] of Object.entries(this.panels)) if (k !== name) o.classList.add('hidden');
    p.classList.toggle('hidden', !show);
    if (show && name === 'backpack') this.renderBackpack();
    if (show && name === 'dex') this.renderDex();
  }

  setMoney(v, bump = false) {
    this.moneyEl.textContent = Math.floor(v).toLocaleString();
    if (bump) {
      const m = $('#money');
      m.classList.add('bump');
      setTimeout(() => m.classList.remove('bump'), 160);
    }
  }

  setClock(text, night, sub = '') {
    $('#clockText').textContent = text;
    $('#clockIcon').textContent = night ? '🌙' : '☀️';
    $('#clockSub').textContent = sub;
  }

  showZone(name, sub) {
    this.zone.querySelector('.zb-name').textContent = name;
    this.zone.querySelector('.zb-sub').textContent = sub || '';
    this.zone.classList.remove('show');
    void this.zone.offsetWidth;
    this.zone.classList.add('show');
    clearTimeout(this._zoneTimer);
    this._zoneTimer = setTimeout(() => this.zone.classList.remove('show'), 4200);
  }

  toast(text, color = '#fff') {
    const t = document.createElement('div');
    t.className = 'toast';
    t.style.color = color;
    t.textContent = text;
    this.toastsEl.appendChild(t);
    setTimeout(() => t.remove(), 3200);
  }

  setInteract(text) {
    if (!text) { this.interactEl.classList.add('hidden'); return; }
    this.interactEl.classList.remove('hidden');
    this.interactEl.querySelector('.txt').textContent = text;
  }

  power(show, v = 0, x = 0, y = 0) {
    this.powerEl.classList.toggle('hidden', !show);
    if (!show) return;
    this.powerEl.style.left = `${x}px`;
    this.powerEl.style.top = `${y}px`;
    this.powerEl.querySelector('.fill').style.height = `${Math.round(v * 100)}%`;
    this.powerEl.querySelector('.pb-label').textContent = v > 0.92 ? '完美！' : '力道';
  }

  // ---------------------------------------------------------------- shake
  spawnShake(onClick, text) {
    this.clearShake();
    const b = document.createElement('button');
    b.className = 'shake';
    b.textContent = 'SHAKE';
    const x = 25 + Math.random() * 50, y = 28 + Math.random() * 42;
    b.style.left = `${x}%`; b.style.top = `${y}%`;
    b.onmousedown = (e) => {
      e.stopPropagation();
      b.classList.add('pop');
      onClick();
    };
    this.shakeLayer.appendChild(b);
    const c = document.createElement('div');
    c.className = 'shake-count';
    c.textContent = text;
    this.shakeLayer.appendChild(c);
  }
  clearShake() {
    for (const el of [...this.shakeLayer.children]) {
      if (el.classList.contains('pop')) setTimeout(() => el.remove(), 200);
      else el.remove();
    }
  }

  // ---------------------------------------------------------------- reel
  reel(show) { this.reelEl.classList.toggle('hidden', !show); }
  updateReel(mg) {
    this.reelBar.style.left = `${mg.barPos * 100}%`;
    this.reelBar.style.width = `${mg.barW * 100}%`;
    this.reelBar.classList.toggle('out', !mg.inBar);
    this.reelFish.style.left = `${mg.fishPos * 100}%`;
    this.reelFill.style.width = `${Math.max(0, Math.min(1, mg.progress)) * 100}%`;

    this.reelEl.classList.toggle('shaking', !mg.inBar);
    this.reelWarn.textContent = mg.overweight ? '⚠ 超過釣竿最大重量！收線非常吃力' : (!mg.inBar ? '魚在掙扎！' : '');
  }

  // ---------------------------------------------------------------- catch popup
  catchPopup(def, weight, mutation, isNew, value) {
    const r = rarityById[def.rarity];
    const st = rarityStyle(r);
    const el = document.createElement('div');
    el.className = 'catch';
    const mut = mutation ? `<span style="color:${mutation.color}">${mutation.name} </span>` : '';
    el.innerHTML = `${isNew ? '<div class="c-new">NEW! 首次捕獲</div>' : ''}
      <div><span class="c-name ${st.cls}" style="color:${st.color}">${mut}${def.name}</span><span class="c-weight stroke">(${formatWeight(weight)})</span></div>
      <div class="c-meta"><span class="${st.cls}" style="color:${st.color}">${r.name}</span>　<span style="color:#7dff8a">價值 $${value}</span></div>`;
    this.catchEl.innerHTML = '';
    this.catchEl.appendChild(el);
    setTimeout(() => el.remove(), 4400);
  }

  // ---------------------------------------------------------------- hotbar
  renderHotbar() {
    const rod = RODS[state.rod];
    const slots = [];
    slots.push(`<div class="slot ${this.selected === 1 ? 'sel' : ''}" data-slot="1"><span class="num">1</span><span class="ico">🎣</span><span class="nm">${rod.name}</span></div>`);
    for (let i = 0; i < 8; i++) {
      const it = state.inventory[i];
      if (!it) { slots.push(`<div class="slot" data-slot="${i + 2}" style="opacity:.45"><span class="num">${i + 2}</span></div>`); continue; }
      const def = fishById[it.id];
      const r = rarityById[def.rarity];
      const col = r.color === 'rainbow' ? '#ff8af0' : r.color;
      slots.push(`<div class="slot ${this.selected === i + 2 ? 'sel' : ''}" data-slot="${i + 2}" style="border-bottom-color:${col}"><span class="num">${i + 2}</span><span class="ico">${itemIcon(def)}</span><span class="nm" style="color:${col}">${def.name}</span><span class="wt">${formatWeight(it.weight)}</span></div>`);
    }
    this.hotbarEl.innerHTML = slots.join('');
    this.hotbarEl.querySelectorAll('.slot').forEach((s) => {
      s.onmousedown = (e) => { e.stopPropagation(); this.onSelectSlot && this.onSelectSlot(parseInt(s.dataset.slot, 10)); };
    });
  }

  showRodStats(show) {
    this.rodStatsEl.classList.toggle('hidden', !show);
    if (!show) return;
    const r = RODS[state.rod];
    this.rodStatsEl.innerHTML = `<div class="rs-name">🎣 ${r.name}</div>
      <div class="rs-row"><span>上鉤速度</span><b>${r.lure}%</b></div>
      <div class="rs-row"><span>運氣</span><b>${r.luck}%</b></div>
      <div class="rs-row"><span>控制力</span><b>${r.control}</b></div>
      <div class="rs-row"><span>復原力</span><b>${r.resilience}%</b></div>
      <div class="rs-row"><span>最大重量</span><b>${r.maxWeight.toLocaleString()} kg</b></div>`;
  }

  // ---------------------------------------------------------------- backpack / dex
  renderBackpack() {
    const inv = state.inventory;
    const total = inv.reduce((a, f) => a + f.value, 0);
    this.panels.backpack.querySelector('.bp-summary').innerHTML = `共 <b>${inv.length}</b> 條　總價值 <b style="color:#7dff8a">$${total.toLocaleString()}</b>　（點擊魚可以拿在手上，到魚商那裡賣掉）`;
    const grid = this.panels.backpack.querySelector('.bp-grid');
    if (!inv.length) { grid.innerHTML = '<div style="opacity:.7">背包是空的，快去釣魚吧！</div>'; return; }
    grid.innerHTML = inv.map((it, idx) => {
      const def = fishById[it.id];
      const r = rarityById[def.rarity];
      const st = rarityStyle(r);
      const m = it.mutation ? mutationById[it.mutation] : null;
      return `<div class="bp-item ${this.selected === idx + 2 ? 'sel' : ''}" data-idx="${idx}">
        <div class="n ${st.cls}" style="color:${st.color}">${itemIcon(def)} ${m ? m.name + ' ' : ''}${def.name}</div>
        <div class="w">${r.name}・${formatWeight(it.weight)}</div><div class="v">$${it.value}</div></div>`;
    }).join('');
    grid.querySelectorAll('.bp-item').forEach((el) => {
      el.onclick = () => {
        const idx = parseInt(el.dataset.idx, 10);
        // move chosen fish to the front so it appears in the hotbar
        const [it] = state.inventory.splice(idx, 1);
        state.inventory.unshift(it);
        this.onSelectSlot && this.onSelectSlot(2);
        this.renderBackpack();
      };
    });
  }

  renderDex() {
    const grid = this.panels.dex.querySelector('.dex-grid');
    const sorted = [...FISH].sort((a, b) => rarityById[a.rarity].index - rarityById[b.rarity].index);
    const found = sorted.filter((f) => state.dex[f.id]).length;
    grid.innerHTML = `<div style="grid-column:1/-1;opacity:.85">已發現 ${found} / ${sorted.length} 種</div>` + sorted.map((f) => {
      const d = state.dex[f.id];
      const r = rarityById[f.rarity];
      const st = rarityStyle(r);
      const where = f.pools.map((p) => POOL_NAMES[p]).join('、');
      const time = f.time === 'night' ? '🌙 夜晚' : f.time === 'day' ? '☀️ 白天' : '全天';
      if (!d) return `<div class="dex-item locked"><div class="n">❓ ???</div><div class="w" style="color:${r.color === 'rainbow' ? '#ff8af0' : r.color}">${r.name}</div><div class="w">${where}</div></div>`;
      return `<div class="dex-item"><div class="n ${st.cls}" style="color:${st.color}">${itemIcon(f)} ${f.name}</div><div class="w">${r.name}・${time}</div><div class="w">${where}</div><div class="w">捕獲 ${d.count} 次・最重 ${formatWeight(d.best)}</div></div>`;
    }).join('');
  }

  // ---------------------------------------------------------------- quests
  renderQuests(list) {
    this.questsEl.innerHTML = list.map((q) => `<div class="quest"><div class="q-title">📜 ${q.title}</div>
      ${q.steps.map((s) => `<div class="q-step ${s.done ? 'done' : ''}">• ${s.text}</div>`).join('')}
      ${q.reward ? `<div class="q-reward">獎勵：${q.reward}</div>` : ''}</div>`).join('');
  }

  waypoint(show, x, y, label, angle = null) {
    this.wp.classList.toggle('hidden', !show);
    if (!show) return;
    this.wp.style.left = `${x}px`;
    this.wp.style.top = `${y}px`;
    this.wp.querySelector('.wp-label').textContent = label;
    this.wp.querySelector('.wp-arrow').style.transform = angle === null ? 'rotate(180deg)' : `rotate(${angle}rad)`;
  }

  fade(on) { document.querySelector('#fade').style.opacity = on ? 1 : 0; }
}

export { itemIcon };
