import * as THREE from 'three';

export const RODS = {
  starter: {
    id: 'starter', name: '新手釣竿',
    lure: 25,        // 上鉤速度 (100 = 甩竿立刻上鉤)
    luck: 50,        // 運氣
    control: 0.1,    // 控制力 (白色控制條變寬)
    resilience: 35,  // 復原力 (魚不在白條內時，進度掉落變慢)
    maxWeight: 5000, // 最大重量 kg
    desc: '每位釣客的第一把釣竿。木製竿身、紅色綁線，可靠又好上手。',
  },
};

const LINE_POINTS = 48;

/** Fishing rod with bendable blank, spinning reel, line and bobber. Rod points along local +Z. */
export class Rod {
  constructor(scene) {
    this.group = new THREE.Group();
    this.segments = [];
    const blankMat = new THREE.MeshStandardMaterial({ color: 0x7a5230, roughness: 0.45, metalness: 0.1 });
    const wrapMat = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.5 });
    const corkMat = new THREE.MeshStandardMaterial({ color: 0xc9a46a, roughness: 0.95 });
    const metal = new THREE.MeshStandardMaterial({ color: 0xb8bcc4, roughness: 0.3, metalness: 0.8 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x23262b, roughness: 0.4, metalness: 0.4 });

    // handle
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.55, 10), corkMat);
    grip.rotation.x = Math.PI / 2; grip.position.z = -0.12;
    const butt = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.06, 10), dark);
    butt.rotation.x = Math.PI / 2; butt.position.z = -0.41;
    this.group.add(grip, butt);

    // reel
    const reel = new THREE.Group();
    reel.position.set(0, -0.11, 0.08);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.08, 0.12), metal);
    foot.position.y = 0.05;
    const spool = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.06, 14), metal);
    spool.rotation.z = Math.PI / 2;
    const spoolLine = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.062, 14), new THREE.MeshStandardMaterial({ color: 0xf1f1f1, roughness: 0.6 }));
    spoolLine.rotation.z = Math.PI / 2;
    const handle = new THREE.Group();
    handle.position.x = 0.05;
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.11, 0.02), dark);
    arm.position.y = 0.05;
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.05, 8), new THREE.MeshStandardMaterial({ color: 0xc0392b }));
    knob.rotation.z = Math.PI / 2; knob.position.set(0.03, 0.1, 0);
    handle.add(arm, knob);
    reel.add(foot, spool, spoolLine, handle);
    this.group.add(reel);
    this.reelHandle = handle;

    // blank (chain of segments so it can bend)
    const n = 9, length = 3.0;
    const segLen = length / n;
    let parent = this.group;
    for (let i = 0; i < n; i++) {
      const seg = new THREE.Group();
      seg.position.z = i === 0 ? 0.14 : segLen;
      const r0 = 0.032 - (i / n) * 0.024, r1 = 0.032 - ((i + 1) / n) * 0.024;
      const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, segLen, 7), blankMat);
      m.rotation.x = Math.PI / 2; m.position.z = segLen / 2;
      m.castShadow = true;
      seg.add(m);
      if (i % 2 === 1) {
        const wrap = new THREE.Mesh(new THREE.CylinderGeometry(r0 + 0.006, r0 + 0.006, 0.05, 7), wrapMat);
        wrap.rotation.x = Math.PI / 2; wrap.position.z = 0.03;
        const guide = new THREE.Mesh(new THREE.TorusGeometry(0.025 - i * 0.002, 0.004, 4, 10), metal);
        guide.position.set(0, -0.045, 0.03);
        seg.add(wrap, guide);
      }
      parent.add(seg);
      this.segments.push(seg);
      parent = seg;
    }
    this.tip = new THREE.Object3D();
    this.tip.position.z = segLen;
    parent.add(this.tip);

    // bobber
    this.bobber = new THREE.Group();
    const top = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xe8352a, roughness: 0.35 }));
    const bot = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 }));
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.152, 0.152, 0.025, 14), dark);
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 5), new THREE.MeshStandardMaterial({ color: 0xffe14a, emissive: 0xffc400, emissiveIntensity: 0.4 }));
    stick.position.y = 0.27;
    const under = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.18, 4), dark);
    under.position.y = -0.22;
    this.bobber.add(top, bot, band, stick, under);
    this.bobber.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    scene.add(this.bobber);
    this.bobberVel = new THREE.Vector3();

    // line
    const lg = new THREE.BufferGeometry();
    this.linePos = new Float32Array(LINE_POINTS * 3);
    lg.setAttribute('position', new THREE.BufferAttribute(this.linePos, 3).setUsage(THREE.DynamicDrawUsage));
    this.lineMat = new THREE.LineBasicMaterial({ color: 0xf6f6f6, transparent: true, opacity: 0.85 });
    this.line = new THREE.Line(lg, this.lineMat);
    this.line.frustumCulled = false;
    scene.add(this.line);

    this.bend = 0; this.side = 0;
    this.targetBend = 0; this.targetSide = 0;
    this.bendVel = 0;
    this.spin = 0;
    this.visible = false;
    this.setVisible(false);
    this._tip = new THREE.Vector3();
  }

  setVisible(v) {
    this.visible = v;
    this.group.visible = v;
    this.bobber.visible = v;
    this.line.visible = v;
  }

  tipWorld(out = this._tip) {
    this.tip.updateWorldMatrix(true, false);
    return this.tip.getWorldPosition(out);
  }

  /** Spring-damped bend so the rod wobbles naturally. */
  update(dt) {
    const k = 120, c = 14;
    const acc = (this.targetBend - this.bend) * k - this.bendVel * c;
    this.bendVel += acc * dt;
    this.bend += this.bendVel * dt;
    this.side += (this.targetSide - this.side) * Math.min(1, dt * 8);
    const n = this.segments.length;
    for (let i = 0; i < n; i++) {
      const w = Math.pow((i + 1) / n, 1.6) * 0.42;
      this.segments[i].rotation.x = this.bend * w;
      this.segments[i].rotation.y = this.side * w;
    }
    this.reelHandle.rotation.x += this.spin * dt;
  }

  impulse(v) { this.bendVel += v; }

  /** Draw line from tip to the bobber with a sag (0 = taut). */
  updateLine(sag, wobble = 0, time = 0) {
    const a = this.tipWorld();
    const b = this.bobber.position;
    const dist = a.distanceTo(b);
    const sagAmt = sag * dist * 0.18;
    for (let i = 0; i < LINE_POINTS; i++) {
      const s = i / (LINE_POINTS - 1);
      const x = a.x + (b.x - a.x) * s;
      const z = a.z + (b.z - a.z) * s;
      let y = a.y + (b.y - a.y) * s - sagAmt * 4 * s * (1 - s);
      const wv = wobble * Math.sin(s * Math.PI) * Math.sin(time * 40 + s * 12) * 0.05;
      this.linePos[i * 3] = x + wv;
      this.linePos[i * 3 + 1] = y + wv;
      this.linePos[i * 3 + 2] = z;
    }
    this.line.geometry.attributes.position.needsUpdate = true;
  }
}
