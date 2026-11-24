import * as THREE from 'three';

/** Pooled instanced droplets (lit), additive sparkles and expanding ripple rings. */
export class FX {
  constructor(scene) {
    this.scene = scene;
    // ---- droplets
    this.maxDrops = 600;
    const dg = new THREE.IcosahedronGeometry(0.07, 0);
    this.dropMat = new THREE.MeshStandardMaterial({ color: 0xe6f6ff, roughness: 0.1, metalness: 0.0, transparent: true, opacity: 0.9, emissive: 0x2a4a5a, emissiveIntensity: 0.4 });
    this.drops = new THREE.InstancedMesh(dg, this.dropMat, this.maxDrops);
    this.drops.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.drops.frustumCulled = false;
    this.dropData = [];
    for (let i = 0; i < this.maxDrops; i++) this.dropData.push({ life: 0, p: new THREE.Vector3(), v: new THREE.Vector3(), s: 1, floor: 0 });
    this.dropIdx = 0;
    scene.add(this.drops);

    // ---- sparkles / glow points
    this.maxSpark = 500;
    const sg = new THREE.BufferGeometry();
    this.sparkPos = new Float32Array(this.maxSpark * 3);
    this.sparkCol = new Float32Array(this.maxSpark * 3);
    this.sparkSize = new Float32Array(this.maxSpark);
    sg.setAttribute('position', new THREE.BufferAttribute(this.sparkPos, 3).setUsage(THREE.DynamicDrawUsage));
    sg.setAttribute('color', new THREE.BufferAttribute(this.sparkCol, 3).setUsage(THREE.DynamicDrawUsage));
    sg.setAttribute('size', new THREE.BufferAttribute(this.sparkSize, 1).setUsage(THREE.DynamicDrawUsage));
    this.sparkMat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 300 } },
      vertexShader: `attribute float size; attribute vec3 color; varying vec3 vC; varying float vS;
        uniform float uScale;
        void main(){ vC = color; vS = size; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying vec3 vC; varying float vS;
        void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (vS <= 0.0) discard;
          float a = smoothstep(0.5, 0.0, r); float star = max(0.0, 1.0 - abs(d.x*d.y)*60.0) * smoothstep(0.5,0.1,r);
          gl_FragColor = vec4(vC * (a + star*0.6), a); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    this.sparks = new THREE.Points(sg, this.sparkMat);
    this.sparks.frustumCulled = false;
    this.sparkData = [];
    for (let i = 0; i < this.maxSpark; i++) this.sparkData.push({ life: 0, max: 1, p: new THREE.Vector3(), v: new THREE.Vector3(), c: new THREE.Color(), s: 1, g: 0 });
    this.sparkIdx = 0;
    scene.add(this.sparks);

    // ---- rings
    this.rings = [];
    const rg = new THREE.RingGeometry(0.85, 1, 40);
    rg.rotateX(-Math.PI / 2);
    for (let i = 0; i < 24; i++) {
      const m = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false }));
      m.visible = false;
      m.renderOrder = 3;
      scene.add(m);
      this.rings.push({ mesh: m, life: 0, max: 1, r0: 0.2, r1: 2, a: 0.6, getY: null });
    }
    this.ringIdx = 0;
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._s = new THREE.Vector3();
  }

  drop(p, v, size = 1, life = 1.2, floor = -1e9) {
    const d = this.dropData[this.dropIdx];
    this.dropIdx = (this.dropIdx + 1) % this.maxDrops;
    d.p.copy(p); d.v.copy(v); d.s = size; d.life = life; d.floor = floor;
  }

  splash(pos, strength = 1, waterY = pos.y) {
    const n = Math.floor(14 + strength * 26);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = (0.8 + Math.random() * 2.2) * strength;
      const up = (2.5 + Math.random() * 4.5) * Math.sqrt(strength);
      this.drop(
        new THREE.Vector3(pos.x + Math.cos(a) * 0.15, waterY + 0.05, pos.z + Math.sin(a) * 0.15),
        new THREE.Vector3(Math.cos(a) * sp, up, Math.sin(a) * sp),
        0.6 + Math.random() * 1.2 * Math.min(1.6, strength), 1.5, waterY - 0.1,
      );
    }
    // central column
    for (let i = 0; i < 6 * strength; i++) {
      this.drop(new THREE.Vector3(pos.x, waterY, pos.z), new THREE.Vector3((Math.random() - 0.5) * 0.6, 5 + Math.random() * 3 * strength, (Math.random() - 0.5) * 0.6), 1.3, 1.5, waterY - 0.1);
    }
    this.ring(pos.x, waterY + 0.03, pos.z, 0.2, 2.2 * strength + 1.2, 1.2, 0.7);
    this.ring(pos.x, waterY + 0.03, pos.z, 0.1, 1.2 * strength + 0.8, 0.9, 0.5);
  }

  ring(x, y, z, r0, r1, life = 1, alpha = 0.6, getY = null) {
    const r = this.rings[this.ringIdx];
    this.ringIdx = (this.ringIdx + 1) % this.rings.length;
    r.mesh.position.set(x, y, z);
    r.life = life; r.max = life; r.r0 = r0; r.r1 = r1; r.a = alpha; r.getY = getY;
    r.mesh.visible = true;
  }

  spark(p, v, color, size = 0.4, life = 1, gravity = 0) {
    const s = this.sparkData[this.sparkIdx];
    this.sparkIdx = (this.sparkIdx + 1) % this.maxSpark;
    s.p.copy(p); s.v.copy(v); s.c.set(color); s.s = size; s.life = life; s.max = life; s.g = gravity;
  }

  burst(p, color, n = 30, speed = 4, size = 0.5, life = 1.2) {
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() * 0.8 + 0.2, Math.random() - 0.5).normalize().multiplyScalar(speed * (0.4 + Math.random() * 0.6));
      this.spark(p, v, color, size * (0.6 + Math.random() * 0.8), life * (0.6 + Math.random() * 0.6), -3);
    }
  }

  update(dt) {
    // droplets
    const m = this._m, q = this._q, s = this._s;
    for (let i = 0; i < this.maxDrops; i++) {
      const d = this.dropData[i];
      if (d.life > 0) {
        d.life -= dt;
        d.v.y -= 14 * dt;
        d.v.multiplyScalar(1 - dt * 0.6);
        d.p.addScaledVector(d.v, dt);
        if (d.p.y < d.floor) d.life = 0;
        const k = Math.max(0, Math.min(1, d.life * 2)) * d.s;
        // stretch along velocity
        q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.v.lengthSq() > 0.01 ? d.v.clone().normalize() : new THREE.Vector3(0, 1, 0));
        s.set(k, k * (1 + Math.min(2.5, d.v.length() * 0.25)), k);
        m.compose(d.p, q, s);
      } else {
        m.makeScale(0, 0, 0);
      }
      this.drops.setMatrixAt(i, m);
    }
    this.drops.instanceMatrix.needsUpdate = true;

    // sparks
    for (let i = 0; i < this.maxSpark; i++) {
      const sp = this.sparkData[i];
      if (sp.life > 0) {
        sp.life -= dt;
        sp.v.y += sp.g * dt;
        sp.v.multiplyScalar(1 - dt * 1.2);
        sp.p.addScaledVector(sp.v, dt);
        const f = Math.max(0, sp.life / sp.max);
        this.sparkPos[i * 3] = sp.p.x; this.sparkPos[i * 3 + 1] = sp.p.y; this.sparkPos[i * 3 + 2] = sp.p.z;
        this.sparkCol[i * 3] = sp.c.r * f; this.sparkCol[i * 3 + 1] = sp.c.g * f; this.sparkCol[i * 3 + 2] = sp.c.b * f;
        this.sparkSize[i] = sp.s * (0.4 + 0.6 * f);
      } else {
        this.sparkSize[i] = 0;
      }
    }
    const g = this.sparks.geometry;
    g.attributes.position.needsUpdate = true;
    g.attributes.color.needsUpdate = true;
    g.attributes.size.needsUpdate = true;

    // rings
    for (const r of this.rings) {
      if (r.life <= 0) { r.mesh.visible = false; continue; }
      r.life -= dt;
      const t = 1 - r.life / r.max;
      const e = 1 - Math.pow(1 - t, 2.2);
      const rad = r.r0 + (r.r1 - r.r0) * e;
      r.mesh.scale.set(rad, 1, rad);
      r.mesh.material.opacity = r.a * (1 - t);
      if (r.getY) r.mesh.position.y = r.getY(r.mesh.position.x, r.mesh.position.z) + 0.03;
    }
  }
}
