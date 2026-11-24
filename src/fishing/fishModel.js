import * as THREE from 'three';
import { hash2 } from '../core/noise.js';

const c3 = (h) => new THREE.Color(h);

function finMat(color, glow) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.1, side: THREE.DoubleSide, transparent: true, opacity: 0.92,
    emissive: glow ? new THREE.Color(glow) : 0x000000, emissiveIntensity: glow ? 0.6 : 0 });
}

function bodyGeometry(len, h, w, def, pattern) {
  const geo = new THREE.SphereGeometry(1, 28, 18);
  const p = geo.attributes.position;
  const colors = new Float32Array(p.count * 3);
  const top = c3(def.colors[0]), belly = c3(def.colors[1]);
  const tmp = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    // x: -1 (tail) .. 1 (head). Taper toward the tail, blunt nose.
    const t = (x + 1) / 2;
    const prof = Math.pow(Math.sin(Math.PI * Math.min(1, 0.12 + t * 0.95)), 0.75) * (t < 0.15 ? 0.6 + t * 2.6 : 1);
    const ny = y * h * prof, nz = z * w * prof;
    const nx = x * len / 2;
    p.setXYZ(i, nx, ny + (pattern.hump ? Math.max(0, y) * 0.15 * Math.sin(t * Math.PI) : 0), nz);
    // colour: dorsal → belly gradient
    const k = THREE.MathUtils.smoothstep(y, -0.45, 0.35);
    tmp.copy(belly).lerp(top, k);
    if (pattern.stripes && y > -0.1) {
      const s = Math.sin(nx * 9 + Math.sin(y * 6) * 2);
      if (s > 0.6) tmp.multiplyScalar(0.55);
    }
    if (pattern.bands) {
      const bx = Math.abs(Math.sin((t - 0.08) * Math.PI * 3));
      if (bx < 0.22 && t > 0.15) tmp.set(0xffffff);
      else if (bx < 0.3 && t > 0.15) tmp.set(0x111111);
    }
    if (pattern.spots) {
      const n = hash2(Math.floor(nx * 14), Math.floor((y + z) * 9));
      if (n > 0.86 && y > -0.2) tmp.multiplyScalar(pattern.lightSpots ? 1.6 : 0.5);
    }
    if (pattern.koi) {
      const n = Math.sin(nx * 5.3 + 1.2) * Math.sin(z * 4.1 + y * 3.3 + 0.7) + Math.sin(nx * 2.1 + y * 2);
      tmp.set(n > 0.25 && y > -0.3 ? 0xff5a2a : (n < -0.9 && y > 0 ? 0x1a1a1a : 0xfaf7f0));
    }
    colors[i * 3] = tmp.r; colors[i * 3 + 1] = tmp.g; colors[i * 3 + 2] = tmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  return geo;
}

function triFin(points) {
  const s = new THREE.Shape();
  s.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) s.lineTo(points[i][0], points[i][1]);
  s.closePath();
  return new THREE.ShapeGeometry(s);
}

function addEyes(g, x, y, z, r = 0.09, glowColor) {
  const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
  const black = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.1, emissive: glowColor || 0, emissiveIntensity: glowColor ? 0.5 : 0 });
  for (const s of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), white);
    e.position.set(x, y, z * s);
    const pu = new THREE.Mesh(new THREE.SphereGeometry(r * 0.6, 8, 6), black);
    pu.position.set(x + r * 0.15, y, (z + r * 0.55) * s);
    g.add(e, pu);
  }
}

/**
 * Build a fish mesh. Returned group has length ~1 along +X (head at +X).
 * userData.update(time, intensity) animates the tail.
 */
export function buildFishModel(def) {
  const g = new THREE.Group();
  const inner = new THREE.Group();
  g.add(inner);
  const glow = def.glow;
  const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.32, metalness: 0.22,
    emissive: glow ? new THREE.Color(glow) : 0x000000, emissiveIntensity: glow ? 0.35 : 0 });
  const finColor = def.fin ?? new THREE.Color(def.colors[0]).lerp(new THREE.Color(def.colors[1]), 0.35).getHex();
  const fm = finMat(finColor, glow);
  let tail = null;
  const shape = def.shape;
  const pattern = { stripes: def.stripes, bands: def.bands, spots: def.spots, koi: def.koi, lightSpots: shape === 'whale' };

  if (shape === 'standard' || shape === 'tall' || shape === 'long') {
    const len = shape === 'long' ? 1 : 1;
    const ratio = shape === 'tall' ? 0.62 : shape === 'long' ? 1 / (def.len || 6) * 1.4 : 1 / (def.len || 3.2) * 1.15;
    const h = ratio * 0.95, w = h * (shape === 'tall' ? 0.42 : 0.55);
    const body = new THREE.Mesh(bodyGeometry(len, h * 0.5 * 2 / 2, w * 0.5, def, pattern), bodyMat);
    inner.add(body);
    tail = new THREE.Group();
    tail.position.x = -0.47;
    const th = Math.max(0.2, h * 1.1);
    const tf = new THREE.Mesh(triFin([[0, 0], [-th * 0.55, th * 0.55], [-th * 0.35, 0], [-th * 0.55, -th * 0.55]]), fm);
    tail.add(tf);
    inner.add(tail);
    // dorsal
    if (shape === 'long') {
      const d = new THREE.Mesh(triFin([[-0.45, 0], [-0.4, h * 0.45], [0.38, h * 0.55], [0.42, 0]]), finMat(def.colors[1] === 0xff3f4f ? 0xff3f4f : finColor, glow));
      d.position.y = h * 0.35;
      inner.add(d);
      if (def.id === 'oarfish') {
        const crest = new THREE.Mesh(triFin([[0.3, 0], [0.35, h * 1.6], [0.42, h * 0.3]]), finMat(0xff3f4f));
        crest.position.y = h * 0.4; inner.add(crest);
      }
    } else {
      const d = new THREE.Mesh(triFin([[-0.18, 0], [0.02, h * 0.55], [0.16, 0]]), fm);
      d.position.set(0, h * 0.4, 0);
      inner.add(d);
      const a = new THREE.Mesh(triFin([[-0.25, 0], [-0.15, -h * 0.3], [-0.05, 0]]), fm);
      a.position.set(0, -h * 0.38, 0);
      inner.add(a);
    }
    // pectoral fins
    for (const s of [-1, 1]) {
      const pf = new THREE.Mesh(triFin([[0, 0], [-0.12, h * 0.18], [-0.14, -h * 0.05]]), fm);
      pf.position.set(0.18, -h * 0.12, w * 0.45 * s);
      pf.rotation.y = s * 0.5;
      inner.add(pf);
    }
    if (def.wings) {
      for (const s of [-1, 1]) {
        const wf = new THREE.Mesh(triFin([[0.15, 0], [-0.25, 0.45], [-0.3, 0.05]]), finMat(0xbfd8ff));
        wf.rotation.x = s * Math.PI / 2 - s * 0.3;
        wf.position.set(0.05, h * 0.05, w * 0.3 * s);
        inner.add(wf);
      }
    }
    if (def.sword) {
      const sw = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.45, 6), new THREE.MeshStandardMaterial({ color: 0x2b3340, roughness: 0.4 }));
      sw.rotation.z = -Math.PI / 2; sw.position.set(0.7, h * 0.05, 0);
      inner.add(sw);
      inner.scale.set(0.8, 1, 1); // keep overall length near 1
    }
    if (def.whiskers) {
      const wm = new THREE.MeshStandardMaterial({ color: 0x2b2b26 });
      for (const s of [-1, 1]) {
        const wk = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.004, 0.3, 4), wm);
        wk.rotation.z = Math.PI / 2 + 0.4; wk.rotation.y = s * 0.6;
        wk.position.set(0.55, -h * 0.1, s * 0.08);
        inner.add(wk);
      }
    }
    addEyes(inner, 0.36, h * 0.12, w * 0.32, Math.max(0.025, h * 0.09), glow);
  } else if (shape === 'shark' || shape === 'whale') {
    const h = shape === 'whale' ? 0.16 : 0.12, w = shape === 'whale' ? 0.15 : 0.1;
    const body = new THREE.Mesh(bodyGeometry(1, h, w, def, pattern), bodyMat);
    inner.add(body);
    const dorsal = new THREE.Mesh(triFin([[-0.12, 0], [-0.05, 0.28], [0.12, 0]]), fm);
    dorsal.position.y = h * 0.8; inner.add(dorsal);
    tail = new THREE.Group(); tail.position.x = -0.46;
    tail.add(new THREE.Mesh(triFin([[0, 0], [-0.2, 0.32], [-0.1, 0], [-0.14, -0.16]]), fm));
    inner.add(tail);
    for (const s of [-1, 1]) {
      const pf = new THREE.Mesh(triFin([[0, 0], [-0.22, -0.02], [-0.1, 0.04]]), fm);
      pf.rotation.x = s * 1.2; pf.position.set(0.12, -h * 0.4, w * 0.5 * s);
      inner.add(pf);
    }
    if (def.hammer) {
      const hm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.42), new THREE.MeshStandardMaterial({ color: def.colors[0], roughness: 0.4 }));
      hm.position.set(0.47, 0.01, 0); inner.add(hm);
      addEyes(inner, 0.47, 0.02, 0.2, 0.03, glow);
    } else {
      addEyes(inner, 0.33, h * 0.25, w * 0.45, 0.025, glow);
    }
  } else if (shape === 'flat') {
    const isRay = def.id === 'moonray';
    const geo = new THREE.SphereGeometry(0.5, 24, 12);
    const p = geo.attributes.position;
    const colors = new Float32Array(p.count * 3);
    const top = c3(def.colors[0]), belly = c3(def.colors[1]);
    const tmp = new THREE.Color();
    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      if (isRay) { const a = Math.abs(z) * 2; x *= 1 - a * 0.35; z *= 2.0; y *= 0.12; } else { z *= 1.15; y *= 0.16; x *= 1.0; }
      p.setXYZ(i, x, y, z);
      tmp.copy(belly).lerp(top, y > 0 ? 1 : 0);
      if (!isRay && y > 0 && hash2(Math.floor(x * 20), Math.floor(z * 20)) > 0.85) tmp.multiplyScalar(0.6);
      if (isRay && y > 0 && hash2(Math.floor(x * 12), Math.floor(z * 12)) > 0.9) tmp.set(0xdfeaff);
      colors[i * 3] = tmp.r; colors[i * 3 + 1] = tmp.g; colors[i * 3 + 2] = tmp.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    inner.add(new THREE.Mesh(geo, bodyMat));
    tail = new THREE.Group(); tail.position.x = -0.45;
    if (isRay) {
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.02, 0.8, 5), fm);
      t.rotation.z = Math.PI / 2; t.position.x = -0.4; tail.add(t);
    } else {
      tail.add(new THREE.Mesh(triFin([[0, 0], [-0.18, 0.12], [-0.18, -0.12]]), fm));
      tail.rotation.x = Math.PI / 2;
    }
    inner.add(tail);
    addEyes(inner, 0.2, 0.08, 0.07, 0.03, glow);
  } else if (shape === 'round') {
    const geo = new THREE.SphereGeometry(0.33, 20, 14);
    const pc = geo.attributes.position;
    const colors = new Float32Array(pc.count * 3);
    const top = c3(def.colors[0]), belly = c3(def.colors[1]);
    const tmp = new THREE.Color();
    for (let i = 0; i < pc.count; i++) {
      const y = pc.getY(i);
      tmp.copy(belly).lerp(top, THREE.MathUtils.smoothstep(y, -0.15, 0.15));
      if (def.id === 'pufferfish' && y > 0 && hash2(Math.floor(pc.getX(i) * 30), Math.floor(pc.getZ(i) * 30)) > 0.8) tmp.multiplyScalar(0.55);
      colors[i * 3] = tmp.r; colors[i * 3 + 1] = tmp.g; colors[i * 3 + 2] = tmp.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    inner.add(new THREE.Mesh(geo, bodyMat));
    if (def.id === 'pufferfish') {
      const sm = new THREE.MeshStandardMaterial({ color: 0xf3e6b8, roughness: 0.5 });
      for (let i = 0; i < 40; i++) {
        const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        const sp = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.09, 4), sm);
        sp.position.copy(v.clone().multiplyScalar(0.34));
        sp.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v);
        inner.add(sp);
      }
    }
    if (def.lure) {
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.35, 4), new THREE.MeshStandardMaterial({ color: 0x3a2f3a }));
      stalk.position.set(0.18, 0.42, 0); stalk.rotation.z = -0.6; inner.add(stalk);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshBasicMaterial({ color: 0xb8ffb8 }));
      bulb.position.set(0.32, 0.56, 0); inner.add(bulb);
      const teeth = new THREE.MeshStandardMaterial({ color: 0xffffff });
      for (let i = 0; i < 6; i++) {
        const t = new THREE.Mesh(new THREE.ConeGeometry(0.015, 0.06, 3), teeth);
        t.position.set(0.31, -0.03, -0.12 + i * 0.05); t.rotation.z = Math.PI;
        inner.add(t);
      }
    }
    tail = new THREE.Group(); tail.position.x = -0.32;
    tail.add(new THREE.Mesh(triFin([[0, 0], [-0.16, 0.13], [-0.16, -0.13]]), fm));
    inner.add(tail);
    addEyes(inner, 0.24, 0.1, 0.17, 0.055, glow);
  } else if (shape === 'squid') {
    const mantle = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.55, 12), bodyMat);
    mantle.rotation.z = Math.PI / 2; mantle.position.x = -0.1;
    const geoC = mantle.geometry; const pc = geoC.attributes.position; const cols = new Float32Array(pc.count * 3);
    const cc = c3(def.colors[0]);
    for (let i = 0; i < pc.count; i++) { cols[i * 3] = cc.r; cols[i * 3 + 1] = cc.g; cols[i * 3 + 2] = cc.b; }
    geoC.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    inner.add(mantle);
    const fin = new THREE.Mesh(triFin([[0, 0.2], [0.12, 0], [0, -0.2]]), fm);
    fin.rotation.x = Math.PI / 2; fin.position.x = -0.38; inner.add(fin);
    tail = new THREE.Group(); tail.position.x = 0.2;
    const tm = new THREE.MeshStandardMaterial({ color: def.colors[1], emissive: glow || 0, emissiveIntensity: 0.5, roughness: 0.4 });
    for (let i = 0; i < 8; i++) {
      const tt = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.025, 0.35, 5), tm);
      const a = (i / 8) * Math.PI * 2;
      tt.rotation.z = -Math.PI / 2; tt.position.set(0.17, Math.cos(a) * 0.05, Math.sin(a) * 0.05);
      tail.add(tt);
    }
    inner.add(tail);
    addEyes(inner, 0.17, 0.0, 0.1, 0.035, glow);
  } else if (shape === 'boot') {
    const m = new THREE.MeshStandardMaterial({ color: def.colors[0], roughness: 0.9 });
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.5, 0.28), m); leg.position.set(-0.12, 0.12, 0);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.2, 0.3), m); foot.position.set(0.02, -0.15, 0);
    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.57, 0.05, 0.32), new THREE.MeshStandardMaterial({ color: def.colors[1] }));
    sole.position.set(0.02, -0.27, 0);
    inner.add(leg, foot, sole);
  } else if (shape === 'can') {
    const m = new THREE.MeshStandardMaterial({ color: def.colors[0], roughness: 0.5, metalness: 0.7 });
    const can = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.38, 14), m);
    const label = new THREE.Mesh(new THREE.CylinderGeometry(0.143, 0.143, 0.2, 14, 1, true), new THREE.MeshStandardMaterial({ color: def.colors[1], roughness: 0.8 }));
    can.rotation.z = 0.5; label.rotation.z = 0.5;
    inner.add(can, label);
  } else if (shape === 'wood') {
    const m = new THREE.MeshStandardMaterial({ color: def.colors[0], roughness: 0.95, flatShading: true });
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1, 7), m);
    w.rotation.z = Math.PI / 2;
    const br = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.35, 5), m);
    br.position.set(0.15, 0.12, 0); br.rotation.z = -0.6;
    inner.add(w, br);
  } else if (shape === 'weed') {
    const m = new THREE.MeshStandardMaterial({ color: def.colors[0], roughness: 0.6, side: THREE.DoubleSide });
    for (let i = 0; i < 5; i++) {
      const pg = new THREE.PlaneGeometry(0.12, 0.8, 1, 6);
      const pp = pg.attributes.position;
      for (let j = 0; j < pp.count; j++) pp.setX(j, pp.getX(j) + Math.sin(pp.getY(j) * 8 + i) * 0.05);
      const s = new THREE.Mesh(pg, m);
      s.rotation.y = i * 0.6; s.rotation.z = (i - 2) * 0.2;
      inner.add(s);
    }
    tail = inner;
  }
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
  const base = tail ? tail.rotation.y : 0;
  g.userData.update = (time, intensity = 1) => {
    if (tail && tail !== inner) tail.rotation.y = base + Math.sin(time * 14) * 0.6 * intensity;
    inner.rotation.y = Math.sin(time * 14 + 1.2) * 0.12 * intensity;
    if (tail === inner) inner.rotation.z = Math.sin(time * 5) * 0.2;
  };
  return g;
}

/** Visual length in metres for a fish of a given weight */
export function fishVisualLength(def, weight) {
  if (['boot', 'can', 'weed', 'wood'].includes(def.shape)) return def.shape === 'wood' ? 1.0 : 0.6;
  let L = 0.44 * Math.cbrt(weight);
  if (def.shape === 'long') L *= 1.6;
  if (def.shape === 'shark' || def.shape === 'whale') L *= 1.15;
  if (def.shape === 'round') L *= 0.8;
  return Math.max(0.22, Math.min(5.5, L));
}
