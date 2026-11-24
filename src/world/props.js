import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// ------------------------------------------------------------------ procedural textures
function canvasTex(size, draw, repeat = 1) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  t.repeat.set(repeat, repeat);
  return t;
}
const gray = (v, a = 1) => `rgba(${v},${v},${v},${a})`;
const rnd = Math.random;
export const TEX = {
  wood: canvasTex(256, (g, s) => {
    g.fillStyle = gray(225); g.fillRect(0, 0, s, s);
    for (let i = 0; i < 140; i++) {
      const y = rnd() * s, w = 0.5 + rnd() * 2.5;
      g.strokeStyle = gray(120 + rnd() * 90, 0.25 + rnd() * 0.35); g.lineWidth = w;
      g.beginPath(); g.moveTo(0, y);
      for (let x = 0; x <= s; x += 16) g.lineTo(x, y + Math.sin(x * 0.03 + i) * 2.5);
      g.stroke();
    }
    for (let i = 0; i < 3; i++) { g.fillStyle = gray(110, 0.45); g.beginPath(); g.ellipse(rnd() * s, rnd() * s, 7, 4, 0, 0, 7); g.fill(); }
  }),
  plaster: canvasTex(256, (g, s) => {
    g.fillStyle = gray(240); g.fillRect(0, 0, s, s);
    for (let i = 0; i < 2600; i++) { g.fillStyle = gray(190 + rnd() * 60, 0.35); g.fillRect(rnd() * s, rnd() * s, 1 + rnd() * 3, 1 + rnd() * 3); }
    for (let i = 0; i < 18; i++) { g.fillStyle = gray(200, 0.12); g.beginPath(); g.arc(rnd() * s, rnd() * s, 10 + rnd() * 30, 0, 7); g.fill(); }
  }),
  roof: canvasTex(256, (g, s) => {
    g.fillStyle = gray(230); g.fillRect(0, 0, s, s);
    const rows = 8, h = s / rows;
    for (let r = 0; r < rows; r++) {
      const off = (r % 2) * 16;
      for (let x = -32; x < s; x += 32) {
        g.fillStyle = gray(185 + rnd() * 60); g.fillRect(x + off + 1, r * h + 1, 30, h - 3);
        g.fillStyle = gray(120, 0.5); g.fillRect(x + off + 1, r * h + h - 5, 30, 4);
      }
    }
  }),
  stone: canvasTex(256, (g, s) => {
    g.fillStyle = gray(215); g.fillRect(0, 0, s, s);
    for (let i = 0; i < 260; i++) { g.fillStyle = gray(140 + rnd() * 110, 0.25); g.beginPath(); g.arc(rnd() * s, rnd() * s, 2 + rnd() * 16, 0, 7); g.fill(); }
    for (let i = 0; i < 2500; i++) { g.fillStyle = gray(100 + rnd() * 155, 0.4); g.fillRect(rnd() * s, rnd() * s, 1, 1); }
  }),
  bark: canvasTex(128, (g, s) => {
    g.fillStyle = gray(210); g.fillRect(0, 0, s, s);
    for (let i = 0; i < 90; i++) { g.fillStyle = gray(90 + rnd() * 100, 0.45); g.fillRect(rnd() * s, 0, 1 + rnd() * 3, s); }
    for (let i = 0; i < 40; i++) { g.fillStyle = gray(80, 0.35); g.fillRect(rnd() * s, rnd() * s, 6 + rnd() * 10, 2); }
  }),
  leaf: canvasTex(256, (g, s) => {
    g.fillStyle = gray(215); g.fillRect(0, 0, s, s);
    for (let i = 0; i < 900; i++) {
      g.fillStyle = gray(rnd() < 0.5 ? 120 + rnd() * 60 : 235 + rnd() * 20, 0.55);
      g.beginPath(); g.ellipse(rnd() * s, rnd() * s, 2 + rnd() * 5, 1 + rnd() * 3, rnd() * 3, 0, 7); g.fill();
    }
  }, 2),
};
TEX.roof.repeat.set(0.6, 0.6);
TEX.plaster.repeat.set(0.35, 0.35);
TEX.wood.repeat.set(0.8, 0.8);

// ------------------------------------------------------------------ materials
const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...o });
const woodO = { map: TEX.wood, bumpMap: TEX.wood, bumpScale: 1.2, roughness: 0.8 };
const wallO = { map: TEX.plaster, bumpMap: TEX.plaster, bumpScale: 0.6, roughness: 0.92 };
const roofO = { map: TEX.roof, bumpMap: TEX.roof, bumpScale: 2, roughness: 0.75 };
const rockO = { map: TEX.stone, bumpMap: TEX.stone, bumpScale: 2, roughness: 0.95 };
const leafO = { map: TEX.leaf, roughness: 0.75 };
const barkO = { map: TEX.bark, bumpMap: TEX.bark, bumpScale: 2, roughness: 0.95 };
export const M = {
  wood: std(0x8b5a2b, woodO), woodDark: std(0x5a3a1e, woodO), woodLight: std(0xb3824e, woodO), plank: std(0x9a6b3e, woodO),
  plankOld: std(0x7f6a55, woodO), roofRed: std(0xb4452f, roofO), roofBlue: std(0x3d5f8c, roofO),
  roofGreen: std(0x4c7a3c, roofO), roofBrown: std(0x6e4a2e, roofO),
  wallCream: std(0xefe1c2, wallO), wallWhite: std(0xf1eee6, wallO), wallBlue: std(0xa9c9d8, wallO), wallPink: std(0xe8c4b8, wallO), wallYellow: std(0xf0dc9a, wallO),
  stone: std(0x8d8780, rockO), rock: std(0x7d776d, rockO), rockDark: std(0x5f5a52, rockO),
  leaf: std(0x3f8f3a, leafO), leafLight: std(0x5aa944, leafO), palmLeaf: std(0x4a9a3c, { ...leafO, side: THREE.DoubleSide }),
  pine: std(0x2c6537, { ...leafO, side: THREE.DoubleSide }), pineB: std(0x24552e, { ...leafO, side: THREE.DoubleSide }), trunk: std(0x6b4a2e, barkO), palmTrunk: std(0x8f6f48, barkO),
  metal: std(0x6c7077, { metalness: 0.6, roughness: 0.4 }), dark: std(0x222222), red: std(0xc0392b), white: std(0xf4f4f4),
  rope: std(0xc8b27c), coconut: std(0x5a3d22), sail: std(0xf3ead6, { side: THREE.DoubleSide }),
  window: new THREE.MeshStandardMaterial({ color: 0x2c3b4a, emissive: 0xffc16a, emissiveIntensity: 0, roughness: 0.2, metalness: 0.1 }),
  lampGlass: new THREE.MeshStandardMaterial({ color: 0xfff1c9, emissive: 0xffb54a, emissiveIntensity: 0.2, roughness: 0.3 }),
  ice: std(0xd9f2ff, { roughness: 0.2, transparent: true, opacity: 0.85 }),
};
// emissive materials that glow at night
export const nightMaterials = [M.window, M.lampGlass];
// point lights that switch on at night: {light, base}
export const nightLights = [];
// things that animate: fn(dt, time, night)
export const animated = [];
// big solid objects the camera should not clip through
export const occluders = [];

function at(m, x, y, z) { m.position.set(x, y, z); return m; }
function mesh(geo, mat, cast = true, receive = true) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast; m.receiveShadow = receive;
  return m;
}

// ------------------------------------------------------------------ text helpers
export function makeTextCanvas(lines, opts = {}) {
  const { w = 512, h = 128, bg = null, color = '#fff', stroke = '#000', font = 'bold 64px "Microsoft JhengHei", "PingFang TC", sans-serif', border = null } = opts;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; g.fillRect(0, 0, w, h); }
  if (border) { g.strokeStyle = border; g.lineWidth = 10; g.strokeRect(5, 5, w - 10, h - 10); }
  const arr = Array.isArray(lines) ? lines : [lines];
  g.textAlign = 'center'; g.textBaseline = 'middle';
  arr.forEach((line, i) => {
    const l = typeof line === 'string' ? { text: line } : line;
    g.font = l.font || font;
    const y = h / 2 + (i - (arr.length - 1) / 2) * (l.lh || h / arr.length);
    if (stroke) { g.lineWidth = l.strokeW || 8; g.strokeStyle = stroke; g.lineJoin = 'round'; g.strokeText(l.text, w / 2, y); }
    g.fillStyle = l.color || color; g.fillText(l.text, w / 2, y);
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function makeLabelSprite(name, title, color = '#ffffff') {
  const lines = title
    ? [{ text: title, font: 'bold 34px "Microsoft JhengHei", sans-serif', color: '#ffe08a', strokeW: 7, lh: 48 }, { text: name, font: 'bold 50px "Microsoft JhengHei", sans-serif', color, strokeW: 9, lh: 56 }]
    : [{ text: name, font: 'bold 50px "Microsoft JhengHei", sans-serif', color }];
  const tex = makeTextCanvas(lines, { w: 512, h: 128, stroke: 'rgba(0,0,0,0.85)' });
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, fog: false }));
  s.scale.set(4, 1, 1);
  s.renderOrder = 10;
  return s;
}

// ------------------------------------------------------------------ vegetation
let leafGeo = null;
function getLeafGeo() {
  if (leafGeo) return leafGeo;
  const g = new THREE.PlaneGeometry(1.0, 3.6, 2, 6);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i) + 1.8; // 0..3.6 along leaf
    const t = y / 3.6;
    const width = Math.sin(Math.PI * Math.min(1, t * 1.15)) * 0.55 + 0.05;
    p.setX(i, x * width * 2);
    p.setY(i, y);
    p.setZ(i, -t * t * 1.5 + Math.abs(x) * 0.35);
  }
  g.rotateX(-Math.PI / 2 + 0.25);
  g.computeVertexNormals();
  leafGeo = g;
  return g;
}

export function palmTree(rng = Math.random) {
  const g = new THREE.Group();
  const height = 6 + rng() * 3.5;
  const segs = 8;
  const leanX = (rng() - 0.5) * 2.4, leanZ = (rng() - 0.5) * 2.4;
  let prev = new THREE.Vector3(0, 0, 0);
  const geos = [];
  for (let i = 1; i <= segs; i++) {
    const t = i / segs;
    const p = new THREE.Vector3(leanX * t * t, height * t, leanZ * t * t);
    const len = p.distanceTo(prev);
    const r0 = 0.3 - (i - 1) / segs * 0.12, r1 = 0.3 - i / segs * 0.12;
    const cg = new THREE.CylinderGeometry(r1, r0 * 1.08, len * 1.04, 7, 1);
    const mid = prev.clone().add(p).multiplyScalar(0.5);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), p.clone().sub(prev).normalize());
    cg.applyMatrix4(new THREE.Matrix4().compose(mid, q, new THREE.Vector3(1, 1, 1)));
    geos.push(cg);
    prev = p;
  }
  const trunk = mesh(mergeGeometries(geos), M.palmTrunk);
  g.add(trunk);
  const top = prev.clone();
  const n = 7 + Math.floor(rng() * 3);
  const leaves = new THREE.Group();
  leaves.position.copy(top);
  for (let i = 0; i < n; i++) {
    const l = mesh(getLeafGeo(), M.palmLeaf, true, false);
    l.rotation.y = (i / n) * Math.PI * 2 + rng() * 0.3;
    l.rotation.x = (rng() - 0.5) * 0.3;
    l.scale.setScalar(0.85 + rng() * 0.35);
    leaves.add(l);
  }
  g.add(leaves);
  for (let i = 0; i < 3; i++) {
    const c = mesh(new THREE.SphereGeometry(0.2, 7, 5), M.coconut);
    const a = (i / 3) * Math.PI * 2;
    c.position.set(top.x + Math.cos(a) * 0.3, top.y - 0.35, top.z + Math.sin(a) * 0.3);
    g.add(c);
  }
  // gentle sway
  const phase = rng() * 10;
  animated.push((dt, time) => {
    leaves.rotation.z = Math.sin(time * 0.9 + phase) * 0.05;
    leaves.rotation.x = Math.cos(time * 0.7 + phase) * 0.04;
  });
  return g;
}

/** Noisy smooth blob (foliage clumps, rocks) */
function blobGeo(r, detail, rng, amount = 0.25, squashY = 1) {
  const geo = new THREE.IcosahedronGeometry(r, detail);
  const p = geo.attributes.position;
  const ox = rng() * 100, oz = rng() * 100;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = Math.sin(v.x * 3.1 / r + ox) * Math.sin(v.y * 2.7 / r + oz) * Math.sin(v.z * 3.3 / r + ox * 0.5);
    const n2 = Math.sin(v.x * 7.3 / r + oz) * Math.sin(v.z * 6.1 / r + ox) * 0.5;
    v.multiplyScalar(1 + (n + n2) * amount);
    v.y *= squashY;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

export function pineTree(rng = Math.random, scale = 1) {
  const g = new THREE.Group();
  const h = (6 + rng() * 4) * scale;
  g.add(at(mesh(new THREE.CylinderGeometry(0.12 * scale, 0.32 * scale, h * 0.75, 10), M.trunk), 0, h * 0.37, 0));
  const layers = 6;
  for (let i = 0; i < layers; i++) {
    const t = i / layers;
    const r = (2.3 - t * 1.85) * scale;
    const lh = h * 0.3;
    const geo = new THREE.ConeGeometry(r, lh, 18, 3, true);
    // jagged, drooping branch tips around the skirt
    const p = geo.attributes.position;
    const ph = rng() * 10;
    for (let k = 0; k < p.count; k++) {
      const x = p.getX(k), y = p.getY(k), z = p.getZ(k);
      const a = Math.atan2(z, x);
      const rim = (lh / 2 - y) / lh; // 0 top .. 1 bottom
      const jag = 1 + (Math.sin(a * 9 + ph) * 0.12 + Math.sin(a * 23 + ph * 2) * 0.06) * rim;
      p.setXYZ(k, x * jag, y - rim * rim * 0.35 * scale * (1 + Math.sin(a * 9 + ph) * 0.5), z * jag);
    }
    geo.computeVertexNormals();
    const mat = (i % 2 ? M.pine : M.pineB);
    const cone = mesh(geo, mat);
    cone.position.y = h * 0.28 + t * h * 0.62;
    cone.rotation.y = rng() * 3;
    g.add(cone);
  }
  return g;
}

export function roundTree(rng = Math.random) {
  const g = new THREE.Group();
  const h = 3 + rng() * 2;
  g.add(at(mesh(new THREE.CylinderGeometry(0.18, 0.34, h, 10), M.trunk), 0, h / 2, 0));
  for (let i = 0; i < 3; i++) {
    const br = mesh(new THREE.CylinderGeometry(0.05, 0.11, 1.6, 6), M.trunk);
    const a = rng() * 6.28;
    br.position.set(Math.cos(a) * 0.45, h * 0.8, Math.sin(a) * 0.45);
    br.rotation.set(Math.sin(a) * 0.7, 0, -Math.cos(a) * 0.7);
    g.add(br);
  }
  const n = 6 + Math.floor(rng() * 3);
  for (let i = 0; i < n; i++) {
    const r = 1.0 + rng() * 0.7;
    const b = mesh(blobGeo(r, 3, rng, 0.16, 0.85), rng() > 0.5 ? M.leaf : M.leafLight);
    const a = (i / n) * 6.28 + rng();
    const d = i === 0 ? 0 : 0.9 + rng() * 0.6;
    b.position.set(Math.cos(a) * d, h + 0.4 + rng() * 1.3 - d * 0.3, Math.sin(a) * d);
    g.add(b);
  }
  return g;
}

export function bush(rng = Math.random) {
  const g = new THREE.Group();
  const n = 3 + Math.floor(rng() * 3);
  for (let i = 0; i < n; i++) {
    const b = mesh(blobGeo(0.45 + rng() * 0.4, 2, rng, 0.18, 0.8), rng() > 0.4 ? M.leaf : M.leafLight);
    b.position.set((rng() - 0.5) * 1.2, 0.3 + rng() * 0.25, (rng() - 0.5) * 1.2);
    g.add(b);
  }
  return g;
}

export function rock(rng = Math.random, size = 1, mat = M.rock) {
  const geo = blobGeo(1, 3, rng, 0.22, 0.62);
  // flatten the bottom so it sits on the ground, add facets
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    if (y < -0.25) p.setY(i, -0.25 + (y + 0.25) * 0.3);
    const x = p.getX(i), z = p.getZ(i);
    const f = 1 + Math.round(Math.sin(x * 4 + z * 3) * 2) * 0.03;
    p.setXYZ(i, x * f, p.getY(i), z * f);
  }
  geo.computeVertexNormals();
  const m = mesh(geo, mat);
  m.scale.setScalar(size);
  m.rotation.y = rng() * 6;
  return m;
}

// shared wind clock for grass
export const wind = { value: 0 };
animated.push((dt, time) => { wind.value = time; });

function bladeGeo() {
  // three crossed, tapered and bent blades
  const geos = [];
  for (let k = 0; k < 3; k++) {
    const g = new THREE.PlaneGeometry(0.07, 0.6, 1, 4);
    const p = g.attributes.position;
    const col = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i) + 0.3; // 0..0.6
      const t = y / 0.6;
      p.setX(i, p.getX(i) * (1 - t * 0.9));
      p.setY(i, y);
      p.setZ(i, t * t * 0.12);
      const c = 0.45 + t * 0.55;
      col[i * 3] = c; col[i * 3 + 1] = c; col[i * 3 + 2] = c;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.rotateY((k / 3) * Math.PI + Math.random() * 0.3);
    g.translate((Math.random() - 0.5) * 0.08, 0, (Math.random() - 0.5) * 0.08);
    geos.push(g);
  }
  const m = mergeGeometries(geos);
  m.computeVertexNormals();
  return m;
}

// instanced ground cover: swaying grass + flowers
export function groundCover(points, colorA = 0x4f9436, colorB = 0x8cc152) {
  const per = 6;
  const grassMat = new THREE.MeshStandardMaterial({ roughness: 0.9, side: THREE.DoubleSide, vertexColors: true });
  grassMat.onBeforeCompile = (sh) => {
    sh.uniforms.uWind = wind;
    sh.vertexShader = 'uniform float uWind;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      {
        vec4 wp = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float hh = position.y * position.y;
        transformed.x += sin(uWind * 1.7 + wp.x * 0.35 + wp.z * 0.2) * 0.35 * hh;
        transformed.z += cos(uWind * 1.3 + wp.x * 0.25 - wp.z * 0.3) * 0.2 * hh;
      }`);
  };
  const g1 = new THREE.InstancedMesh(bladeGeo(), grassMat, points.length * per);
  const flowerGeo = new THREE.IcosahedronGeometry(0.07, 1);
  flowerGeo.translate(0, 0.42, 0);
  const stemGeo = new THREE.CylinderGeometry(0.008, 0.01, 0.42, 4);
  stemGeo.translate(0, 0.21, 0);
  const flowerPts = points.filter((_, i) => i % 4 === 0);
  const g2 = new THREE.InstancedMesh(flowerGeo, new THREE.MeshStandardMaterial({ roughness: 0.55 }), flowerPts.length);
  const g3 = new THREE.InstancedMesh(stemGeo, new THREE.MeshStandardMaterial({ color: 0x3f7a2a, roughness: 0.9 }), flowerPts.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), c = new THREE.Color();
  const ca = new THREE.Color(colorA), cb = new THREE.Color(colorB);
  let k = 0;
  for (const p of points) {
    for (let j = 0; j < per; j++) {
      q.setFromEuler(new THREE.Euler((Math.random() - 0.5) * 0.3, Math.random() * 6, (Math.random() - 0.5) * 0.3));
      const sc = 0.6 + Math.random() * 0.9;
      s.set(sc, sc * (0.8 + Math.random() * 0.6), sc);
      m.compose(new THREE.Vector3(p.x + (Math.random() - 0.5) * 1.1, p.y, p.z + (Math.random() - 0.5) * 1.1), q, s);
      g1.setMatrixAt(k, m);
      g1.setColorAt(k, c.copy(ca).lerp(cb, Math.random()));
      k++;
    }
  }
  const fcols = [0xff6b8a, 0xffd54a, 0xffffff, 0xb57bff, 0xff8a3d];
  flowerPts.forEach((p, i) => {
    m.compose(new THREE.Vector3(p.x + 0.3, p.y, p.z - 0.2), q.identity(), s.setScalar(0.8 + Math.random() * 0.6));
    g2.setMatrixAt(i, m); g3.setMatrixAt(i, m);
    g2.setColorAt(i, c.set(fcols[i % fcols.length]));
  });
  g1.receiveShadow = true;
  const grp = new THREE.Group();
  grp.add(g1, g2, g3);
  return grp;
}

// ------------------------------------------------------------------ buildings
function prismGeo(w, h, d) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2, 0); s.lineTo(w / 2, 0); s.lineTo(0, h); s.lineTo(-w / 2, 0);
  const g = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: false });
  g.translate(0, 0, -d / 2);
  return g;
}

/** A small house. Origin = ground centre, door faces local +Z. */
export function house(opts = {}) {
  const { w = 7, d = 6, h = 3.6, wall = M.wallCream, roof = M.roofRed, sign = null, chimney = true, porch = true } = opts;
  const g = new THREE.Group();
  // foundation
  g.add(at(mesh(new THREE.BoxGeometry(w + 0.4, 0.5, d + 0.4), M.stone), 0, 0.0, 0));
  const walls = mesh(new THREE.BoxGeometry(w, h, d), wall);
  walls.position.y = h / 2 + 0.25;
  g.add(walls);
  // timber corners
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const post = mesh(new THREE.BoxGeometry(0.3, h, 0.3), M.woodDark);
    post.position.set(sx * (w / 2), h / 2 + 0.25, sz * (d / 2));
    g.add(post);
  }
  const beam = mesh(new THREE.BoxGeometry(w + 0.2, 0.25, d + 0.2), M.woodDark);
  beam.position.y = h + 0.25;
  g.add(beam);
  // roof
  const rh = w * 0.45;
  const r = mesh(prismGeo(w + 1.2, rh, d + 1.0), roof);
  r.position.y = h + 0.3;
  g.add(r);
  // gable fill
  const gable = mesh(prismGeo(w, rh - 0.3, d - 0.05), wall);
  gable.position.y = h + 0.3;
  g.add(gable);
  if (chimney) {
    const c = mesh(new THREE.BoxGeometry(0.8, 2.2, 0.8), M.stone);
    c.position.set(w * 0.25, h + rh * 0.7, -d * 0.2);
    g.add(c);
  }
  // door
  const door = mesh(new THREE.BoxGeometry(1.2, 2.2, 0.15), M.woodDark);
  door.position.set(0, 1.35, d / 2 + 0.05);
  g.add(door);
  const knob = mesh(new THREE.SphereGeometry(0.07, 6, 4), M.metal);
  knob.position.set(0.4, 1.3, d / 2 + 0.15);
  g.add(knob);
  // windows
  const addWin = (x, y, z, ry) => {
    const win = mesh(new THREE.BoxGeometry(1.1, 1.0, 0.12), M.window, false);
    win.position.set(x, y, z); win.rotation.y = ry;
    const frame = mesh(new THREE.BoxGeometry(1.3, 1.2, 0.08), M.woodLight, false);
    frame.position.set(x, y, z); frame.rotation.y = ry;
    frame.translateZ(-0.03);
    const sill = mesh(new THREE.BoxGeometry(1.4, 0.12, 0.3), M.woodDark);
    sill.position.set(x, y - 0.6, z); sill.rotation.y = ry;
    g.add(frame, win, sill);
  };
  addWin(-w * 0.3, h * 0.55 + 0.3, d / 2 + 0.04, 0);
  addWin(w * 0.3, h * 0.55 + 0.3, d / 2 + 0.04, 0);
  addWin(w / 2 + 0.04, h * 0.55 + 0.3, 0, Math.PI / 2);
  addWin(-w / 2 - 0.04, h * 0.55 + 0.3, 0, -Math.PI / 2);
  addWin(0, h * 0.55 + 0.3, -d / 2 - 0.04, Math.PI);
  if (porch) {
    const step = mesh(new THREE.BoxGeometry(2.2, 0.3, 1.2), M.plank);
    step.position.set(0, 0.15, d / 2 + 0.7);
    g.add(step);
    const awn = mesh(new THREE.BoxGeometry(2.4, 0.12, 1.4), roof);
    awn.position.set(0, 2.85, d / 2 + 0.7);
    awn.rotation.x = 0.25;
    g.add(awn);
  }
  if (sign) {
    const tex = makeTextCanvas(sign, { w: 512, h: 128, bg: '#6b4423', border: '#3d2510', color: '#ffe9b0', stroke: '#2a1808', font: 'bold 70px "Microsoft JhengHei", sans-serif' });
    const sp = mesh(new THREE.PlaneGeometry(2.6, 0.65), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 }), false);
    sp.position.set(0, h - 0.2, d / 2 + 0.2);
    g.add(sp);
  }
  return g;
}

export function lantern(withLight = false, color = 0xffb347) {
  const g = new THREE.Group();
  const post = mesh(new THREE.CylinderGeometry(0.09, 0.12, 2.6, 6), M.woodDark);
  post.position.y = 1.3;
  g.add(post);
  const arm = mesh(new THREE.BoxGeometry(0.6, 0.08, 0.08), M.woodDark);
  arm.position.set(0.25, 2.5, 0);
  g.add(arm);
  const glass = mesh(new THREE.BoxGeometry(0.3, 0.4, 0.3), M.lampGlass, false);
  glass.position.set(0.5, 2.2, 0);
  const cap = mesh(new THREE.ConeGeometry(0.28, 0.2, 4), M.dark);
  cap.position.set(0.5, 2.5, 0); cap.rotation.y = Math.PI / 4;
  g.add(glass, cap);
  if (withLight) {
    const l = new THREE.PointLight(color, 0, 16, 1.6);
    l.position.set(0.5, 2.1, 0);
    g.add(l);
    nightLights.push({ light: l, base: 9 });
  }
  return g;
}

/** Wooden pier along local +X. Deck top at `top` (world Y, group at y=0). */
export function dock(length = 24, width = 3.2, top = 1.4, opts = {}) {
  const g = new THREE.Group();
  const plankGeos = [];
  const pw = 0.5;
  for (let x = 0; x < length; x += pw + 0.05) {
    const b = new THREE.BoxGeometry(pw, 0.14, width * (0.96 + Math.random() * 0.06));
    b.translate(x + pw / 2, top - 0.07 + (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.08);
    plankGeos.push(b);
  }
  const deck = mesh(mergeGeometries(plankGeos), M.plank);
  g.add(deck);
  const postGeos = [];
  for (let x = 0.3; x <= length; x += 3) {
    for (const s of [-1, 1]) {
      const c = new THREE.CylinderGeometry(0.16, 0.18, top + 8, 7);
      c.translate(x, (top - 8) / 2 + 0.25, s * (width / 2 - 0.05));
      postGeos.push(c);
    }
  }
  g.add(mesh(mergeGeometries(postGeos), M.woodDark));
  // side beams
  for (const s of [-1, 1]) {
    const beam = mesh(new THREE.BoxGeometry(length, 0.25, 0.18), M.woodDark);
    beam.position.set(length / 2, top - 0.25, s * (width / 2));
    g.add(beam);
  }
  // rail posts + rope on one side
  if (opts.rail !== false) {
    const rg = [];
    for (let x = 1.5; x < length - 1; x += 3) {
      const c = new THREE.CylinderGeometry(0.07, 0.07, 1.0, 5);
      c.translate(x, top + 0.5, width / 2 - 0.1);
      rg.push(c);
    }
    g.add(mesh(mergeGeometries(rg), M.woodDark));
    const rope = mesh(new THREE.CylinderGeometry(0.035, 0.035, length - 3, 4), M.rope);
    rope.rotation.z = Math.PI / 2;
    rope.position.set(length / 2, top + 0.85, width / 2 - 0.1);
    g.add(rope);
  }
  // lanterns
  const l1 = lantern(true); l1.position.set(length - 0.6, top, -width / 2 + 0.25); l1.rotation.y = Math.PI / 2;
  const l2 = lantern(false); l2.position.set(length * 0.45, top, -width / 2 + 0.25); l2.rotation.y = Math.PI / 2;
  g.add(l1, l2);
  return g;
}

export function crate(size = 0.9) {
  const g = new THREE.Group();
  g.add(mesh(new THREE.BoxGeometry(size, size, size), M.woodLight));
  const band = mesh(new THREE.BoxGeometry(size * 1.02, size * 0.14, size * 1.02), M.woodDark);
  band.position.y = size * 0.3; g.add(band);
  const band2 = band.clone(); band2.position.y = -size * 0.3; g.add(band2);
  g.children.forEach((c) => (c.position.y += size / 2));
  return g;
}

export function barrel() {
  const g = new THREE.Group();
  const b = mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.1, 10), M.wood);
  b.position.y = 0.55;
  const mid = mesh(new THREE.CylinderGeometry(0.47, 0.47, 0.6, 10), M.wood);
  mid.position.y = 0.55;
  for (const y of [0.2, 0.9]) {
    const r = mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.06, 10), M.metal);
    r.position.y = y; g.add(r);
  }
  g.add(b, mid);
  return g;
}

export function fishRack() {
  const g = new THREE.Group();
  for (const x of [-1.5, 1.5]) {
    const p = mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2, 5), M.woodDark);
    p.position.set(x, 1.1, 0); g.add(p);
  }
  const bar = mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.2, 5), M.woodDark);
  bar.rotation.z = Math.PI / 2; bar.position.y = 2.1; g.add(bar);
  const fm = std(0xa0a8a8, { metalness: 0.3, roughness: 0.5 });
  for (let i = 0; i < 5; i++) {
    const f = mesh(new THREE.ConeGeometry(0.16, 0.8, 5), fm);
    f.position.set(-1.1 + i * 0.55, 1.65, 0);
    f.rotation.x = Math.PI;
    g.add(f);
  }
  return g;
}

export function bench() {
  const g = new THREE.Group();
  const seat = mesh(new THREE.BoxGeometry(2.2, 0.12, 0.6), M.woodLight);
  seat.position.y = 0.55; g.add(seat);
  for (const x of [-0.9, 0.9]) {
    const l = mesh(new THREE.BoxGeometry(0.12, 0.55, 0.5), M.woodDark);
    l.position.set(x, 0.27, 0); g.add(l);
  }
  const back = mesh(new THREE.BoxGeometry(2.2, 0.5, 0.08), M.woodLight);
  back.position.set(0, 0.95, -0.27); g.add(back);
  return g;
}

export function signpost(text, sub = '') {
  const g = new THREE.Group();
  const post = mesh(new THREE.CylinderGeometry(0.1, 0.12, 2.4, 6), M.woodDark);
  post.position.y = 1.2; g.add(post);
  const lines = sub ? [{ text, lh: 60 }, { text: sub, font: 'bold 36px "Microsoft JhengHei", sans-serif', lh: 50 }] : [text];
  const tex = makeTextCanvas(lines, { w: 512, h: 160, bg: '#8a5a2b', border: '#4a2e14', color: '#fff4d6', stroke: '#3b230e' });
  const board = mesh(new THREE.BoxGeometry(2.2, 0.7, 0.1), [M.wood, M.wood, M.wood, M.wood, new THREE.MeshStandardMaterial({ map: tex }), new THREE.MeshStandardMaterial({ map: tex })]);
  board.position.y = 2.0;
  g.add(board);
  return g;
}

export function welcomeArch(text) {
  const g = new THREE.Group();
  for (const x of [-2.6, 2.6]) {
    const p = mesh(new THREE.CylinderGeometry(0.22, 0.28, 4.4, 7), M.woodDark);
    p.position.set(x, 2.2, 0); g.add(p);
  }
  const tex = makeTextCanvas(text, { w: 1024, h: 192, bg: '#2f6fa3', border: '#f1d27a', color: '#ffffff', stroke: '#0f2a40', font: 'bold 110px "Arial Black", "Microsoft JhengHei", sans-serif' });
  const board = mesh(new THREE.BoxGeometry(6.2, 1.15, 0.2), [M.wood, M.wood, M.wood, M.wood, new THREE.MeshStandardMaterial({ map: tex }), new THREE.MeshStandardMaterial({ map: tex })]);
  board.position.y = 4.4; g.add(board);
  const roof = mesh(prismGeo(7, 0.9, 0.9), M.roofBlue);
  roof.position.y = 5.0; g.add(roof);
  return g;
}

/** Fish merchant stall with striped awning. Counter faces local +Z. */
export function stall(sign = '鮮魚收購') {
  const g = new THREE.Group();
  const counter = mesh(new THREE.BoxGeometry(4.2, 1.1, 1.3), M.woodLight);
  counter.position.set(0, 0.55, 0.9); g.add(counter);
  const top = mesh(new THREE.BoxGeometry(4.4, 0.12, 1.5), M.woodDark);
  top.position.set(0, 1.15, 0.9); g.add(top);
  for (const x of [-2.1, 2.1]) for (const z of [-1, 1.5]) {
    const p = mesh(new THREE.CylinderGeometry(0.09, 0.09, 3.4, 6), M.woodDark);
    p.position.set(x, 1.7, z); g.add(p);
  }
  // striped awning
  const c = document.createElement('canvas'); c.width = 256; c.height = 64;
  const x2 = c.getContext('2d');
  for (let i = 0; i < 8; i++) { x2.fillStyle = i % 2 ? '#f4f1ea' : '#d9483b'; x2.fillRect(i * 32, 0, 32, 64); }
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const awnMat = new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.9 });
  const awn = mesh(new THREE.PlaneGeometry(4.8, 3.0, 8, 1), awnMat);
  awn.rotation.x = -Math.PI / 2 + 0.32;
  awn.position.set(0, 3.25, 0.3);
  g.add(awn);
  // scalloped edge
  for (let i = 0; i < 8; i++) {
    const s = mesh(new THREE.ConeGeometry(0.3, 0.35, 3), i % 2 ? M.white : M.red, false);
    s.rotation.x = Math.PI; s.position.set(-2.1 + i * 0.6, 2.62, 1.75);
    g.add(s);
  }
  // ice tray with fish
  const ice = mesh(new THREE.BoxGeometry(3.6, 0.15, 1.0), M.ice);
  ice.position.set(0, 1.27, 0.9); g.add(ice);
  const fishMats = [std(0x9fb3c0, { metalness: 0.4, roughness: 0.35 }), std(0xe07a5f, { roughness: 0.4 }), std(0x6d8fa8, { metalness: 0.4, roughness: 0.35 })];
  for (let i = 0; i < 6; i++) {
    const f = mesh(new THREE.SphereGeometry(0.18, 8, 6), fishMats[i % 3]);
    f.scale.set(2.4, 0.6, 0.8);
    f.position.set(-1.4 + i * 0.56, 1.42, 0.75 + (i % 2) * 0.25);
    f.rotation.y = (Math.random() - 0.5) * 0.4;
    g.add(f);
    const tail = mesh(new THREE.ConeGeometry(0.15, 0.3, 3), fishMats[i % 3]);
    tail.rotation.z = Math.PI / 2;
    tail.position.set(f.position.x + 0.5, 1.42, f.position.z);
    g.add(tail);
  }
  // sign board
  const st = makeTextCanvas(sign, { w: 512, h: 128, bg: '#1e4d6b', border: '#f3d27a', color: '#ffffff', stroke: '#0b2233', font: 'bold 76px "Microsoft JhengHei", sans-serif' });
  const sb = mesh(new THREE.PlaneGeometry(3, 0.75), new THREE.MeshStandardMaterial({ map: st }), false);
  sb.position.set(0, 3.55, 1.85); sb.rotation.x = -0.1;
  g.add(sb);
  // hanging scale + barrel
  const b = barrel(); b.position.set(2.8, 0, 1.2); g.add(b);
  const cr = crate(); cr.position.set(-2.9, 0, 1.0); cr.rotation.y = 0.3; g.add(cr);
  const l = lantern(true); l.position.set(2.4, 0, 2.0); g.add(l);
  return g;
}

export function lighthouse() {
  const g = new THREE.Group();
  const base = mesh(new THREE.CylinderGeometry(3.2, 3.6, 1.2, 12), M.stone);
  base.position.y = 0.6; g.add(base);
  const segs = 6, total = 14;
  for (let i = 0; i < segs; i++) {
    const r0 = 2.4 - (i / segs) * 0.9, r1 = 2.4 - ((i + 1) / segs) * 0.9;
    const s = mesh(new THREE.CylinderGeometry(r1, r0, total / segs, 16), i % 2 ? M.red : M.white);
    s.position.y = 1.2 + (i + 0.5) * (total / segs);
    g.add(s);
  }
  const topY = 1.2 + total;
  const gallery = mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.25, 16), M.dark);
  gallery.position.y = topY; g.add(gallery);
  const glass = mesh(new THREE.CylinderGeometry(1.1, 1.1, 1.8, 10), M.lampGlass, false);
  glass.position.y = topY + 1.0; g.add(glass);
  const roof = mesh(new THREE.ConeGeometry(1.5, 1.4, 10), M.red);
  roof.position.y = topY + 2.6; g.add(roof);
  const ball = mesh(new THREE.SphereGeometry(0.2, 8, 6), M.metal);
  ball.position.y = topY + 3.4; g.add(ball);
  const door = mesh(new THREE.BoxGeometry(1.2, 2.2, 0.3), M.woodDark);
  door.position.set(0, 2.3, 2.3); g.add(door);
  // rotating beam
  const beamMat = new THREE.MeshBasicMaterial({ color: 0xfff3c0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  const beamGeo = new THREE.ConeGeometry(4, 60, 16, 1, true);
  beamGeo.translate(0, -30, 0);
  beamGeo.rotateZ(Math.PI / 2);
  const pivot = new THREE.Group();
  pivot.position.y = topY + 1.0;
  const b1 = new THREE.Mesh(beamGeo, beamMat); const b2 = new THREE.Mesh(beamGeo, beamMat); b2.rotation.y = Math.PI;
  pivot.add(b1, b2);
  g.add(pivot);
  const light = new THREE.PointLight(0xffe2a0, 0, 40, 1.5);
  light.position.y = topY + 1.0; g.add(light);
  nightLights.push({ light, base: 30 });
  animated.push((dt, time, night) => {
    pivot.rotation.y += dt * 0.6;
    beamMat.opacity = 0.14 * night;
    pivot.visible = night > 0.05;
  });
  return g;
}

export function windmill() {
  const g = new THREE.Group();
  const tower = mesh(new THREE.CylinderGeometry(1.6, 2.6, 9, 8), M.wallWhite);
  tower.position.y = 4.5; g.add(tower);
  const cap = mesh(new THREE.ConeGeometry(2.2, 2.4, 8), M.roofBrown);
  cap.position.y = 10.2; g.add(cap);
  const door = mesh(new THREE.BoxGeometry(1.2, 2.0, 0.3), M.woodDark);
  door.position.set(0, 1.0, 2.45); g.add(door);
  const hub = new THREE.Group();
  hub.position.set(0, 8.6, 2.1);
  const axle = mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.8, 8), M.woodDark);
  axle.rotation.x = Math.PI / 2; hub.add(axle);
  for (let i = 0; i < 4; i++) {
    const arm = new THREE.Group();
    arm.rotation.z = (i / 4) * Math.PI * 2;
    const spar = mesh(new THREE.BoxGeometry(0.2, 6.5, 0.15), M.woodDark);
    spar.position.y = 3.3; arm.add(spar);
    const sail = mesh(new THREE.PlaneGeometry(1.3, 5.2), M.sail);
    sail.position.set(0.75, 3.6, 0.05); arm.add(sail);
    hub.add(arm);
  }
  g.add(hub);
  animated.push((dt) => { hub.rotation.z -= dt * 0.7; });
  return g;
}

export function campfire() {
  const g = new THREE.Group();
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const s = rock(Math.random, 0.32, M.stone);
    s.position.set(Math.cos(a) * 0.9, 0.12, Math.sin(a) * 0.9);
    g.add(s);
  }
  for (let i = 0; i < 4; i++) {
    const l = mesh(new THREE.CylinderGeometry(0.1, 0.12, 1.3, 6), M.trunk);
    l.rotation.z = Math.PI / 2 - 0.5; l.rotation.y = (i / 4) * Math.PI * 2;
    l.position.y = 0.35;
    g.add(l);
  }
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffa030, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
  const flameMat2 = new THREE.MeshBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
  const flames = [];
  for (let i = 0; i < 5; i++) {
    const f = new THREE.Mesh(new THREE.ConeGeometry(0.28 - i * 0.03, 1.1 - i * 0.1, 6), i % 2 ? flameMat2 : flameMat);
    f.position.set((Math.random() - 0.5) * 0.3, 0.75, (Math.random() - 0.5) * 0.3);
    g.add(f); flames.push(f);
  }
  const light = new THREE.PointLight(0xff8a3a, 4, 14, 1.5);
  light.position.y = 1.3; g.add(light);
  light.castShadow = false;
  nightLights.push({ light, base: 14, flicker: true });
  animated.push((dt, time) => {
    flames.forEach((f, i) => {
      const s = 0.8 + 0.35 * Math.sin(time * (8 + i * 2.3) + i);
      f.scale.set(1, s, 1);
      f.rotation.y = time * (1 + i * 0.3);
    });
  });
  return g;
}

/** Simple motor boat. Bow points to local +X. Floor around y=0.25. */
export function boatModel(color = 0xf4f4f4, stripe = 0x2b6cb0) {
  const g = new THREE.Group();
  const outline = (s) => {
    const sh = new THREE.Shape();
    sh.moveTo(-2.4 * s, -1.05 * s);
    sh.lineTo(1.0 * s, -1.1 * s);
    sh.quadraticCurveTo(2.4 * s, -0.9 * s, 2.9 * s, 0);
    sh.quadraticCurveTo(2.4 * s, 0.9 * s, 1.0 * s, 1.1 * s);
    sh.lineTo(-2.4 * s, 1.05 * s);
    sh.lineTo(-2.4 * s, -1.05 * s);
    return sh;
  };
  const outer = outline(1);
  const inner = outline(0.86);
  outer.holes.push(inner);
  const wallGeo = new THREE.ExtrudeGeometry(outer, { depth: 0.95, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 1 });
  wallGeo.rotateX(-Math.PI / 2);
  const walls = mesh(wallGeo, std(color, { roughness: 0.5 }));
  walls.position.y = -0.35;
  g.add(walls);
  const stripeGeo = new THREE.ExtrudeGeometry(outline(1.015), { depth: 0.16, bevelEnabled: false });
  stripeGeo.rotateX(-Math.PI / 2);
  const st = mesh(stripeGeo, std(stripe, { roughness: 0.5 }));
  st.position.y = 0.32; g.add(st);
  const floorGeo = new THREE.ExtrudeGeometry(outline(0.9), { depth: 0.12, bevelEnabled: false });
  floorGeo.rotateX(-Math.PI / 2);
  const floor = mesh(floorGeo, M.plank);
  floor.position.y = -0.2; g.add(floor);
  const keelGeo = new THREE.ExtrudeGeometry(outline(0.75), { depth: 0.35, bevelEnabled: false });
  keelGeo.rotateX(-Math.PI / 2);
  const keel = mesh(keelGeo, std(stripe, { roughness: 0.6 }));
  keel.position.y = -0.62; g.add(keel);
  for (const x of [-1.2, 0.6]) {
    const seat = mesh(new THREE.BoxGeometry(0.55, 0.1, 1.8), M.woodLight);
    seat.position.set(x, 0.3, 0); g.add(seat);
  }
  // outboard motor
  const motor = new THREE.Group();
  const body = mesh(new THREE.BoxGeometry(0.6, 0.7, 0.5), std(0x222428, { roughness: 0.4 }));
  body.position.y = 0.55; motor.add(body);
  const cap = mesh(new THREE.BoxGeometry(0.62, 0.15, 0.52), std(0xd9483b, { roughness: 0.4 }));
  cap.position.y = 0.95; motor.add(cap);
  const shaft = mesh(new THREE.BoxGeometry(0.15, 1.1, 0.15), M.metal);
  shaft.position.y = -0.2; motor.add(shaft);
  const prop = mesh(new THREE.BoxGeometry(0.05, 0.45, 0.1), M.metal);
  prop.position.set(-0.1, -0.65, 0); motor.add(prop);
  motor.position.set(-2.6, 0, 0);
  g.add(motor);
  g.userData.prop = prop;
  g.userData.motor = motor;
  return g;
}

// palm fronds are baked into one mesh, so they sway in the vertex shader instead
M.palmLeaf.onBeforeCompile = (sh) => {
  sh.uniforms.uWind = wind;
  sh.vertexShader = 'uniform float uWind;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
    {
      float k = clamp((position.y - 4.0) * 0.12, 0.0, 1.0);
      transformed.x += sin(uWind * 0.9 + position.x * 0.15 + position.z * 0.1) * 0.12 * k;
      transformed.z += cos(uWind * 0.7 + position.z * 0.15) * 0.08 * k;
      transformed.y += sin(uWind * 1.3 + position.x * 0.4) * 0.05 * k;
    }`);
};
