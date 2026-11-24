import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// ------------------------------------------------------------------ materials
const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...o });
export const M = {
  wood: std(0x8b5a2b), woodDark: std(0x5a3a1e), woodLight: std(0xb3824e), plank: std(0x9a6b3e),
  plankOld: std(0x7f6a55), roofRed: std(0xb4452f, { flatShading: true }), roofBlue: std(0x3d5f8c, { flatShading: true }),
  roofGreen: std(0x4c7a3c, { flatShading: true }), roofBrown: std(0x6e4a2e, { flatShading: true }),
  wallCream: std(0xefe1c2), wallWhite: std(0xf1eee6), wallBlue: std(0xa9c9d8), wallPink: std(0xe8c4b8), wallYellow: std(0xf0dc9a),
  stone: std(0x8d8780, { flatShading: true }), rock: std(0x7d776d, { flatShading: true }), rockDark: std(0x5f5a52, { flatShading: true }),
  leaf: std(0x3f8f3a, { flatShading: true }), leafLight: std(0x5aa944, { flatShading: true }), palmLeaf: std(0x4a9a3c, { side: THREE.DoubleSide, flatShading: true }),
  pine: std(0x2c6537, { flatShading: true }), trunk: std(0x6b4a2e, { flatShading: true }), palmTrunk: std(0x8f6f48, { flatShading: true }),
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

export function pineTree(rng = Math.random, scale = 1) {
  const g = new THREE.Group();
  const h = (5 + rng() * 4) * scale;
  g.add(at(mesh(new THREE.CylinderGeometry(0.18 * scale, 0.3 * scale, h * 0.4, 6), M.trunk), 0, h * 0.2, 0));
  const layers = 4;
  for (let i = 0; i < layers; i++) {
    const t = i / layers;
    const r = (2.2 - t * 1.5) * scale;
    const cone = mesh(new THREE.ConeGeometry(r, h * 0.42, 7), rng() > 0.5 ? M.pine : M.leaf);
    cone.position.y = h * 0.3 + t * h * 0.55;
    cone.rotation.y = rng() * 3;
    g.add(cone);
  }
  return g;
}

export function roundTree(rng = Math.random) {
  const g = new THREE.Group();
  const h = 3 + rng() * 2;
  g.add(at(mesh(new THREE.CylinderGeometry(0.22, 0.35, h, 6), M.trunk), 0, h / 2, 0));
  for (let i = 0; i < 4; i++) {
    const b = mesh(new THREE.IcosahedronGeometry(1.3 + rng() * 0.8, 0), rng() > 0.5 ? M.leaf : M.leafLight);
    b.position.set((rng() - 0.5) * 2, h + rng() * 1.2, (rng() - 0.5) * 2);
    b.rotation.set(rng(), rng(), rng());
    g.add(b);
  }
  return g;
}

export function bush(rng = Math.random) {
  const g = new THREE.Group();
  const n = 2 + Math.floor(rng() * 3);
  for (let i = 0; i < n; i++) {
    const b = mesh(new THREE.IcosahedronGeometry(0.5 + rng() * 0.5, 0), rng() > 0.4 ? M.leaf : M.leafLight);
    b.position.set((rng() - 0.5) * 1.2, 0.35 + rng() * 0.3, (rng() - 0.5) * 1.2);
    b.rotation.set(rng(), rng(), rng());
    g.add(b);
  }
  return g;
}

export function rock(rng = Math.random, size = 1, mat = M.rock) {
  const geo = new THREE.IcosahedronGeometry(1, 1);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const v = new THREE.Vector3().fromBufferAttribute(p, i);
    const k = 0.75 + rng() * 0.45;
    v.multiplyScalar(k);
    v.y *= 0.7;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  const m = mesh(geo, mat);
  m.scale.setScalar(size);
  m.rotation.y = rng() * 6;
  return m;
}

// instanced ground cover: grass tufts + flowers
export function groundCover(points, colorA = 0x5ea33f, colorB = 0x8cc152) {
  const grassGeo = new THREE.ConeGeometry(0.12, 0.55, 3);
  grassGeo.translate(0, 0.27, 0);
  const g1 = new THREE.InstancedMesh(grassGeo, new THREE.MeshStandardMaterial({ roughness: 1, flatShading: true }), points.length * 3);
  const flowerGeo = new THREE.IcosahedronGeometry(0.11, 0);
  flowerGeo.translate(0, 0.35, 0);
  const flowerPts = points.filter((_, i) => i % 5 === 0);
  const g2 = new THREE.InstancedMesh(flowerGeo, new THREE.MeshStandardMaterial({ roughness: 0.6, emissiveIntensity: 0.05 }), flowerPts.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), c = new THREE.Color();
  const ca = new THREE.Color(colorA), cb = new THREE.Color(colorB);
  let k = 0;
  for (const p of points) {
    for (let j = 0; j < 3; j++) {
      q.setFromEuler(new THREE.Euler((Math.random() - 0.5) * 0.5, Math.random() * 6, (Math.random() - 0.5) * 0.5));
      s.setScalar(0.7 + Math.random() * 0.8);
      m.compose(new THREE.Vector3(p.x + (Math.random() - 0.5) * 0.5, p.y, p.z + (Math.random() - 0.5) * 0.5), q, s);
      g1.setMatrixAt(k, m);
      g1.setColorAt(k, c.copy(ca).lerp(cb, Math.random()));
      k++;
    }
  }
  const fcols = [0xff6b8a, 0xffd54a, 0xffffff, 0xb57bff, 0xff8a3d];
  flowerPts.forEach((p, i) => {
    m.compose(new THREE.Vector3(p.x + 0.3, p.y, p.z - 0.2), q.identity(), s.setScalar(0.8 + Math.random() * 0.6));
    g2.setMatrixAt(i, m);
    g2.setColorAt(i, c.set(fcols[i % fcols.length]));
  });
  g1.receiveShadow = true;
  const grp = new THREE.Group();
  grp.add(g1, g2);
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
