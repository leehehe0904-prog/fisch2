import * as THREE from 'three';
import { ISLANDS, waterAt } from './terrain.js';
import { waterSurfaceY } from './water.js';
import { rand } from '../core/noise.js';

export class Ambient {
  constructor(game) {
    this.g = game;
    const scene = game.scene;
    // ---- clouds
    this.clouds = new THREE.Group();
    const cmat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true, transparent: true, opacity: 0.95, fog: false, emissive: 0xffffff, emissiveIntensity: 0.15 });
    this.cloudMat = cmat;
    const cg = new THREE.IcosahedronGeometry(1, 1);
    for (let i = 0; i < 26; i++) {
      const c = new THREE.Group();
      const n = 4 + Math.floor(Math.random() * 5);
      for (let j = 0; j < n; j++) {
        const m = new THREE.Mesh(cg, cmat);
        m.position.set(rand(-14, 14), rand(-2, 3), rand(-7, 7));
        m.scale.set(rand(7, 13), rand(4, 7), rand(6, 10));
        c.add(m);
      }
      c.position.set(rand(-700, 900), rand(140, 220), rand(-900, 600));
      c.userData.speed = rand(1.5, 4);
      this.clouds.add(c);
    }
    scene.add(this.clouds);

    // ---- seagulls
    this.gulls = [];
    const wingGeo = new THREE.BufferGeometry();
    wingGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0.2, 0, 0, -0.2, -1.1, 0.1, 0], 3));
    wingGeo.computeVertexNormals();
    const gm = new THREE.MeshStandardMaterial({ color: 0xf4f4f4, side: THREE.DoubleSide, roughness: 0.8 });
    const tipM = new THREE.MeshStandardMaterial({ color: 0x333333, side: THREE.DoubleSide });
    for (let i = 0; i < 9; i++) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.5, 3, 6), gm);
      body.rotation.x = Math.PI / 2;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.11, 6, 5), gm);
      head.position.z = 0.42;
      const beak = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.15, 4), new THREE.MeshStandardMaterial({ color: 0xf1c40f }));
      beak.rotation.x = Math.PI / 2; beak.position.z = 0.55;
      const wl = new THREE.Mesh(wingGeo, gm), wr = new THREE.Mesh(wingGeo, gm);
      wr.scale.x = -1;
      const tl = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.3, 3), tipM); tl.rotation.z = Math.PI / 2; tl.position.x = -1.0; wl.add(tl);
      g.add(body, head, beak, wl, wr);
      g.scale.setScalar(1.3);
      const isl = ISLANDS[i % ISLANDS.length];
      g.userData = { wl, wr, cx: isl.cx + rand(-30, 30), cz: isl.cz + rand(-30, 30), r: rand(25, 60), h: rand(18, 34), a: rand(0, 6), sp: rand(0.15, 0.3) * (Math.random() < 0.5 ? -1 : 1), flap: rand(0, 6) };
      g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      scene.add(g);
      this.gulls.push(g);
    }

    // ---- fireflies (night)
    const N = 260;
    const pos = new Float32Array(N * 3);
    this.ffBase = [];
    for (let i = 0; i < N; i++) {
      const isl = ISLANDS[i % ISLANDS.length];
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * isl.radius * 0.85;
      const x = isl.cx + Math.cos(a) * r, z = isl.cz + Math.sin(a) * r;
      this.ffBase.push({ x, z, y: 0, ph: Math.random() * 10 });
    }
    const fg = new THREE.BufferGeometry();
    fg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.ffMat = new THREE.PointsMaterial({ color: 0xd8ff6a, size: 0.35, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    this.fireflies = new THREE.Points(fg, this.ffMat);
    this.fireflies.frustumCulled = false;
    scene.add(this.fireflies);
    this.ffInit = false;

    // ---- jumping fish near the player
    this.jumpers = [];
    const fm = new THREE.MeshStandardMaterial({ color: 0xb8c8d4, metalness: 0.5, roughness: 0.3 });
    for (let i = 0; i < 3; i++) {
      const f = new THREE.Group();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), fm); b.scale.set(2.2, 0.8, 0.6);
      const t = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.3, 3), fm); t.rotation.z = -Math.PI / 2; t.position.x = -0.55;
      f.add(b, t);
      f.visible = false;
      scene.add(f);
      this.jumpers.push({ mesh: f, t: 0, active: false });
    }
    this.jumpTimer = 3;
  }

  update(dt, time, focus, night) {
    const g = this.g;
    for (const c of this.clouds.children) {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 1000) c.position.x = -800;
    }
    this.cloudMat.color.setRGB(1, 1, 1).lerp(g.sky.horizon, 0.25).multiplyScalar(0.35 + 0.65 * g.sky.dayLight);
    this.cloudMat.emissive.copy(g.sky.horizon).multiplyScalar(0.4);

    for (const gull of this.gulls) {
      const u = gull.userData;
      u.a += u.sp * dt;
      const x = u.cx + Math.cos(u.a) * u.r, z = u.cz + Math.sin(u.a) * u.r;
      const y = u.h + Math.sin(u.a * 3) * 2;
      gull.position.set(x, y, z);
      const dx = -Math.sin(u.a) * Math.sign(u.sp), dz = Math.cos(u.a) * Math.sign(u.sp);
      gull.rotation.set(0, Math.atan2(dx, dz), -Math.sign(u.sp) * 0.25);
      u.flap += dt * (Math.sin(time * 0.5 + u.a) > 0.3 ? 9 : 2);
      const fl = Math.sin(u.flap) * 0.5;
      u.wl.rotation.z = fl; u.wr.rotation.z = -fl;
      gull.visible = night < 0.7;
    }

    // fireflies
    if (!this.ffInit) {
      for (const f of this.ffBase) f.y = Math.max(0.5, g.terrainH(f.x, f.z));
      this.ffInit = true;
    }
    this.ffMat.opacity = night * 0.9;
    this.fireflies.visible = night > 0.05;
    if (this.fireflies.visible) {
      const arr = this.fireflies.geometry.attributes.position.array;
      this.ffBase.forEach((f, i) => {
        arr[i * 3] = f.x + Math.sin(time * 0.6 + f.ph) * 1.5;
        arr[i * 3 + 1] = f.y + 1 + Math.sin(time * 1.3 + f.ph * 2) * 0.6 + (Math.sin(time * 3 + f.ph * 5) > 0.6 ? 0 : -50);
        arr[i * 3 + 2] = f.z + Math.cos(time * 0.5 + f.ph) * 1.5;
      });
      this.fireflies.geometry.attributes.position.needsUpdate = true;
    }

    // jumping fish
    this.jumpTimer -= dt;
    if (this.jumpTimer <= 0) {
      this.jumpTimer = rand(2.5, 7);
      const j = this.jumpers.find((x) => !x.active);
      if (j) {
        const a = Math.random() * Math.PI * 2, r = rand(14, 45);
        const x = focus.x + Math.cos(a) * r, z = focus.z + Math.sin(a) * r;
        const w = waterAt(x, z);
        if (w && w.depth > 2) {
          j.active = true; j.t = 0; j.x = x; j.z = z; j.level = w.level; j.dir = Math.random() * 6; j.h = rand(1, 2.2); j.dur = rand(0.8, 1.2);
          j.mesh.visible = true;
          g.fx.splash(new THREE.Vector3(x, w.level, z), 0.35, w.level);
          g.water.addRipple(x, z, 0.7);
        }
      }
    }
    for (const j of this.jumpers) {
      if (!j.active) continue;
      j.t += dt;
      const s = j.t / j.dur;
      const dx = Math.cos(j.dir), dz = Math.sin(j.dir);
      const x = j.x + dx * s * 2.5, z = j.z + dz * s * 2.5;
      j.mesh.position.set(x, j.level + j.h * 4 * s * (1 - s) - 0.2, z);
      j.mesh.rotation.set(0, -j.dir, (0.5 - s) * 2.2);
      if (s >= 1) {
        j.active = false; j.mesh.visible = false;
        g.fx.splash(new THREE.Vector3(x, j.level, z), 0.3, j.level);
        g.water.addRipple(x, z, 0.6);
      }
    }
  }
}
