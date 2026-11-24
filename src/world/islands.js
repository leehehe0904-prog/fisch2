import * as THREE from 'three';
import { ISLANDS, islandById, terrainHeight, buildIslandMesh } from './terrain.js';
import { addBox, addCircle } from './collision.js';
import * as P from './props.js';
import { mulberry32 } from '../core/noise.js';
import { SCRIPTS } from '../npc/scripts.js';
import { mergeStatic } from '../core/merge.js';

const faceTo = (ax, az, bx, bz) => Math.atan2(bx - ax, bz - az);
// local offset rotated like three.js rotation.y
function rotOff(rot, lx, lz) {
  return { x: lx * Math.cos(rot) + lz * Math.sin(rot), z: -lx * Math.sin(rot) + lz * Math.cos(rot) };
}

function shadows(o, cast = true) {
  o.traverse((c) => { if (c.isMesh) { c.castShadow = cast; c.receiveShadow = true; } });
}

class Builder {
  constructor(scene, isl, seed) {
    this.scene = scene;
    this.isl = isl;
    this.rng = mulberry32(seed);
    this.excl = []; // {x,z,r} world
    this.npcs = [];
    this.root = new THREE.Group(); // static scenery, baked into a few meshes at the end
    this.dynamic = false;
  }
  w(lx, lz) { return { x: this.isl.cx + lx, z: this.isl.cz + lz }; }
  h(x, z) { return terrainHeight(x, z); }
  add(obj, lx, lz, rot = 0, y = null, cast = true) {
    const p = this.w(lx, lz);
    obj.position.set(p.x, y ?? this.h(p.x, p.z), p.z);
    obj.rotation.y = rot;
    shadows(obj, cast);
    (this.dynamic ? this.scene : this.root).add(obj);
    return obj;
  }
  exclude(lx, lz, r) { const p = this.w(lx, lz); this.excl.push({ x: p.x, z: p.z, r }); }
  free(x, z, pad = 0) { return !this.excl.some((e) => (x - e.x) ** 2 + (z - e.z) ** 2 < (e.r + pad) ** 2); }

  house(lx, lz, opts, faceLx, faceLz) {
    const rot = faceTo(lx, lz, faceLx, faceLz);
    const p = this.w(lx, lz);
    const y = this.h(p.x, p.z);
    const hs = P.house(opts);
    this.add(hs, lx, lz, rot, y - 0.05);
    P.occluders.push(hs);
    const w = opts.w || 7, d = opts.d || 6;
    addBox(p.x, p.z, w + 0.5, d + 0.5, y + (opts.h || 3.6) + 4, rot);
    this.exclude(lx, lz, Math.max(w, d) * 0.75 + 1);
    return { rot, p, y };
  }

  dock(lx, lz, length, rot, top = 1.5) {
    const d = P.dock(length, 3.2, top);
    this.add(d, lx, lz, rot, 0);
    const c = rotOff(rot, length / 2, 0);
    const p = this.w(lx + c.x, lz + c.z);
    addBox(p.x, p.z, length, 3.2, top, rot, { walkable: true });
    for (let s = 0; s <= length; s += 4) { const o = rotOff(rot, s, 0); this.exclude(lx + o.x, lz + o.z, 4); }
    return d;
  }

  npc(id, name, title, lx, lz, yaw, look, extra = {}) {
    const p = this.w(lx, lz);
    const y = extra.y ?? this.h(p.x, p.z);
    this.npcs.push({ id, name, title, x: p.x, y, z: p.z, yaw, look, talk: SCRIPTS[extra.script || id], ...extra });
    this.exclude(lx, lz, 2);
  }

  lanternAt(lx, lz, light = false) {
    const p = this.w(lx, lz);
    const l = P.lantern(light);
    this.add(l, lx, lz, this.rng() * 6);
    addCircle(p.x, p.z, 0.2, this.h(p.x, p.z) + 3);
  }

  scatter(n, fn, test, pad = 1.5) {
    let placed = 0, tries = 0;
    const R = this.isl.radius;
    while (placed < n && tries < n * 30) {
      tries++;
      const a = this.rng() * Math.PI * 2, r = Math.sqrt(this.rng()) * R * 1.05;
      const lx = Math.cos(a) * r, lz = Math.sin(a) * r;
      const p = this.w(lx, lz);
      const h = this.h(p.x, p.z);
      if (!test(h, lx, lz, p)) continue;
      if (!this.free(p.x, p.z, pad)) continue;
      fn(lx, lz, h, p);
      placed++;
    }
  }

  groundCover(n, minH = 1.9) {
    const pts = [];
    let tries = 0;
    while (pts.length < n && tries < n * 20) {
      tries++;
      const a = this.rng() * Math.PI * 2, r = Math.sqrt(this.rng()) * this.isl.radius;
      const p = this.w(Math.cos(a) * r, Math.sin(a) * r);
      const h = this.h(p.x, p.z);
      if (h < minH || !this.free(p.x, p.z, -1)) continue;
      const hx = this.h(p.x + 1, p.z), hz = this.h(p.x, p.z + 1);
      if (Math.abs(hx - h) > 0.7 || Math.abs(hz - h) > 0.7) continue;
      pts.push(new THREE.Vector3(p.x, h - 0.05, p.z));
    }
    this.scene.add(P.groundCover(pts));
  }
}

// =====================================================================================
export function buildWorld(scene) {
  const out = { npcs: [], spawn: null, boatSpawns: {} };
  for (const isl of ISLANDS) scene.add(buildIslandMesh(isl));
  buildNoob(scene, islandById('noob'), out);
  buildNormal(scene, islandById('normal'), out);
  return out;
}

// ------------------------------------------------------------------ noob Island
function buildNoob(scene, isl, out) {
  const B = new Builder(scene, isl, 1234);
  const plaza = isl.flats[0];
  for (const f of isl.flats) B.exclude(f.x, f.z, f.r * 0.8);

  // dock heading east (+X)
  const dockTop = 1.5;
  B.dock(40, 10, 32, 0, dockTop);
  out.boatSpawns.noob = { ...B.w(66, 14.6), heading: 0 };

  // houses around the plaza
  B.house(2, 27, { w: 7.5, d: 6, wall: P.M.wallCream, roof: P.M.roofRed, sign: '釣具店' }, plaza.x, plaza.z);
  B.house(-6, 6, { w: 6.5, d: 6, wall: P.M.wallBlue, roof: P.M.roofBlue }, plaza.x, plaza.z);
  B.house(24, 28, { w: 6, d: 5.5, wall: P.M.wallYellow, roof: P.M.roofGreen }, plaza.x, plaza.z);
  B.house(0, -10, { w: 6, d: 5, wall: P.M.wallPink, roof: P.M.roofBrown, chimney: false }, plaza.x, plaza.z);

  // merchant stall near the dock entrance
  const stallL = { x: 31, z: 1 };
  const stallRot = faceTo(stallL.x, stallL.z, 26, 12);
  const st = P.stall('鮮魚收購');
  const sp = B.w(stallL.x, stallL.z);
  B.add(st, stallL.x, stallL.z, stallRot);
  P.occluders.push(st);
  const cc = rotOff(stallRot, 0, 0.9);
  addBox(sp.x + cc.x, sp.z + cc.z, 4.4, 1.4, B.h(sp.x, sp.z) + 1.3, stallRot);
  B.exclude(stallL.x, stallL.z, 5);
  const mo = rotOff(stallRot, 0, -0.3);
  B.npc('merchant_noob', '老陳', '魚商', stallL.x + mo.x, stallL.z + mo.z, stallRot,
    { shirt: 0x3a6ea5, pants: 0x2d2d2d, apron: 0xf2f2f2, hat: 'captain', hair: 0x9a9a9a, beard: '#bdbdbd', skin: 0xe0ac69 }, { script: 'merchant' });

  // campfire + benches
  const cf = P.campfire();
  B.dynamic = true; B.add(cf, 6, 15); B.dynamic = false;
  B.exclude(6, 15, 3);
  for (let i = 0; i < 3; i++) {
    const a = i * 2.1 + 0.4;
    const b = P.bench();
    B.add(b, 6 + Math.cos(a) * 3.4, 15 + Math.sin(a) * 3.4, faceTo(6 + Math.cos(a) * 3.4, 15 + Math.sin(a) * 3.4, 6, 15) + Math.PI);
  }

  // signs / arch
  B.add(P.signpost('noob Island', '新手島・歡迎光臨'), 9, 2, faceTo(9, 2, 14, 10));
  B.exclude(9, 2, 1.5);
  const arch = P.welcomeArch('noob Island');
  B.add(arch, 37, 10, Math.PI / 2);
  P.occluders.push(arch);
  for (const s of [-2.6, 2.6]) { const p = B.w(37, 10 + s); addCircle(p.x, p.z, 0.3, 10); }
  B.add(P.signpost('碼頭 →', '叫船・海釣'), 33, 15.5, -Math.PI / 2 + 0.3);

  // path lanterns plaza → dock
  for (const [x, z, l] of [[20, 12.8, true], [28, 12.8, false], [20, 7, false], [12, 22, true], [-2, 14, false]]) B.lanternAt(x, z, l);

  // lighthouse on the hill
  const lf = isl.flats[1];
  const lh = P.lighthouse();
  B.dynamic = true; B.add(lh, lf.x, lf.z, 0.8); B.dynamic = false;
  P.occluders.push(lh);
  { const p = B.w(lf.x, lf.z); addCircle(p.x, p.z, 3.4, 30); }
  B.exclude(lf.x, lf.z, 6);

  // props
  for (const [x, z, r] of [[34, 4.5, 0.3], [35, 5.6, 1], [44, 7.6, 0.2], [27, -3, 0.5]]) { const c = P.crate(); B.add(c, x, z, r); const p = B.w(x, z); addCircle(p.x, p.z, 0.6, B.h(p.x, p.z) + 1); }
  for (const [x, z] of [[45, 11.0], [29, 4]]) { const b = P.barrel(); B.add(b, x, z, 0, x > 40 ? dockTop : null); const p = B.w(x, z); addCircle(p.x, p.z, 0.5, (x > 40 ? dockTop : B.h(p.x, p.z)) + 1.1); }
  B.add(P.fishRack(), 22, 4, 0.4);
  { const p = B.w(22, 4); addBox(p.x, p.z, 3.4, 0.4, B.h(p.x, p.z) + 2.3, 0.4); }
  // decorative row boat on the beach
  const rb = P.boatModel(0xc0392b, 0xf4f4f4);
  B.add(rb, 36, 36, 2.2, B.h(B.w(36, 36).x, B.w(36, 36).z) + 0.4);
  rb.rotation.z = 0.15;
  { const p = B.w(36, 36); addCircle(p.x, p.z, 1.8, 10); }
  B.exclude(36, 36, 3);

  // NPCs
  B.npc('tutor', '阿凱', '新手導師', 15, 4, faceTo(15, 4, 12, 10),
    { shirt: 0xe67e22, pants: 0x34495e, hat: 'straw', hair: 0x2b1b10, vest: 0x8e5a2b }, { wave: true });
  B.npc('rodshop', '小美', '釣具店', 4, 22, faceTo(4, 22, plaza.x, plaza.z),
    { shirt: 0xff7aa8, pants: 0x2c3e50, hat: 'beanie', hatColor: 0xffd23f, hair: 0x6b3a1e });
  B.npc('shipwright_noob', '阿木', '船匠', 58, 8.9, Math.PI,
    { shirt: 0x8e44ad, pants: 0x3b3b3b, hat: 'bucket', hatColor: 0x6b8e23, hair: 0x111111, beard: '#3a2a1a' }, { script: 'shipwright', y: dockTop, boatSpawn: 'noob' });
  B.npc('hai', '阿海', '碼頭漁夫', 70, 11.2, Math.PI / 2,
    { shirt: 0x16a085, pants: 0x2c3e50, hat: 'bucket', hatColor: 0xc0392b, hair: 0x2b1b10 }, { y: dockTop });

  // vegetation
  B.scatter(30, (lx, lz) => B.add(P.palmTree(B.rng), lx, lz, B.rng() * 6), (h) => h > 0.9 && h < 3.2, 3);
  B.scatter(22, (lx, lz, h, p) => { B.add(P.roundTree(B.rng), lx, lz, B.rng() * 6); addCircle(p.x, p.z, 0.45, h + 6); B.exclude(lx, lz, 2.5); }, (h) => h > 3.5, 3);
  B.scatter(40, (lx, lz) => B.add(P.bush(B.rng), lx, lz, 0), (h) => h > 2.0, 1);
  B.scatter(18, (lx, lz, h, p) => { const s = 0.5 + B.rng() * 1.6; B.add(P.rock(B.rng, s), lx, lz, 0, h - 0.2); if (s > 1) addCircle(p.x, p.z, s * 0.8, h + s); }, (h) => h > -2.5 && h < 1.2, 2);
  B.groundCover(520);

  out.spawn = { ...B.w(13, 9), yaw: faceTo(13, 9, 15, 4) };
  mergeStatic(B.root, scene);
  out.npcs.push(...B.npcs);
}

// ------------------------------------------------------------------ normal Island
function buildNormal(scene, isl, out) {
  const B = new Builder(scene, isl, 98765);
  const vil = isl.flats[0];
  for (const f of isl.flats) B.exclude(f.x, f.z, f.r * 0.8);
  const pond = isl.pond;
  B.exclude(pond.x, pond.z, pond.r + 4);

  // west dock (towards noob Island)
  const dockTop = 1.5;
  B.dock(-72, 8, 36, Math.PI, dockTop);
  out.boatSpawns.normal = { ...B.w(-100, 12.6), heading: Math.PI };
  // small side pier
  B.dock(-70, -14, 16, Math.PI * 0.92, dockTop);

  // village houses
  B.house(-52, -10, { w: 7, d: 6, wall: P.M.wallWhite, roof: P.M.roofBlue, sign: '漁會' }, vil.x, vil.z);
  B.house(-30, -12, { w: 8, d: 6.5, wall: P.M.wallCream, roof: P.M.roofRed, sign: '海風餐廳' }, vil.x, vil.z);
  B.house(-54, 26, { w: 6.5, d: 6, wall: P.M.wallYellow, roof: P.M.roofGreen }, vil.x, vil.z);
  B.house(-30, 28, { w: 7, d: 6, wall: P.M.wallPink, roof: P.M.roofBrown, sign: '旅館' }, vil.x, vil.z);
  B.house(-18, 10, { w: 6, d: 5.5, wall: P.M.wallBlue, roof: P.M.roofRed }, vil.x, vil.z);

  // merchant stall facing the village
  const sl = { x: -60, z: 10 };
  const srot = faceTo(sl.x, sl.z, vil.x, vil.z);
  const st = P.stall('漁獲收購');
  const sp = B.w(sl.x, sl.z);
  B.add(st, sl.x, sl.z, srot);
  P.occluders.push(st);
  const cc = rotOff(srot, 0, 0.9);
  addBox(sp.x + cc.x, sp.z + cc.z, 4.4, 1.4, B.h(sp.x, sp.z) + 1.3, srot);
  B.exclude(sl.x, sl.z, 5);
  const mo = rotOff(srot, 0, -0.3);
  B.npc('merchant_normal', '老王', '魚商', sl.x + mo.x, sl.z + mo.z, srot,
    { shirt: 0xc0392b, pants: 0x2d2d2d, apron: 0xf2f2f2, hat: 'bucket', hatColor: 0x2f80ed, hair: 0x222222, skin: 0xd6a26b }, { script: 'merchant' });

  // campfire square
  B.dynamic = true; B.add(P.campfire(), vil.x, vil.z); B.dynamic = false;
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2 + 0.3;
    const x = vil.x + Math.cos(a) * 3.6, z = vil.z + Math.sin(a) * 3.6;
    B.add(P.bench(), x, z, faceTo(x, z, vil.x, vil.z) + Math.PI);
  }
  P.occluders.push(B.add(P.welcomeArch('normal Island'), -68, 8, -Math.PI / 2));
  for (const s of [-2.6, 2.6]) { const p = B.w(-68, 8 + s); addCircle(p.x, p.z, 0.3, 10); }
  for (const [x, z, l] of [[-62, 3.5, true], [-48, 3, false], [-48, 14, true], [-34, 2, false], [-34, 16, false], [-24, 4, true], [-10, 24, false], [12, 9, true]]) B.lanternAt(x, z, l);
  B.add(P.signpost('→ 池塘', '林博士的研究站'), -14, 2, faceTo(-14, 2, 0, -4));

  // windmill
  const wf = isl.flats[1];
  B.dynamic = true; P.occluders.push(B.add(P.windmill(), wf.x, wf.z, faceTo(wf.x, wf.z, vil.x, vil.z))); B.dynamic = false;
  { const p = B.w(wf.x, wf.z); addCircle(p.x, p.z, 2.6, 40); }

  // props
  for (const [x, z, r] of [[-64, 4, 0.2], [-65, 5.2, 0.9], [-63, 15, 0.4], [-44, -2, 0.1]]) { const c = P.crate(); B.add(c, x, z, r); const p = B.w(x, z); addCircle(p.x, p.z, 0.6, B.h(p.x, p.z) + 1); }
  for (const [x, z] of [[-57, 4], [-42, 20]]) { B.add(P.barrel(), x, z); const p = B.w(x, z); addCircle(p.x, p.z, 0.5, B.h(p.x, p.z) + 1.1); }
  B.add(P.fishRack(), -46, -2, 0.1);
  { const p = B.w(-46, -2); addBox(p.x, p.z, 3.4, 0.4, B.h(p.x, p.z) + 2.3, 0.1); }
  // moored boats along the dock
  for (const [x, z, r] of [[-92, 3.3, Math.PI], [-99, 3.3, Math.PI + 0.1]]) {
    const bt = P.boatModel([0x2ecc71, 0xf1c40f][Math.round(x) % 2 === 0 ? 0 : 1], 0x34495e);
    B.add(bt, x, z, r, 0.05);
    const p = B.w(x, z); addCircle(p.x, p.z, 2.2, 2);
  }

  // NPCs
  B.npc('shipwright_normal', '大石', '船匠', -80, 6.9, Math.PI * 0.5,
    { shirt: 0x7f8c8d, pants: 0x2c3e50, hat: 'captain', hair: 0x111111, beard: '#222222', skin: 0xc68642 }, { script: 'shipwright', y: dockTop, boatSpawn: 'normal' });
  B.npc('de', '德叔', '老漁夫', -105, 6.6, -Math.PI / 2,
    { shirt: 0x34495e, pants: 0x1f2a36, hat: 'bucket', hatColor: 0x7f8c8d, hair: 0xdddddd, beard: '#eeeeee', skin: 0xd8a070 }, { y: dockTop });
  B.npc('anna', '安娜', '主廚', -30, -6.5, faceTo(-30, -6.5, vil.x, vil.z),
    { shirt: 0xffffff, pants: 0x2c3e50, apron: 0xe74c3c, hat: 'chef', hair: 0xc0392b });
  B.npc('lin', '林博士', '海洋研究員', 20, -1, faceTo(20, -1, pond.x, pond.z),
    { shirt: 0xecf0f1, pants: 0x34495e, hat: null, hair: 0x2b2b2b, glasses: true, vest: 0xecf0f1 });

  // research station props next to the pond
  B.add(P.crate(0.8), 22, -4, 0.3);
  B.add(P.bench(), 4, 12, Math.PI);

  // vegetation
  B.scatter(70, (lx, lz, h, p) => { B.add(P.pineTree(B.rng, 0.9 + B.rng() * 0.6), lx, lz, 0); addCircle(p.x, p.z, 0.45, h + 8); }, (h) => h > 6, 2.8);
  B.scatter(24, (lx, lz, h, p) => { B.add(P.roundTree(B.rng), lx, lz, B.rng() * 6); addCircle(p.x, p.z, 0.45, h + 6); }, (h) => h > 2.5 && h < 7, 3);
  B.scatter(30, (lx, lz) => B.add(P.palmTree(B.rng), lx, lz, 0), (h) => h > 0.9 && h < 2.8, 3);
  B.scatter(50, (lx, lz) => B.add(P.bush(B.rng), lx, lz, 0), (h) => h > 2.0, 1);
  B.scatter(30, (lx, lz, h, p) => { const s = 0.8 + B.rng() * 2.6; B.add(P.rock(B.rng, s, B.rng() > 0.5 ? P.M.rock : P.M.rockDark), lx, lz, 0, h - 0.3); if (s > 1) addCircle(p.x, p.z, s * 0.8, h + s); }, (h, lx, lz) => (h > -2.5 && h < 1.4) || (h > 10 && lz < -20), 2);
  B.groundCover(800);

  mergeStatic(B.root, scene);
  out.npcs.push(...B.npcs);
}
