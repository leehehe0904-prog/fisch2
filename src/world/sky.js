import * as THREE from 'three';
import { clamp, smoothstep, lerp } from '../core/noise.js';

// One full day/night cycle = 10 real minutes
export const DAY_LENGTH = 600;

const K = (t, o) => ({ t, ...o });
// t: 0 = midnight, 0.25 = 06:00, 0.5 = noon, 0.75 = 18:00
const KEYS = [
  K(0.00, { zenith: 0x02050f, horizon: 0x0b1530, fog: 0x0a1226, sun: 0x000000, hemiSky: 0x2b3d66, hemiGround: 0x0b0f18, hemi: 0.35, day: 0.12 }),
  K(0.21, { zenith: 0x060b22, horizon: 0x1c2346, fog: 0x141a33, sun: 0x000000, hemiSky: 0x33406a, hemiGround: 0x0e1018, hemi: 0.38, day: 0.15 }),
  K(0.25, { zenith: 0x29457e, horizon: 0xf08c5a, fog: 0x8a6e7a, sun: 0xff8a4c, hemiSky: 0x8a90b8, hemiGround: 0x4a3a30, hemi: 0.55, day: 0.45 }),
  K(0.30, { zenith: 0x3b78c9, horizon: 0xf3c9a0, fog: 0xbcc8d6, sun: 0xffd2a0, hemiSky: 0xa8c4ee, hemiGround: 0x6b5a43, hemi: 0.75, day: 0.85 }),
  K(0.38, { zenith: 0x2c78e0, horizon: 0xb8dcff, fog: 0xbcdcf5, sun: 0xfff1dc, hemiSky: 0xb5d6ff, hemiGround: 0x76664b, hemi: 0.85, day: 1.0 }),
  K(0.50, { zenith: 0x1f6ee0, horizon: 0xc4e4ff, fog: 0xc4e2fa, sun: 0xffffff, hemiSky: 0xbddcff, hemiGround: 0x7a6a4e, hemi: 0.9, day: 1.0 }),
  K(0.64, { zenith: 0x2a74d8, horizon: 0xc0dcf5, fog: 0xc0daf0, sun: 0xfff0d8, hemiSky: 0xb5d4fa, hemiGround: 0x76664b, hemi: 0.85, day: 1.0 }),
  K(0.71, { zenith: 0x3463ac, horizon: 0xf5b27a, fog: 0xd5b39a, sun: 0xffb36a, hemiSky: 0xa7aed0, hemiGround: 0x6a5240, hemi: 0.7, day: 0.8 }),
  K(0.75, { zenith: 0x26336b, horizon: 0xf06a3c, fog: 0x8c5a62, sun: 0xff6a35, hemiSky: 0x7c6f9a, hemiGround: 0x3e2c2a, hemi: 0.5, day: 0.42 }),
  K(0.79, { zenith: 0x0c1234, horizon: 0x3a2d55, fog: 0x231f3a, sun: 0x000000, hemiSky: 0x3a4170, hemiGround: 0x120f18, hemi: 0.4, day: 0.18 }),
  K(1.00, { zenith: 0x02050f, horizon: 0x0b1530, fog: 0x0a1226, sun: 0x000000, hemiSky: 0x2b3d66, hemiGround: 0x0b0f18, hemi: 0.35, day: 0.12 }),
];
for (const k of KEYS) for (const key of ['zenith', 'horizon', 'fog', 'sun', 'hemiSky', 'hemiGround']) k[key] = new THREE.Color(k[key]);

const skyVert = /* glsl */`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = vec4(p.xy, p.w * 0.99995, p.w);
}`;
const skyFrag = /* glsl */`
uniform vec3 uZenith; uniform vec3 uHorizon; uniform vec3 uSunDir; uniform vec3 uMoonDir; uniform vec3 uSunColor;
uniform float uStars; uniform float uTime; uniform float uSunset;
varying vec3 vDir;
float hash3(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
void main(){
  vec3 d = normalize(vDir);
  float y = d.y;
  vec3 col = mix(uHorizon, uZenith, pow(clamp(y, 0.0, 1.0), 0.5));
  col = mix(col, uHorizon * 0.55, smoothstep(0.0, -0.25, y));
  // sun glow / sunset halo
  float sd = max(dot(d, uSunDir), 0.0);
  float sunVis = smoothstep(-0.12, 0.05, uSunDir.y);
  col += uSunColor * pow(sd, 6.0) * (0.25 + uSunset * 0.6) * sunVis;
  col += uSunColor * pow(sd, 64.0) * 0.6 * sunVis;
  col += uSunColor * smoothstep(0.9993, 0.9997, sd) * 12.0 * sunVis;
  // moon
  float md = max(dot(d, uMoonDir), 0.0);
  float moonVis = smoothstep(-0.05, 0.1, uMoonDir.y);
  float disk = smoothstep(0.9989, 0.9992, md);
  float crater = hash3(floor(d * 900.0)) * 0.15;
  col += vec3(0.85, 0.9, 1.0) * disk * (1.4 - crater) * moonVis * uStars;
  col += vec3(0.4, 0.5, 0.8) * pow(md, 200.0) * 0.35 * moonVis * uStars;
  // stars
  if (uStars > 0.01 && y > -0.02) {
    vec3 p = d * 260.0;
    vec3 ip = floor(p);
    float h = hash3(ip);
    if (h > 0.9965) {
      vec3 c = ip + 0.5 + (vec3(hash3(ip + 1.3), hash3(ip + 2.7), hash3(ip + 5.1)) - 0.5) * 0.6;
      float dd = length(p - c);
      float tw = 0.65 + 0.35 * sin(uTime * (1.5 + h * 30.0) + h * 100.0);
      float s = smoothstep(0.35, 0.0, dd) * tw * uStars * smoothstep(-0.02, 0.2, y);
      col += vec3(0.85 + h * 0.15, 0.9, 1.0) * s * 2.2;
    }
    // milky band
    float band = exp(-pow(dot(d, normalize(vec3(0.3, 0.2, 1.0))) * 3.0, 2.0));
    col += vec3(0.12, 0.13, 0.2) * band * uStars * 0.35 * smoothstep(0.0, 0.4, y);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class DayNight {
  constructor(scene, startT = 0.3) {
    this.t = startT;
    this.scene = scene;
    this.zenith = new THREE.Color();
    this.horizon = new THREE.Color();
    this.fogColor = new THREE.Color();
    this.sunColor = new THREE.Color();
    this.sunDir = new THREE.Vector3();
    this.moonDir = new THREE.Vector3();
    this.dayLight = 1;
    this.night = 0;
    this.fogDensity = 0.0032;

    this.uniforms = {
      uZenith: { value: this.zenith }, uHorizon: { value: this.horizon }, uSunDir: { value: this.sunDir },
      uMoonDir: { value: this.moonDir }, uSunColor: { value: this.sunColor }, uStars: { value: 0 },
      uTime: { value: 0 }, uSunset: { value: 0 },
    };
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(3000, 48, 24),
      new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: skyVert, fragmentShader: skyFrag, side: THREE.BackSide, depthWrite: false, fog: false }),
    );
    dome.frustumCulled = false;
    dome.renderOrder = -10;
    this.dome = dome;
    scene.add(dome);

    scene.fog = new THREE.FogExp2(0xbcdcf5, this.fogDensity);

    this.hemi = new THREE.HemisphereLight(0xbddcff, 0x7a6a4e, 0.9);
    scene.add(this.hemi);

    this.light = new THREE.DirectionalLight(0xffffff, 2.2);
    this.light.castShadow = true;
    this.light.shadow.mapSize.set(2048, 2048);
    const s = this.light.shadow.camera;
    s.left = -55; s.right = 55; s.top = 55; s.bottom = -55; s.near = 1; s.far = 400;
    this.light.shadow.bias = -0.0006;
    this.light.shadow.normalBias = 0.04;
    scene.add(this.light);
    scene.add(this.light.target);

    this._a = {}; this._b = {};
  }

  get hours() { return (this.t * 24) % 24; }
  isNight() { const h = this.hours; return h >= 18.6 || h < 5.6; }
  clockString() {
    const h = this.hours;
    const hh = Math.floor(h), mm = Math.floor((h - hh) * 60);
    return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  }

  sample(t) {
    let i = 0;
    while (i < KEYS.length - 2 && KEYS[i + 1].t <= t) i++;
    const a = KEYS[i], b = KEYS[i + 1];
    const f = smoothstep(0, 1, (t - a.t) / (b.t - a.t));
    return { a, b, f };
  }

  update(dt, focus, time) {
    this.t = (this.t + dt / DAY_LENGTH) % 1;
    const { a, b, f } = this.sample(this.t);
    this.zenith.copy(a.zenith).lerp(b.zenith, f);
    this.horizon.copy(a.horizon).lerp(b.horizon, f);
    this.fogColor.copy(a.fog).lerp(b.fog, f);
    this.sunColor.copy(a.sun).lerp(b.sun, f);
    const hemiInt = lerp(a.hemi, b.hemi, f);
    this.dayLight = lerp(a.day, b.day, f);

    const ang = (this.t - 0.25) * Math.PI * 2;
    this.sunDir.set(Math.cos(ang), Math.sin(ang), 0.35).normalize();
    this.moonDir.set(-Math.cos(ang), -Math.sin(ang), -0.25).normalize();

    const sunUp = smoothstep(-0.05, 0.12, this.sunDir.y);
    const moonUp = smoothstep(-0.05, 0.15, this.moonDir.y);
    this.night = 1 - smoothstep(-0.12, 0.08, this.sunDir.y);
    this.uniforms.uStars.value = this.night;
    this.uniforms.uTime.value = time;
    this.uniforms.uSunset.value = smoothstep(0.45, 0.0, Math.abs(this.sunDir.y)) * sunUp + 0.3 * (1 - this.night);

    // Main directional light: sun by day, moon by night
    const useSun = this.sunDir.y > -0.02;
    const dir = useSun ? this.sunDir : this.moonDir;
    if (useSun) {
      this.light.color.copy(this.sunColor);
      this.light.intensity = 2.6 * sunUp;
    } else {
      this.light.color.setRGB(0.55, 0.65, 0.95);
      this.light.intensity = 0.55 * moonUp;
    }
    this.light.position.set(focus.x + dir.x * 150, focus.y + Math.max(dir.y, 0.08) * 150, focus.z + dir.z * 150);
    this.light.target.position.copy(focus);
    // snap shadow camera to texels to avoid shimmering
    this.light.target.updateMatrixWorld();

    this.hemi.color.copy(a.hemiSky).lerp(b.hemiSky, f);
    this.hemi.groundColor.copy(a.hemiGround).lerp(b.hemiGround, f);
    this.hemi.intensity = hemiInt * 1.25;

    this.scene.fog.color.copy(this.fogColor);
    this.fogDensity = lerp(0.0026, 0.0042, this.night);
    this.scene.fog.density = this.fogDensity;
    this.dome.position.copy(focus);
  }
}
