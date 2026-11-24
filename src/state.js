// Persistent player state (localStorage)
const KEY = 'fisch2-save-v1';

export const state = {
  money: 0,
  rod: 'starter',
  inventory: [],   // { uid, id, weight, mutation, value }
  dex: {},         // fishId -> { count, best }
  quests: {},      // questId -> { stage, progress, done }
  time: 0.3,
  pos: null,
  nextUid: 1,
  totalCaught: 0,
  tutorialSeen: false,
  playerName: null, // chosen when the tutorial quest is completed
  baitCrates: 0,    // unopened bait crates
  baits: {},        // baitId -> count
  equippedBait: null,
};

/** Validate a player name. Returns { ok, name, error }. */
export function cleanPlayerName(raw) {
  // strip control characters / angle brackets, collapse whitespace
  const name = String(raw || '').replace(/[\u0000-\u001f\u007f<>]/g, '').replace(/\s+/g, ' ').trim();
  const len = [...name].length;
  if (len === 0) return { ok: false, name, error: '名字不能是空白的喔！' };
  if (len > 12) return { ok: false, name, error: `名字太長了（${len}/12 個字）` };
  return { ok: true, name, error: '' };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return false;
    Object.assign(state, JSON.parse(raw));
    return true;
  } catch (e) { return false; }
}

export function saveState() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
}

export function resetState() {
  try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
}

export function addFishToInventory(fishId, weight, mutation, value) {
  const item = { uid: state.nextUid++, id: fishId, weight, mutation: mutation ? mutation.id : null, value };
  state.inventory.unshift(item);
  const d = state.dex[fishId] || (state.dex[fishId] = { count: 0, best: 0 });
  const isNew = d.count === 0;
  d.count++;
  d.best = Math.max(d.best, weight);
  state.totalCaught++;
  return { item, isNew };
}

export function removeFish(uid) {
  const i = state.inventory.findIndex((f) => f.uid === uid);
  if (i >= 0) return state.inventory.splice(i, 1)[0];
  return null;
}
