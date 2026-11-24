import { state } from '../state.js';

// Baits add to the rod's stats while equipped; one is used up per fish caught.
export const BAITS = {
  worm: {
    id: 'worm', name: '蟲餌', icon: '🐛', rarity: 'common',
    lure: 15, luck: 0,
    desc: '最基本的魚餌。上鉤速度 +15%',
  },
};

export const CRATE = { name: '誘餌箱', icon: '📦', price: 20 };

/** What comes out of a bait crate. */
export function rollCrate() {
  const r = Math.random();
  const amount = r < 0.35 ? 2 : r < 0.7 ? 3 : r < 0.9 ? 4 : 5;
  return { baitId: 'worm', amount };
}

export function equippedBait() {
  const id = state.equippedBait;
  if (!id || !BAITS[id] || !(state.baits[id] > 0)) return null;
  return BAITS[id];
}

/** extra stat from the equipped bait ('lure' | 'luck') */
export function baitBonus(stat) {
  const b = equippedBait();
  return b ? b[stat] || 0 : 0;
}

/** use one bait after a catch; returns true if the bait ran out */
export function consumeBait() {
  const b = equippedBait();
  if (!b) return false;
  state.baits[b.id]--;
  if (state.baits[b.id] <= 0) { state.baits[b.id] = 0; state.equippedBait = null; return true; }
  return false;
}
