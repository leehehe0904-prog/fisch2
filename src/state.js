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
};

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
