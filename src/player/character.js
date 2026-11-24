import * as THREE from 'three';
import { mergeRigid } from '../core/merge.js';

// ---------------------------------------------------------------- materials
const fabric = (c) => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.88, metalness: 0, sheen: 0.8, sheenRoughness: 0.7, sheenColor: new THREE.Color(c).lerp(new THREE.Color(0xffffff), 0.35) });
const skinMat = (c) => new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.55, metalness: 0, sheen: 0.4, sheenRoughness: 0.5, sheenColor: new THREE.Color(0xff9a80), clearcoat: 0.05 });
const plain = (c, r = 0.6) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: 0 });

function m(geo, mat, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(geo, mat);
  o.position.set(x, y, z);
  o.castShadow = true; o.receiveShadow = true;
  return o;
}
/** limb segment hanging down from its pivot, total length L */
function limb(r0, r1, L, mat) {
  const g = new THREE.CylinderGeometry(r1, r0, L, 14, 1);
  const o = m(g, mat, 0, -L / 2, 0);
  const capTop = m(new THREE.SphereGeometry(r0, 14, 10), mat, 0, 0, 0);
  const capBot = m(new THREE.SphereGeometry(r1, 14, 10), mat, 0, -L, 0);
  const grp = new THREE.Group();
  grp.add(o, capTop, capBot);
  return grp;
}

/** Torso shape (lathe), flattened front-to-back */
function torsoGeo(scaleR = 1, from = 0, to = 1) {
  const prof = [[0.0, -0.02], [0.165, 0.0], [0.168, 0.1], [0.152, 0.24], [0.162, 0.36], [0.192, 0.5], [0.2, 0.6], [0.185, 0.67], [0.13, 0.73], [0.06, 0.77], [0.0, 0.78]];
  const pts = prof.filter((p, i) => i / (prof.length - 1) >= from - 1e-6 && i / (prof.length - 1) <= to + 1e-6).map(([r, y]) => new THREE.Vector2(r * scaleR, y));
  const g = new THREE.LatheGeometry(pts, 28);
  g.scale(1, 1, 0.64);
  return g;
}

/**
 * Realistic-proportioned humanoid built from smooth primitives. Origin at the feet, faces +Z.
 * Rig API: root, body, torso, neck, head, legL/legR (hips), kneeL/kneeR, armL/armR (shoulders),
 * elbowL/elbowR, handL/handR (attachment points), animate().
 */
export function createCharacter(opts = {}) {
  const {
    skin = 0xe0ac82, shirt = 0x2f80ed, pants = 0x3a3f4a, shoes = 0x2b2b2b, hat = 'bucket', hatColor = 0xe5b04a,
    hair = 0x4a2f1b, beard = false, apron = null, vest = null, glasses = false, scale = 1, eye = 0x3b2a1a,
  } = opts;
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const SK = skinMat(skin), SH = fabric(shirt), PA = fabric(pants), SO = plain(shoes, 0.45), HA = plain(hair, 0.75);

  // ---------------- legs
  const mkLeg = (x) => {
    const hip = new THREE.Group();
    hip.position.set(x, 1.02, 0);
    hip.add(limb(0.098, 0.078, 0.5, PA));
    const knee = new THREE.Group();
    knee.position.y = -0.5;
    knee.add(limb(0.078, 0.06, 0.46, PA));
    const ankle = new THREE.Group();
    ankle.position.y = -0.47;
    const shoe = m(new THREE.SphereGeometry(0.075, 16, 10), SO, 0, -0.025, 0.055);
    shoe.scale.set(0.95, 0.62, 1.75);
    const sole = m(new THREE.BoxGeometry(0.14, 0.025, 0.27), plain(0x1a1a1a, 0.9), 0, -0.06, 0.055);
    ankle.add(shoe, sole);
    knee.add(ankle);
    hip.add(knee);
    body.add(hip);
    return { hip, knee };
  };
  const L = mkLeg(0.1), R = mkLeg(-0.1);
  const pelvis = m(new THREE.SphereGeometry(0.17, 20, 12), PA, 0, 1.03, 0);
  pelvis.scale.set(1.08, 0.62, 0.72);
  body.add(pelvis);

  // ---------------- torso
  const torso = new THREE.Group();
  torso.position.y = 1.03;
  body.add(torso);
  torso.add(m(torsoGeo(), SH));
  const collar = m(new THREE.TorusGeometry(0.075, 0.018, 8, 20), SH, 0, 0.745, 0.005);
  collar.rotation.x = Math.PI / 2;
  torso.add(collar);
  const belt = m(new THREE.CylinderGeometry(0.17, 0.17, 0.045, 28, 1, true), plain(0x3b2a1a, 0.5), 0, 0.03, 0);
  belt.scale.z = 0.66;
  torso.add(belt);
  torso.add(m(new THREE.BoxGeometry(0.05, 0.04, 0.012), plain(0xc9a64a, 0.3), 0, 0.03, 0.112));
  if (vest) {
    const VM = fabric(vest);
    const v = m(torsoGeo(1.05, 0.25, 0.8), VM);
    torso.add(v);
    for (const s of [-1, 1]) torso.add(m(new THREE.BoxGeometry(0.07, 0.06, 0.015), fabric(new THREE.Color(vest).multiplyScalar(0.75)), s * 0.09, 0.4, 0.13));
  }
  if (apron) {
    const AM = new THREE.MeshPhysicalMaterial({ color: apron, roughness: 0.9, sheen: 0.6, side: THREE.DoubleSide });
    const a = m(new THREE.CylinderGeometry(0.185, 0.2, 0.72, 16, 1, true, -0.75, 1.5), AM, 0, 0.18, 0);
    a.scale.z = 0.72;
    torso.add(a);
  }

  // ---------------- head
  const neck = new THREE.Group();
  neck.position.y = 0.76;
  torso.add(neck);
  neck.add(m(new THREE.CylinderGeometry(0.052, 0.06, 0.12, 12), SK, 0, 0.04, 0));
  const head = new THREE.Group();
  head.position.y = 0.19;
  neck.add(head);
  const skull = m(new THREE.SphereGeometry(0.15, 28, 20), SK);
  skull.scale.set(0.92, 1.1, 1.0);
  head.add(skull);
  const jaw = m(new THREE.SphereGeometry(0.11, 20, 14), SK, 0, -0.07, 0.035);
  jaw.scale.set(1.0, 0.85, 0.95);
  head.add(jaw);
  // eyes
  const white = plain(0xf6f3ee, 0.2), iris = plain(eye, 0.15), pupil = plain(0x050505, 0.1);
  for (const s of [-1, 1]) {
    const e = m(new THREE.SphereGeometry(0.024, 14, 10), white, s * 0.05, 0.02, 0.122);
    e.scale.z = 0.6;
    head.add(e);
    head.add(m(new THREE.SphereGeometry(0.0135, 12, 8), iris, s * 0.05, 0.02, 0.134));
    head.add(m(new THREE.SphereGeometry(0.007, 8, 6), pupil, s * 0.05, 0.02, 0.1445));
    const lid = m(new THREE.SphereGeometry(0.026, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.42), SK, s * 0.05, 0.022, 0.12);
    lid.rotation.x = 0.5;
    head.add(lid);
    const brow = m(new THREE.CapsuleGeometry(0.008, 0.04, 4, 8), HA, s * 0.052, 0.062, 0.13);
    brow.rotation.z = Math.PI / 2 + s * 0.12;
    head.add(brow);
    const ear = m(new THREE.SphereGeometry(0.034, 12, 10), SK, s * 0.138, 0.0, -0.005);
    ear.scale.set(0.45, 1, 0.75);
    head.add(ear);
  }
  const nose = m(new THREE.SphereGeometry(0.022, 12, 10), SK, 0, -0.02, 0.15);
  nose.scale.set(0.85, 1.1, 1.15);
  head.add(nose);
  const bridge = m(new THREE.CapsuleGeometry(0.012, 0.04, 4, 8), SK, 0, 0.01, 0.14);
  bridge.rotation.x = -0.3;
  head.add(bridge);
  const mouth = m(new THREE.CapsuleGeometry(0.007, 0.04, 4, 8), plain(0x9a4a44, 0.5), 0, -0.07, 0.132);
  mouth.rotation.z = Math.PI / 2;
  head.add(mouth);
  if (hair !== null) {
    const top = m(new THREE.SphereGeometry(0.158, 28, 16, 0, Math.PI * 2, 0, Math.PI * 0.52), HA, 0, 0.022, -0.012);
    top.scale.set(0.97, 1.14, 1.04);
    top.rotation.x = -0.28;
    head.add(top);
    const back = m(new THREE.SphereGeometry(0.14, 20, 14), HA, 0, -0.01, -0.045);
    back.scale.set(0.98, 1.0, 0.85);
    head.add(back);
    for (const s of [-1, 1]) head.add(m(new THREE.BoxGeometry(0.02, 0.07, 0.05), HA, s * 0.135, 0.03, 0.03));
  }
  if (beard) {
    const BM = plain(typeof beard === 'string' ? new THREE.Color(beard) : 0xe8e2d6, 0.85);
    const b = m(new THREE.SphereGeometry(0.105, 18, 12, 0, Math.PI * 2, Math.PI * 0.35, Math.PI * 0.65), BM, 0, -0.06, 0.045);
    b.scale.set(1.05, 1.05, 0.95);
    head.add(b);
    const mus = m(new THREE.CapsuleGeometry(0.012, 0.06, 4, 8), BM, 0, -0.05, 0.14);
    mus.rotation.z = Math.PI / 2;
    head.add(mus);
  }
  if (glasses) {
    const gm = plain(0x1a1a1a, 0.3);
    for (const s of [-1, 1]) head.add(m(new THREE.TorusGeometry(0.03, 0.004, 6, 18), gm, s * 0.05, 0.02, 0.152));
    head.add(m(new THREE.BoxGeometry(0.04, 0.005, 0.005), gm, 0, 0.025, 0.155));
    for (const s of [-1, 1]) { const a = m(new THREE.BoxGeometry(0.004, 0.004, 0.13), gm, s * 0.082, 0.025, 0.09); head.add(a); }
  }
  // hats (relative to head centre; skull top ≈ 0.165)
  const HM = fabric(hatColor);
  const addHat = (...parts) => parts.forEach((p) => head.add(p));
  if (hat === 'bucket') {
    addHat(m(new THREE.CylinderGeometry(0.135, 0.165, 0.12, 28), HM, 0, 0.16, -0.01),
      m(new THREE.SphereGeometry(0.135, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2), HM, 0, 0.215, -0.01));
    const brim = m(new THREE.CylinderGeometry(0.2, 0.25, 0.04, 32, 1, true), HM, 0, 0.09, -0.01);
    brim.material = HM.clone(); brim.material.side = THREE.DoubleSide;
    head.add(brim);
  } else if (hat === 'captain') {
    addHat(m(new THREE.CylinderGeometry(0.18, 0.162, 0.08, 28), plain(0xf5f5f5, 0.5), 0, 0.19, -0.01),
      m(new THREE.CylinderGeometry(0.163, 0.163, 0.05, 28), plain(0x1b2a4a, 0.6), 0, 0.135, -0.01),
      m(new THREE.CylinderGeometry(0.01, 0.01, 0.02, 8), plain(0xd4af37, 0.3), 0, 0.15, 0.16));
    const visor = m(new THREE.CylinderGeometry(0.12, 0.12, 0.012, 20, 1, false, -Math.PI / 2, Math.PI), plain(0x111111, 0.3), 0, 0.115, 0.1);
    visor.rotation.x = 0.15;
    head.add(visor);
  } else if (hat === 'chef') {
    addHat(m(new THREE.CylinderGeometry(0.15, 0.155, 0.14, 24), plain(0xffffff, 0.8), 0, 0.17, -0.01));
    const puff = m(new THREE.SphereGeometry(0.19, 20, 14), plain(0xffffff, 0.85), 0, 0.31, -0.01);
    puff.scale.y = 0.65;
    head.add(puff);
  } else if (hat === 'straw') {
    const SM = plain(0xe2c878, 0.9);
    addHat(m(new THREE.CylinderGeometry(0.13, 0.16, 0.11, 28), SM, 0, 0.17, -0.01),
      m(new THREE.CylinderGeometry(0.335, 0.345, 0.012, 36), SM, 0, 0.12, -0.01),
      m(new THREE.CylinderGeometry(0.152, 0.158, 0.035, 28), plain(0xb03a2e, 0.7), 0, 0.14, -0.01));
  } else if (hat === 'beanie') {
    const b = m(new THREE.SphereGeometry(0.165, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2), HM, 0, 0.07, -0.01);
    b.scale.y = 1.15;
    const cuff = m(new THREE.TorusGeometry(0.155, 0.025, 10, 28), HM, 0, 0.075, -0.01);
    cuff.rotation.x = Math.PI / 2;
    addHat(b, cuff, m(new THREE.SphereGeometry(0.045, 12, 8), plain(0xffffff, 0.95), 0, 0.27, -0.01));
  }

  // ---------------- arms
  const mkArm = (x) => {
    const sh = new THREE.Group();
    sh.position.set(x, 0.62, 0);
    torso.add(m(new THREE.SphereGeometry(0.082, 16, 12), SH, x * 0.86, 0.625, 0));
    sh.add(limb(0.07, 0.058, 0.32, SH));
    const elbow = new THREE.Group();
    elbow.position.y = -0.32;
    elbow.add(limb(0.052, 0.04, 0.28, SK));
    const hand = new THREE.Group();
    hand.position.y = -0.3;
    const palm = m(new THREE.SphereGeometry(0.05, 14, 10), SK, 0, -0.035, 0.005);
    palm.scale.set(0.72, 1.15, 0.52);
    const thumb = m(new THREE.CapsuleGeometry(0.014, 0.035, 4, 8), SK, -Math.sign(x) * -0.03, -0.02, 0.03);
    thumb.rotation.z = Math.sign(x) * 0.5;
    hand.add(palm, thumb);
    elbow.add(hand);
    sh.add(elbow);
    torso.add(sh);
    return { sh, elbow, hand };
  };
  const aL = mkArm(0.235), aR = mkArm(-0.235);

  // fewer draw calls: merge parts that move together
  mergeRigid(root);
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  root.scale.setScalar(scale * 1.08);

  const rig = {
    root, body, torso, neck, head, legL: L.hip, legR: R.hip, kneeL: L.knee, kneeR: R.knee,
    armL: aL.sh, armR: aR.sh, elbowL: aL.elbow, elbowR: aR.elbow, handL: aL.hand, handR: aR.hand,
    walkPhase: 0, blend: 0,
  };

  /** Base locomotion animation; fishing poses override arms afterwards. */
  rig.animate = (dt, time, speed, mode = 'ground') => {
    const moving = Math.min(1, speed / 6);
    rig.blend += (moving - rig.blend) * Math.min(1, dt * 10);
    rig.walkPhase += dt * (3.2 + speed * 0.95);
    const s = Math.sin(rig.walkPhase);
    const b = rig.blend;
    body.rotation.set(0, 0, 0); body.position.y = 0;
    torso.rotation.set(0, 0, 0);
    neck.rotation.set(0, 0, 0);
    rig.elbowL.rotation.set(0, 0, 0); rig.elbowR.rotation.set(0, 0, 0);
    if (mode === 'swim') {
      const st = time * 3.2;
      // tilt forward; keep the chest at the root height (root sits at the water surface)
      const tilt = 0.65 + 0.55 * b;
      body.rotation.x = tilt;
      body.position.y = -Math.cos(tilt) * 1.4;
      neck.rotation.x = -tilt * 0.85;
      rig.armL.rotation.set(-Math.PI * 0.85 + Math.sin(st) * 1.3, 0, 0.25);
      rig.armR.rotation.set(-Math.PI * 0.85 - Math.sin(st) * 1.3, 0, -0.25);
      rig.elbowL.rotation.x = -0.3 - Math.max(0, Math.cos(st)) * 0.6;
      rig.elbowR.rotation.x = -0.3 - Math.max(0, -Math.cos(st)) * 0.6;
      L.hip.rotation.x = Math.sin(st * 2) * 0.35; R.hip.rotation.x = -Math.sin(st * 2) * 0.35;
      L.knee.rotation.x = 0.2 + Math.max(0, Math.sin(st * 2)) * 0.4; R.knee.rotation.x = 0.2 + Math.max(0, -Math.sin(st * 2)) * 0.4;
      return;
    }
    if (mode === 'sit') {
      L.hip.rotation.x = -1.45; R.hip.rotation.x = -1.45;
      L.knee.rotation.x = 1.45; R.knee.rotation.x = 1.45;
      body.position.y = -0.55;
      rig.armL.rotation.set(-0.55, 0, 0.12); rig.armR.rotation.set(-0.55, 0, -0.12);
      rig.elbowL.rotation.x = -0.6; rig.elbowR.rotation.x = -0.6;
      return;
    }
    if (mode === 'air') {
      L.hip.rotation.x = -0.6; R.hip.rotation.x = 0.25;
      L.knee.rotation.x = 0.8; R.knee.rotation.x = 0.35;
      rig.armL.rotation.set(-0.4, 0, 0.45); rig.armR.rotation.set(-0.4, 0, -0.45);
      rig.elbowL.rotation.x = -0.5; rig.elbowR.rotation.x = -0.5;
      return;
    }
    const breathe = Math.sin(time * 1.7);
    const run = Math.min(1, speed / 12);
    const amp = 0.55 + run * 0.35;
    L.hip.rotation.x = s * amp * b;
    R.hip.rotation.x = -s * amp * b;
    // knees bend while the leg swings through (behind the body)
    L.knee.rotation.x = Math.max(0, -Math.cos(rig.walkPhase)) * (0.5 + run * 0.7) * b + 0.04;
    R.knee.rotation.x = Math.max(0, Math.cos(rig.walkPhase)) * (0.5 + run * 0.7) * b + 0.04;
    rig.armL.rotation.set(-s * (0.45 + run * 0.4) * b, 0, 0.07 + breathe * 0.01);
    rig.armR.rotation.set(s * (0.45 + run * 0.4) * b, 0, -0.07 - breathe * 0.01);
    rig.elbowL.rotation.x = -0.12 - Math.max(0, s) * (0.3 + run * 0.9) * b;
    rig.elbowR.rotation.x = -0.12 - Math.max(0, -s) * (0.3 + run * 0.9) * b;
    body.position.y = Math.abs(Math.cos(rig.walkPhase)) * 0.05 * b - 0.02 * b;
    torso.rotation.y = s * 0.1 * b;
    torso.rotation.x = 0.05 * b + run * 0.12 * b + breathe * 0.008;
    neck.rotation.y = -s * 0.06 * b;
  };
  return rig;
}
