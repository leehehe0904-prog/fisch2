import * as THREE from 'three';

function faceTexture(opts = {}) {
  const { skin = '#f1c27d', beard = false, eye = '#1d1d1d', blush = true, smile = true, glasses = false } = opts;
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = skin; g.fillRect(0, 0, 128, 128);
  g.fillStyle = eye;
  g.beginPath(); g.ellipse(42, 58, 7, 10, 0, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.ellipse(86, 58, 7, 10, 0, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#fff';
  g.beginPath(); g.arc(44, 54, 3, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.arc(88, 54, 3, 0, Math.PI * 2); g.fill();
  if (blush) {
    g.fillStyle = 'rgba(255,120,120,0.35)';
    g.beginPath(); g.ellipse(30, 78, 9, 5, 0, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.ellipse(98, 78, 9, 5, 0, 0, Math.PI * 2); g.fill();
  }
  g.strokeStyle = '#3a2216'; g.lineWidth = 5; g.lineCap = 'round';
  g.beginPath();
  if (smile) g.arc(64, 76, 16, 0.15 * Math.PI, 0.85 * Math.PI);
  else { g.moveTo(52, 88); g.lineTo(76, 88); }
  g.stroke();
  if (beard) {
    g.fillStyle = typeof beard === 'string' ? beard : '#e8e2d6';
    g.beginPath(); g.moveTo(14, 70); g.quadraticCurveTo(64, 150, 114, 70); g.lineTo(114, 128); g.lineTo(14, 128); g.fill();
    g.fillStyle = skin; g.beginPath(); g.ellipse(64, 86, 14, 7, 0, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#3a2216'; g.beginPath(); g.arc(64, 82, 10, 0.2 * Math.PI, 0.8 * Math.PI); g.stroke();
  }
  if (glasses) {
    g.strokeStyle = '#222'; g.lineWidth = 4;
    g.strokeRect(28, 46, 28, 22); g.strokeRect(72, 46, 28, 22);
    g.beginPath(); g.moveTo(56, 56); g.lineTo(72, 56); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8, ...o });
function part(geo, m) { const x = new THREE.Mesh(geo, m); x.castShadow = true; x.receiveShadow = true; return x; }

/**
 * Blocky character. Origin at feet. Faces local +Z.
 */
export function createCharacter(opts = {}) {
  const {
    skin = 0xf1c27d, shirt = 0x2f80ed, pants = 0x3a3f4a, shoes = 0x2b2b2b, hat = 'bucket', hatColor = 0xe5b04a,
    hair = 0x4a2f1b, beard = false, apron = null, vest = null, glasses = false, scale = 1,
  } = opts;
  const root = new THREE.Group();
  const body = new THREE.Group(); // everything that bobs
  root.add(body);
  const skinM = mat(skin), shirtM = mat(shirt), pantsM = mat(pants), shoeM = mat(shoes);

  // legs (pivot at hip)
  const mkLeg = (x) => {
    const hip = new THREE.Group();
    hip.position.set(x, 1.0, 0);
    const leg = part(new THREE.BoxGeometry(0.42, 0.85, 0.44), pantsM);
    leg.position.y = -0.42;
    const shoe = part(new THREE.BoxGeometry(0.44, 0.18, 0.56), shoeM);
    shoe.position.set(0, -0.9, 0.05);
    hip.add(leg, shoe);
    body.add(hip);
    return hip;
  };
  const legL = mkLeg(0.23), legR = mkLeg(-0.23);

  const torso = new THREE.Group();
  torso.position.y = 1.0;
  body.add(torso);
  const chest = part(new THREE.BoxGeometry(0.95, 0.95, 0.5), shirtM);
  chest.position.y = 0.48;
  torso.add(chest);
  if (vest) {
    const v = part(new THREE.BoxGeometry(0.98, 0.75, 0.53), mat(vest));
    v.position.y = 0.55; torso.add(v);
    const pocket = part(new THREE.BoxGeometry(0.25, 0.2, 0.05), mat(new THREE.Color(vest).multiplyScalar(0.7)));
    pocket.position.set(0.22, 0.5, 0.28); torso.add(pocket);
  }
  if (apron) {
    const a = part(new THREE.BoxGeometry(0.8, 1.05, 0.04), mat(apron));
    a.position.set(0, 0.25, 0.27); torso.add(a);
  }
  const belt = part(new THREE.BoxGeometry(0.97, 0.1, 0.52), mat(0x3b2a1a));
  belt.position.y = 0.05; torso.add(belt);

  // head
  const neck = new THREE.Group();
  neck.position.y = 0.95;
  torso.add(neck);
  const faceTex = faceTexture({ skin: '#' + new THREE.Color(skin).getHexString(), beard, glasses });
  const headMats = [skinM, skinM, skinM, skinM, new THREE.MeshStandardMaterial({ map: faceTex, roughness: 0.8 }), skinM];
  const head = part(new THREE.BoxGeometry(0.62, 0.62, 0.62), headMats);
  head.position.y = 0.34;
  neck.add(head);
  if (hair !== null) {
    const hr = part(new THREE.BoxGeometry(0.66, 0.2, 0.66), mat(hair));
    hr.position.set(0, 0.62, -0.02); neck.add(hr);
    const back = part(new THREE.BoxGeometry(0.66, 0.45, 0.12), mat(hair));
    back.position.set(0, 0.45, -0.28); neck.add(back);
  }
  // hats
  const hm = mat(hatColor);
  if (hat === 'bucket') {
    const crown = part(new THREE.CylinderGeometry(0.34, 0.38, 0.34, 12), hm);
    crown.position.y = 0.76;
    const brim = part(new THREE.CylinderGeometry(0.58, 0.6, 0.06, 16), hm);
    brim.position.y = 0.62;
    neck.add(crown, brim);
  } else if (hat === 'captain') {
    const crown = part(new THREE.CylinderGeometry(0.4, 0.36, 0.26, 12), mat(0xf5f5f5));
    crown.position.y = 0.78;
    const band = part(new THREE.CylinderGeometry(0.37, 0.37, 0.08, 12), mat(0x1b2a4a));
    band.position.y = 0.68;
    const visor = part(new THREE.BoxGeometry(0.5, 0.04, 0.25), mat(0x111111));
    visor.position.set(0, 0.66, 0.35);
    neck.add(crown, band, visor);
  } else if (hat === 'chef') {
    const c1 = part(new THREE.CylinderGeometry(0.34, 0.32, 0.4, 12), mat(0xffffff));
    c1.position.y = 0.82;
    const puff = part(new THREE.SphereGeometry(0.42, 12, 8), mat(0xffffff));
    puff.position.y = 1.1; puff.scale.y = 0.7;
    neck.add(c1, puff);
  } else if (hat === 'straw') {
    const crown = part(new THREE.CylinderGeometry(0.3, 0.36, 0.3, 12), mat(0xe8cf7a));
    crown.position.y = 0.76;
    const brim = part(new THREE.CylinderGeometry(0.75, 0.78, 0.05, 18), mat(0xe8cf7a));
    brim.position.y = 0.63;
    const band = part(new THREE.CylinderGeometry(0.315, 0.335, 0.08, 12), mat(0xc0392b));
    band.position.y = 0.68;
    neck.add(crown, brim, band);
  } else if (hat === 'beanie') {
    const b = part(new THREE.SphereGeometry(0.38, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), hm);
    b.position.y = 0.62; b.scale.y = 0.9;
    const pom = part(new THREE.SphereGeometry(0.1, 8, 6), mat(0xffffff));
    pom.position.y = 0.98;
    neck.add(b, pom);
  } else if (hat === 'hood') {
    const h = part(new THREE.BoxGeometry(0.74, 0.74, 0.74), hm);
    h.position.set(0, 0.4, -0.06);
    neck.add(h);
    head.position.z = 0.06;
  }

  // arms (pivot at shoulder)
  const mkArm = (x) => {
    const sh = new THREE.Group();
    sh.position.set(x, 0.85, 0);
    const sleeve = part(new THREE.BoxGeometry(0.3, 0.42, 0.34), shirtM);
    sleeve.position.y = -0.18;
    const arm = part(new THREE.BoxGeometry(0.26, 0.5, 0.3), skinM);
    arm.position.y = -0.58;
    const hand = new THREE.Group();
    hand.position.y = -0.85;
    sh.add(sleeve, arm, hand);
    torso.add(sh);
    return { sh, hand };
  };
  const aL = mkArm(0.62), aR = mkArm(-0.62);

  root.scale.setScalar(scale);

  const rig = {
    root, body, torso, neck, head, legL, legR, armL: aL.sh, armR: aR.sh, handL: aL.hand, handR: aR.hand,
    walkPhase: 0, blend: 0,
  };

  /**
   * Animate walking/idle/swim. Fishing poses override arms afterwards.
   * speed: horizontal speed, mode: 'ground' | 'air' | 'swim' | 'sit'
   */
  rig.animate = (dt, time, speed, mode = 'ground') => {
    const moving = Math.min(1, speed / 6);
    rig.blend += (moving - rig.blend) * Math.min(1, dt * 10);
    rig.walkPhase += dt * (4 + speed * 1.25);
    const s = Math.sin(rig.walkPhase);
    const b = rig.blend;
    body.rotation.x = 0; body.position.y = 0;
    torso.rotation.set(0, 0, 0);
    neck.rotation.set(0, 0, 0);
    if (mode === 'swim') {
      const st = time * 3.5;
      torso.rotation.x = 0.0;
      body.rotation.x = 0.9 * Math.max(0.2, b);
      body.position.y = -0.2;
      neck.rotation.x = -0.8 * Math.max(0.2, b);
      rig.armL.rotation.set(-Math.PI * 0.9 + Math.sin(st) * 1.4, 0, 0.2);
      rig.armR.rotation.set(-Math.PI * 0.9 - Math.sin(st) * 1.4, 0, -0.2);
      legL.rotation.x = Math.sin(st * 2) * 0.4;
      legR.rotation.x = -Math.sin(st * 2) * 0.4;
      return;
    }
    if (mode === 'sit') {
      legL.rotation.x = -1.4; legR.rotation.x = -1.4;
      body.position.y = -0.55;
      rig.armL.rotation.set(-0.5, 0, 0.1); rig.armR.rotation.set(-0.5, 0, -0.1);
      return;
    }
    if (mode === 'air') {
      legL.rotation.x = -0.5; legR.rotation.x = 0.3;
      rig.armL.rotation.set(-0.3, 0, 0.5); rig.armR.rotation.set(-0.3, 0, -0.5);
      return;
    }
    const idle = Math.sin(time * 2.0) * 0.03;
    legL.rotation.x = s * 0.8 * b;
    legR.rotation.x = -s * 0.8 * b;
    rig.armL.rotation.set(-s * 0.7 * b + idle, 0, 0.06 + idle * 0.5);
    rig.armR.rotation.set(s * 0.7 * b - idle, 0, -0.06 - idle * 0.5);
    body.position.y = Math.abs(Math.cos(rig.walkPhase)) * 0.08 * b + idle * 0.3;
    torso.rotation.y = s * 0.08 * b;
    torso.rotation.x = 0.06 * b;
  };
  return rig;
}
