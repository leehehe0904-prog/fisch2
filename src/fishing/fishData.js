// Rarity tiers, fish catalog and loot rolling.

export const RARITIES = [
  { id: 'trash', name: '垃圾', color: '#8a8a8a', weight: 14, diff: 0.0, valueMul: 0.3 },
  { id: 'common', name: '普通', color: '#e8e8e8', weight: 52, diff: 0.1, valueMul: 1 },
  { id: 'rare', name: '稀有', color: '#3f9bff', weight: 22, diff: 0.2, valueMul: 1.6 },
  { id: 'epic', name: '史詩', color: '#b45cff', weight: 8.5, diff: 0.32, valueMul: 2.6 },
  { id: 'legendary', name: '傳奇', color: '#ffa31a', weight: 3.2, diff: 0.45, valueMul: 4.5 },
  { id: 'mythical', name: '神話', color: '#ff3f6c', weight: 0.55, diff: 0.62, valueMul: 9 },
  { id: 'exotic', name: '異國情調', color: 'rainbow', weight: 0.11, diff: 0.78, valueMul: 18 },
  { id: 'secret', name: '秘密', color: '#38f2ff', weight: 0.02, diff: 0.9, valueMul: 40 },
];
export const rarityById = Object.fromEntries(RARITIES.map((r, i) => [r.id, { ...r, index: i }]));

// shape: standard | flat | long | shark | round | tall | boot | weed | can | wood | squid | whale
// time: any | day | night
const F = (id, name, rarity, pools, minW, maxW, base, shape, colors, extra = {}) =>
  ({ id, name, rarity, pools, minW, maxW, base, shape, colors, time: 'any', diff: 0, ...extra });

export const FISH = [
  // ---------------- trash
  F('seaweed', '海帶', 'trash', ['noob', 'normal', 'ocean'], 0.1, 0.8, 2, 'weed', [0x3d6b2a, 0x6a9a3a]),
  F('boot', '破舊靴子', 'trash', ['noob', 'normal', 'pond'], 0.4, 1.5, 3, 'boot', [0x5a3a22, 0x2f1f12]),
  F('can', '生鏽鐵罐', 'trash', ['normal', 'pond', 'ocean'], 0.1, 0.4, 3, 'can', [0xa0a6ad, 0xc0392b]),
  F('driftwood', '漂流木', 'trash', ['noob', 'normal', 'ocean'], 0.5, 3, 4, 'wood', [0x8a6a45, 0x5e4630]),

  // ---------------- noob Island coast
  F('anchovy', '鯷魚', 'common', ['noob'], 0.05, 0.35, 12, 'standard', [0x6f8fa8, 0xdfe8ee], { len: 3.2 }),
  F('sardine', '沙丁魚', 'common', ['noob', 'ocean'], 0.08, 0.5, 14, 'standard', [0x4e6f8f, 0xe6eef2], { len: 3.0 }),
  F('mackerel', '鯖魚', 'common', ['noob', 'normal'], 0.4, 2.2, 18, 'standard', [0x2f6a6e, 0xe0e6e0], { len: 3.4, stripes: true }),
  F('clownfish', '小丑魚', 'rare', ['noob'], 0.05, 0.4, 35, 'standard', [0xff7b1c, 0xffffff], { len: 2.2, bands: true, time: 'day' }),
  F('seabream', '黑鯛', 'rare', ['noob', 'normal'], 0.6, 4, 32, 'tall', [0x5c6670, 0xc9ced2]),
  F('pufferfish', '河豚', 'epic', ['noob'], 0.3, 2.5, 55, 'round', [0xd8c27a, 0xfaf3d8]),
  F('glowsquid', '螢光魷魚', 'epic', ['noob', 'ocean'], 0.3, 3, 60, 'squid', [0x5fd4ff, 0xc7f4ff], { time: 'night', glow: 0x5fd4ff }),
  F('yellowfin', '黃鰭鮪魚', 'legendary', ['noob', 'ocean'], 15, 120, 110, 'standard', [0x203a6b, 0xd9e0e8], { len: 3.6, fin: 0xffd23f }),
  F('moonray', '月光魟', 'mythical', ['noob'], 20, 160, 260, 'flat', [0x3a4a7a, 0xcfe0ff], { time: 'night', glow: 0x9fc4ff }),
  F('goldtuna', '黃金鮪魚', 'exotic', ['noob'], 80, 400, 700, 'standard', [0xffcc33, 0xfff2b0], { len: 3.6, glow: 0xffd23f }),

  // ---------------- normal Island coast
  F('cod', '鱈魚', 'common', ['normal'], 1, 9, 20, 'standard', [0x7a7454, 0xe6e0c6], { len: 3.4, spots: true }),
  F('flounder', '比目魚', 'common', ['normal'], 0.5, 5, 22, 'flat', [0x8a7350, 0xf1e9d6]),
  F('herring', '鯡魚', 'common', ['normal', 'ocean'], 0.1, 0.8, 15, 'standard', [0x5a7d9a, 0xe8eef2], { len: 3.2 }),
  F('salmon', '鮭魚', 'rare', ['normal'], 2, 18, 40, 'standard', [0x5f6f86, 0xf2a08a], { len: 3.5, spots: true }),
  F('redsnapper', '紅鯛', 'rare', ['normal'], 1, 12, 42, 'tall', [0xd9503f, 0xf7c6b8]),
  F('grouper', '石斑魚', 'epic', ['normal'], 5, 60, 70, 'tall', [0x6b5a3a, 0xc9b38a], { spots: true }),
  F('anglerfish', '鮟鱇魚', 'epic', ['normal', 'ocean'], 2, 25, 75, 'round', [0x3a2f3a, 0x6b5b6b], { time: 'night', glow: 0x9dff9d, lure: true }),
  F('mahimahi', '鬼頭刀', 'legendary', ['normal'], 6, 40, 120, 'standard', [0x2fa36b, 0xffd23f], { len: 3.6 }),
  F('hammerhead', '雙髻鯊', 'mythical', ['normal', 'ocean'], 150, 450, 320, 'shark', [0x6c7f8f, 0xdfe6ea], { hammer: true }),
  F('oarfish', '皇帶魚', 'exotic', ['normal'], 100, 600, 800, 'long', [0xd8dde6, 0xff3f4f], { len: 9 }),

  // ---------------- normal Island pond (freshwater)
  F('tilapia', '吳郭魚', 'common', ['pond'], 0.2, 2, 14, 'tall', [0x6a7466, 0xd9dcc9]),
  F('carp', '鯉魚', 'common', ['pond'], 1, 12, 16, 'standard', [0x8a7a3a, 0xe6d9a0], { len: 3.0 }),
  F('catfish', '鯰魚', 'rare', ['pond'], 2, 30, 38, 'standard', [0x4a4a44, 0xb8b8a8], { len: 3.6, whiskers: true }),
  F('rainbowtrout', '虹鱒', 'epic', ['pond'], 0.5, 8, 62, 'standard', [0x6b8a5a, 0xff8fb0], { len: 3.4, spots: true }),
  F('koi', '錦鯉', 'legendary', ['pond'], 1, 15, 140, 'standard', [0xffffff, 0xff5a2a], { len: 3.0, koi: true }),
  F('goldenkoi', '黃金錦鯉', 'mythical', ['pond'], 3, 25, 380, 'standard', [0xffcc33, 0xfff2b0], { len: 3.0, glow: 0xffd23f }),
  F('spiritcarp', '靈魂鯉', 'exotic', ['pond'], 5, 40, 900, 'standard', [0x9ff3ff, 0xffffff], { len: 3.2, glow: 0x9ff3ff, time: 'night' }),

  // ---------------- open ocean
  F('skipjack', '正鰹', 'common', ['ocean'], 2, 15, 22, 'standard', [0x2b3f6b, 0xd9e0e8], { len: 3.3, stripes: true }),
  F('flyingfish', '飛魚', 'rare', ['ocean'], 0.2, 1.2, 36, 'standard', [0x3b6fb0, 0xe8f0f8], { len: 3.2, wings: true, time: 'day' }),
  F('barracuda', '梭魚', 'epic', ['ocean'], 3, 25, 68, 'long', [0x7a8a9a, 0xe0e6ea], { len: 5 }),
  F('swordfish', '劍旗魚', 'legendary', ['ocean'], 50, 400, 150, 'standard', [0x2f4f7a, 0xd0d8e0], { len: 4, sword: true }),
  F('bluemarlin', '藍槍魚', 'mythical', ['ocean'], 100, 700, 340, 'standard', [0x1f4fa0, 0xd8e4f4], { len: 4.2, sword: true, fin: 0x3b7bd0 }),
  F('whaleshark', '鯨鯊', 'exotic', ['ocean'], 2000, 9000, 1200, 'whale', [0x3e4f66, 0xe8ecef], { spots: true }),
  F('abyssleviathan', '深淵利維坦', 'secret', ['ocean', 'normal', 'noob'], 3000, 12000, 3000, 'shark', [0x1b1030, 0x8a3fff], { glow: 0xb36bff, time: 'night' }),
  F('starlightkoi', '星輝錦鯉', 'secret', ['pond'], 10, 80, 2500, 'standard', [0xb9a3ff, 0xffffff], { len: 3.0, glow: 0xffffff }),
];
export const fishById = Object.fromEntries(FISH.map((f) => [f.id, f]));

export const POOL_NAMES = { noob: 'noob Island 海岸', normal: 'normal Island 海岸', pond: 'normal Island 池塘', ocean: '外海' };

export const MUTATIONS = [
  { id: 'big', name: '巨大', chance: 0.035, weightMul: 2.4, valueMul: 1.4, color: '#ffd36b' },
  { id: 'shiny', name: '閃亮', chance: 0.03, weightMul: 1, valueMul: 1.85, color: '#fff7a8' },
  { id: 'albino', name: '白化', chance: 0.02, weightMul: 1, valueMul: 2.2, color: '#ffffff' },
  { id: 'tiny', name: '迷你', chance: 0.03, weightMul: 0.35, valueMul: 1.1, color: '#9fe6ff' },
];

function rarityWeights(luck) {
  // Luck shifts weight from trash/common to rarer tiers.
  const L = luck / 100;
  return RARITIES.map((r, i) => {
    if (i === 0) return r.weight * Math.max(0.15, 1 - L * 0.5);
    if (i === 1) return r.weight;
    return r.weight * (1 + L * (i - 1) * 0.55);
  });
}

/** Roll a fish for a pool given rod luck and night flag. */
export function rollFish(pool, luck, night) {
  const avail = FISH.filter((f) => f.pools.includes(pool) && (f.time === 'any' || (f.time === 'night') === night));
  const weights = rarityWeights(luck);
  const tiers = RARITIES.map((r, i) => ({ r, w: avail.some((f) => f.rarity === r.id) ? weights[i] : 0 }));
  const total = tiers.reduce((a, t) => a + t.w, 0);
  let x = Math.random() * total;
  let tier = tiers.find((t) => (x -= t.w) <= 0) || tiers[1];
  const options = avail.filter((f) => f.rarity === tier.r.id);
  const fish = options[Math.floor(Math.random() * options.length)];

  // weight: skewed toward the low end with a long tail
  const u = Math.random();
  let weight = fish.minW + (fish.maxW - fish.minW) * Math.pow(u, 2.3);
  let mutation = null;
  if (fish.rarity !== 'trash') {
    for (const m of MUTATIONS) {
      if (Math.random() < m.chance * (1 + luck / 200)) { mutation = m; break; }
    }
  }
  if (mutation) weight *= mutation.weightMul;
  weight = Math.round(weight * 100) / 100;
  if (weight < 0.01) weight = 0.01;
  return { fish, weight, mutation };
}

export function fishValue(fish, weight, mutation) {
  const r = rarityById[fish.rarity];
  const avg = (fish.minW + fish.maxW) / 2;
  const sizeMul = 0.6 + 0.8 * Math.min(2.5, weight / avg);
  let v = fish.base * sizeMul * (mutation ? mutation.valueMul : 1);
  if (r.id === 'trash') v = fish.base;
  return Math.max(1, Math.round(v));
}

/** Difficulty 0..1 used by the reel minigame */
export function fishDifficulty(fish, weight) {
  const r = rarityById[fish.rarity];
  const avg = (fish.minW + fish.maxW) / 2;
  return Math.min(1, r.diff + fish.diff + Math.max(0, Math.min(0.15, (weight / avg - 1) * 0.08)));
}

export function formatWeight(kg) {
  if (kg >= 1000) return `${(kg / 1000).toFixed(2)} 公噸`;
  if (kg < 1) return `${Math.round(kg * 1000)} g`;
  return `${kg.toFixed(2)} kg`;
}
