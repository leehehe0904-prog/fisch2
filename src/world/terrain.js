import * as THREE from 'three';
import { fbm, smoothstep, lerp, clamp, valueNoise } from '../core/noise.js';

export const SEA_LEVEL = 0;
export const SEABED = -16;

// Island definitions. All feature coordinates are LOCAL to the island centre.
export const ISLANDS = [
  {
    id: 'noob', name: 'noob Island', subtitle: '新手的出發點',
    cx: 0, cz: 0, radius: 58, peak: 11, hill: { x: -22, z: -20 }, warp: 0.07, seed: 3,
    flats: [
      { x: 12, z: 10, r: 18 },   // village plaza
      { x: -36, z: -30, r: 6 },  // lighthouse
    ],
    pond: null, zoneRadius: 125,
  },
  {
    id: 'normal', name: 'normal Island', subtitle: '熱鬧的海港漁村',
    cx: 360, cz: -230, radius: 86, peak: 19, hill: { x: 30, z: -32 }, warp: 0.09, seed: 11,
    flats: [
      { x: -40, z: 8, r: 23 },   // village
      { x: -6, z: 40, r: 7 },    // windmill
      { x: 6, z: -4, r: 16 },    // pond area
    ],
    pond: { x: 6, z: -4, r: 11 }, zoneRadius: 165,
  },
];

function islandBase(isl, x, z) {
  const lx = x - isl.cx, lz = z - isl.cz;
  const dist = Math.hypot(lx, lz);
  if (dist > isl.radius * 2.0) return SEABED;
  const warp = 1 + (fbm(x * 0.018 + isl.seed * 7.1, z * 0.018 - isl.seed * 3.3, 3) - 0.5) * 2 * isl.warp;
  const u = dist / (isl.radius * warp);
  let h = SEABED + (1.2 - SEABED) * smoothstep(1.75, 0.95, u);
  const inland = smoothstep(0.93, 0.62, u);
  const hd = Math.hypot(lx - isl.hill.x, lz - isl.hill.z) / (isl.radius * 0.85);
  h += (isl.peak - 2.2) * Math.pow(smoothstep(1.0, 0.0, hd), 1.4) * inland;
  h += 1.0 * inland;
  h += (fbm(x * 0.06, z * 0.06, 3) - 0.5) * 3.0 * inland;
  h += (fbm(x * 0.25, z * 0.25, 2) - 0.5) * 0.3;
  return h;
}

function islandHeight(isl, x, z) {
  let h = islandBase(isl, x, z);
  if (h <= SEABED + 0.01) return h;
  for (const f of isl.flats) {
    const d = Math.hypot(x - isl.cx - f.x, z - isl.cz - f.z);
    if (d < f.r + 9) h = lerp(h, f.h, smoothstep(f.r + 9, f.r, d));
  }
  const p = isl.pond;
  if (p) {
    const d = Math.hypot(x - isl.cx - p.x, z - isl.cz - p.z);
    if (d < p.r + 12) {
      h = lerp(h, p.level + 0.7, smoothstep(p.r + 12, p.r + 3, d));
      if (d < p.r + 3) {
        const k = d / p.r;
        const bowl = p.level - 0.3 - 3.2 * (1 - k * k);
        h = lerp(h, bowl, smoothstep(p.r + 3, p.r - 1, d));
      }
    }
  }
  return h;
}

// Pre-compute flat / pond heights (order matters: flats use the raw base shape)
for (const isl of ISLANDS) {
  for (const f of isl.flats) f.h = Math.max(1.6, islandBase(isl, isl.cx + f.x, isl.cz + f.z));
  if (isl.pond) {
    const p = isl.pond;
    p.level = 0; // temp
    const save = isl.pond; isl.pond = null;
    p.level = islandHeight(isl, isl.cx + p.x, isl.cz + p.z) - 0.6;
    isl.pond = save;
    p.wx = isl.cx + p.x; p.wz = isl.cz + p.z;
  }
}

export function terrainHeight(x, z) {
  let h = SEABED + (valueNoise(x * 0.02, z * 0.02) - 0.5) * 2.0;
  for (const isl of ISLANDS) {
    const dx = x - isl.cx, dz = z - isl.cz;
    if (dx * dx + dz * dz > (isl.radius * 2) ** 2) continue;
    const ih = islandHeight(isl, x, z);
    if (ih > h) h = ih;
  }
  return h;
}

export function islandById(id) { return ISLANDS.find((i) => i.id === id); }
export function toWorld(isl, lx, lz) { return { x: isl.cx + lx, z: isl.cz + lz }; }

/** Zone the position belongs to (island object or null = open sea). */
export function zoneAt(x, z) {
  for (const isl of ISLANDS) {
    if (Math.hypot(x - isl.cx, z - isl.cz) < isl.zoneRadius) return isl;
  }
  return null;
}

/** Water information at (x,z). Returns null if it is land. */
export function waterAt(x, z) {
  const th = terrainHeight(x, z);
  for (const isl of ISLANDS) {
    const p = isl.pond;
    if (!p) continue;
    if (Math.hypot(x - p.wx, z - p.wz) < p.r + 4) {
      if (th < p.level - 0.05) return { level: p.level, pond: true, island: isl, depth: p.level - th };
      return null;
    }
  }
  if (th < SEA_LEVEL - 0.05) return { level: SEA_LEVEL, pond: false, island: zoneAt(x, z), depth: SEA_LEVEL - th };
  return null;
}

// ---------------------------------------------------------------- meshes
const C = (hex) => new THREE.Color(hex);
const COL = {
  sandDry: C(0xead9a6), sandWet: C(0xc8ae7a), sandDeep: C(0x9c8c66), seabed: C(0x4f6660),
  grassA: C(0x5b9a37), grassB: C(0x7db64a), grassDry: C(0xa9b36a), rock: C(0x8b857b), rockDark: C(0x6c675f),
  dirt: C(0xa98a5e), mud: C(0x5d5440),
};

let _groundTex = null;
function groundTexture() {
  if (_groundTex) return _groundTex;
  const s = 512;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const g = c.getContext('2d');
  g.fillStyle = 'rgb(232,232,232)'; g.fillRect(0, 0, s, s);
  for (let i = 0; i < 60; i++) {
    const v = 200 + Math.random() * 55;
    g.fillStyle = `rgba(${v},${v},${v},0.25)`;
    g.beginPath(); g.arc(Math.random() * s, Math.random() * s, 20 + Math.random() * 60, 0, 7); g.fill();
  }
  for (let i = 0; i < 26000; i++) {
    const v = 150 + Math.random() * 105;
    g.fillStyle = `rgba(${v},${v},${v},0.5)`;
    g.fillRect(Math.random() * s, Math.random() * s, 1 + Math.random() * 1.5, 1 + Math.random() * 1.5);
  }
  for (let i = 0; i < 260; i++) {
    const v = 120 + Math.random() * 80;
    g.fillStyle = `rgba(${v},${v},${v},0.45)`;
    g.beginPath(); g.ellipse(Math.random() * s, Math.random() * s, 1.5 + Math.random() * 3, 1 + Math.random() * 2, Math.random() * 3, 0, 7); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  _groundTex = t;
  return t;
}

export function buildIslandMesh(isl) {
  const size = isl.radius * 2 * 1.95;
  const seg = Math.round(size / 1.15);
  const geo = new THREE.PlaneGeometry(size, size, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const n = pos.count;
  for (let i = 0; i < n; i++) {
    const x = pos.getX(i) + isl.cx, z = pos.getZ(i) + isl.cz;
    pos.setY(i, islandHeight(isl, x, z));
  }
  geo.computeVertexNormals();
  const nor = geo.attributes.normal;
  const colors = new Float32Array(n * 3);
  const c = new THREE.Color();
  const tmp = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const x = pos.getX(i) + isl.cx, z = pos.getZ(i) + isl.cz;
    const h = pos.getY(i);
    const ny = nor.getY(i);
    const nz = fbm(x * 0.15, z * 0.15, 2);
    if (h < -0.2) {
      c.copy(COL.sandWet).lerp(COL.sandDeep, smoothstep(-0.2, -4, h)).lerp(COL.seabed, smoothstep(-4, -13, h));
    } else if (h < 0.7) {
      c.copy(COL.sandWet).lerp(COL.sandDry, smoothstep(-0.2, 0.7, h));
    } else {
      c.copy(COL.grassA).lerp(COL.grassB, nz);
      const toSand = smoothstep(2.0, 1.3, h);
      tmp.copy(COL.sandDry).lerp(COL.grassDry, 0.25 * nz);
      c.lerp(tmp, toSand);
      // rocky slopes
      const steep = smoothstep(0.86, 0.68, ny);
      c.lerp(nz > 0.5 ? COL.rock : COL.rockDark, steep);
      if (h > isl.peak * 0.82) c.lerp(COL.rock, smoothstep(isl.peak * 0.82, isl.peak, h) * 0.7);
      // village dirt
      for (const f of isl.flats) {
        const d = Math.hypot(x - isl.cx - f.x, z - isl.cz - f.z);
        const w = smoothstep(f.r * 0.8, f.r * 0.45, d + (nz - 0.5) * 6);
        if (w > 0) c.lerp(COL.dirt, w * 0.85);
      }
    }
    const p = isl.pond;
    if (p) {
      const d = Math.hypot(x - p.wx, z - p.wz);
      if (d < p.r + 1.5) c.lerp(COL.mud, smoothstep(p.r + 1.5, p.r - 2, d) * 0.85);
    }
    // subtle large scale variation
    const v = 0.92 + 0.16 * fbm(x * 0.03, z * 0.03, 2);
    colors[i * 3] = c.r * v; colors[i * 3 + 1] = c.g * v; colors[i * 3 + 2] = c.b * v;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  // fine ground detail (sand grains / grass / pebbles) multiplied over the vertex colours
  const tex = groundTexture().clone();
  tex.needsUpdate = true;
  tex.repeat.set(size / 3.5, size / 3.5);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, map: tex, bumpMap: tex, bumpScale: 1.4 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(isl.cx, 0, isl.cz);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  return mesh;
}

export function buildSeabed() {
  const geo = new THREE.PlaneGeometry(4000, 4000, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x3e5550, roughness: 1 }));
  mesh.position.y = SEABED - 1.2;
  return mesh;
}

// ---------------------------------------------------------------- depth texture for the water shader
export const DEPTH_BOUNDS = { minX: -170, minZ: -430, size: 700 };
export function buildHeightTexture(res = 512) {
  const data = new Uint8Array(res * res * 4);
  const { minX, minZ, size } = DEPTH_BOUNDS;
  for (let iz = 0; iz < res; iz++) {
    for (let ix = 0; ix < res; ix++) {
      const x = minX + (ix / (res - 1)) * size;
      const z = minZ + (iz / (res - 1)) * size;
      const h = terrainHeight(x, z);
      const v = clamp((h + 20) / 50, 0, 1) * 255;
      const k = (iz * res + ix) * 4;
      data[k] = v; data[k + 1] = v; data[k + 2] = v; data[k + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, res, res, THREE.RGBAFormat);
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}
