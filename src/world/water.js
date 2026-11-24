import * as THREE from 'three';
import { terrainHeight, DEPTH_BOUNDS, ISLANDS } from './terrain.js';
import { smoothstep } from '../core/noise.js';

// Shared wave definition (CPU + GPU use the exact same formula so floating things match)
const WAVES = [
  { dx: 0.96, dz: 0.28, k: 0.075, a: 0.34, s: 0.9 },
  { dx: 0.6, dz: -0.8, k: 0.13, a: 0.19, s: 1.25 },
  { dx: -0.42, dz: 0.91, k: 0.21, a: 0.09, s: 1.7 },
  { dx: 0.88, dz: 0.47, k: 0.37, a: 0.05, s: 2.4 },
];

let waterTime = 0;
export function setWaterTime(t) { waterTime = t; }
export function getWaterTime() { return waterTime; }

/** Wave displacement at (x,z). amp = 1 for sea, small for ponds. */
export function waveOffset(x, z, level = 0, amp = 1) {
  const depth = level - terrainHeight(x, z);
  const damp = (0.15 + 0.85 * smoothstep(0, 6, depth)) * amp;
  let h = 0;
  for (const w of WAVES) h += w.a * Math.sin(w.k * (w.dx * x + w.dz * z) + waterTime * w.s);
  return h * damp;
}
export function waterSurfaceY(x, z, level = 0, pond = false) {
  return level + waveOffset(x, z, level, pond ? 0.12 : 1);
}

const waveGLSL = WAVES.map((w) => `
    ph = ${w.k.toFixed(4)} * dot(vec2(${w.dx.toFixed(3)}, ${w.dz.toFixed(3)}), p) + uTime * ${w.s.toFixed(3)};
    h += ${w.a.toFixed(4)} * sin(ph);
    g += ${(w.a * w.k).toFixed(5)} * cos(ph) * vec2(${w.dx.toFixed(3)}, ${w.dz.toFixed(3)});`).join('');

const vert = /* glsl */`
uniform float uTime;
uniform float uLevel;
uniform float uAmp;
uniform sampler2D uHeightTex;
uniform vec4 uBounds;
varying vec3 vWorld;
varying vec3 vNormalW;
varying float vH;
varying float vDepth;

float terrainH(vec2 p){
  vec2 uv = (p - uBounds.xy) / uBounds.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return -18.0;
  return texture2D(uHeightTex, uv).r * 50.0 - 20.0;
}

void main(){
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec2 p = wp.xz;
  float depth = uLevel - terrainH(p);
  float damp = (0.15 + 0.85 * smoothstep(0.0, 6.0, depth)) * uAmp;
  float h = 0.0; vec2 g = vec2(0.0); float ph;
  ${waveGLSL}
  wp.y = uLevel + h * damp;
  vH = h * damp;
  vDepth = depth;
  vNormalW = normalize(vec3(-g.x * damp, 1.0, -g.y * damp));
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const frag = /* glsl */`
uniform float uTime;
uniform float uLevel;
uniform float uAmp;
uniform sampler2D uHeightTex;
uniform vec4 uBounds;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uMoonDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uDayLight;
uniform float uNight;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec4 uRipples[10];
varying vec3 vWorld;
varying vec3 vNormalW;
varying float vH;
varying float vDepth;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
}
float terrainH(vec2 p){
  vec2 uv = (p - uBounds.xy) / uBounds.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return -18.0;
  return texture2D(uHeightTex, uv).r * 50.0 - 20.0;
}

vec2 detailGrad(vec2 p, float t){
  vec2 g = vec2(0.0);
  vec2 d; float k; float ph;
  d = normalize(vec2(0.8, 0.6));   k = 1.3; ph = dot(d,p)*k + t*2.1; g += d * cos(ph) * 0.08;
  d = normalize(vec2(-0.5, 0.86)); k = 1.9; ph = dot(d,p)*k + t*2.7; g += d * cos(ph) * 0.06;
  d = normalize(vec2(0.2, -0.98)); k = 2.7; ph = dot(d,p)*k + t*3.3; g += d * cos(ph) * 0.045;
  d = normalize(vec2(-0.9, -0.3)); k = 3.9; ph = dot(d,p)*k + t*3.9; g += d * cos(ph) * 0.035;
  d = normalize(vec2(0.65, -0.4)); k = 5.7; ph = dot(d,p)*k + t*4.6; g += d * cos(ph) * 0.025;
  d = normalize(vec2(-0.3, -0.7)); k = 8.3; ph = dot(d,p)*k + t*5.5; g += d * cos(ph) * 0.018;
  // noise based small scale breakup
  float n1 = vnoise(p * 0.9 + vec2(t * 0.35, t * 0.2));
  float n2 = vnoise(p * 0.9 + vec2(t * 0.35 + 0.05, t * 0.2));
  float n3 = vnoise(p * 0.9 + vec2(t * 0.35, t * 0.2 + 0.05));
  g += vec2(n2 - n1, n3 - n1) * 3.0;
  return g;
}

void main(){
  float dist = length(cameraPosition - vWorld);
  float detailFade = 1.0 - smoothstep(40.0, 260.0, dist);
  vec2 g = detailGrad(vWorld.xz, uTime) * detailFade * mix(0.35, 1.0, uAmp);

  // interactive ripples (bobber, splashes)
  for (int i = 0; i < 10; i++) {
    vec4 r = uRipples[i];
    if (r.w <= 0.0) continue;
    vec2 dd = vWorld.xz - r.xy;
    float rr = length(dd) + 1e-4;
    float age = uTime - r.z;
    if (age < 0.0 || age > 5.0) continue;
    float front = age * 2.4;
    float x = rr - front;
    float env = exp(-x * x * 0.9) * exp(-age * 0.9) * r.w * smoothstep(0.0, 0.15, age);
    g += (dd / rr) * cos(x * 7.0) * env * 0.9;
  }

  vec3 N = normalize(vNormalW + vec3(-g.x, 0.0, -g.y) * 0.6);
  vec3 V = normalize(cameraPosition - vWorld);
  float NdV = max(dot(N, V), 0.0);
  float fres = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
  vec3 R = reflect(-V, N);
  R.y = abs(R.y);
  vec3 sky = mix(uHorizon, uZenith, pow(clamp(R.y, 0.0, 1.0), 0.55));

  float sunUp = smoothstep(-0.06, 0.08, uSunDir.y);
  float sd = max(dot(R, uSunDir), 0.0);
  vec3 spec = uSunColor * (pow(sd, 1200.0) * 9.0 + pow(sd, 90.0) * 0.35) * sunUp;
  float md = max(dot(R, uMoonDir), 0.0);
  spec += vec3(0.65, 0.75, 1.0) * (pow(md, 900.0) * 3.0 + pow(md, 60.0) * 0.08) * uNight;

  float depth = uLevel - terrainH(vWorld.xz);
  float sh = exp(-max(depth, 0.0) * 0.32);
  vec3 water = mix(uDeep, uShallow, sh);
  // light scattered in wave crests
  water += vec3(0.0, 0.12, 0.10) * clamp(vH * 1.6 + 0.2, 0.0, 1.0) * uDayLight;
  float diff = clamp(dot(N, uSunDir) * 0.5 + 0.5, 0.0, 1.0);
  water *= (0.25 + 0.75 * uDayLight) * (0.75 + 0.25 * diff);

  vec3 col = mix(water, sky, fres);
  col += spec;

  // shoreline foam + crest foam
  float fn = vnoise(vWorld.xz * 1.7 + vec2(uTime * 0.4, -uTime * 0.3));
  float fn2 = vnoise(vWorld.xz * 4.3 - vec2(uTime * 0.6, uTime * 0.2));
  float shoreBand = smoothstep(1.4, 0.0, depth);
  float waveLines = 0.5 + 0.5 * sin(depth * 6.0 - uTime * 1.8 + fn * 4.0);
  float foam = shoreBand * smoothstep(0.35, 0.9, waveLines * 0.7 + fn2 * 0.6);
  foam = max(foam, smoothstep(0.05, 0.0, depth) * 0.9);
  foam = max(foam, smoothstep(0.42, 0.6, vH + fn2 * 0.12) * 0.5 * uAmp);
  vec3 foamCol = vec3(0.95, 0.98, 1.0) * (0.15 + 0.85 * uDayLight);
  col = mix(col, foamCol, clamp(foam, 0.0, 1.0) * 0.85);

  float alpha = mix(0.45, 0.97, smoothstep(0.0, 5.0, depth));
  alpha = max(alpha, fres * 0.9);
  alpha = max(alpha, foam * 0.9);

  float fog = 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
  col = mix(col, uFogColor, fog);
  alpha = mix(alpha, 1.0, fog);

  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export class WaterSystem {
  constructor(scene, heightTex) {
    this.ripples = [];
    for (let i = 0; i < 10; i++) this.ripples.push(new THREE.Vector4(0, 0, -100, 0));
    this.rippleIdx = 0;
    const b = DEPTH_BOUNDS;
    this.uniforms = {
      uTime: { value: 0 }, uLevel: { value: 0 }, uAmp: { value: 1 },
      uHeightTex: { value: heightTex }, uBounds: { value: new THREE.Vector4(b.minX, b.minZ, b.size, b.size) },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uSunColor: { value: new THREE.Color(1, 1, 1) },
      uMoonDir: { value: new THREE.Vector3(0, -1, 0) },
      uZenith: { value: new THREE.Color() }, uHorizon: { value: new THREE.Color() },
      uFogColor: { value: new THREE.Color() }, uFogDensity: { value: 0.003 },
      uDayLight: { value: 1 }, uNight: { value: 0 },
      uDeep: { value: new THREE.Color(0x02253a) }, uShallow: { value: new THREE.Color(0x1fb5b0) },
      uRipples: { value: this.ripples },
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms, vertexShader: vert, fragmentShader: frag,
      transparent: true, depthWrite: true,
    });
    const geo = new THREE.PlaneGeometry(1400, 1400, 280, 280);
    geo.rotateX(-Math.PI / 2);
    this.sea = new THREE.Mesh(geo, this.material);
    this.sea.frustumCulled = false;
    this.sea.renderOrder = 2;
    scene.add(this.sea);

    // ponds share the shader with a different level and calm waves
    this.ponds = [];
    for (const isl of ISLANDS) {
      if (!isl.pond) continue;
      const p = isl.pond;
      const mat = this.material.clone();
      mat.uniforms = { ...this.uniforms, uLevel: { value: p.level }, uAmp: { value: 0.12 },
        uDeep: { value: new THREE.Color(0x0d3a2c) }, uShallow: { value: new THREE.Color(0x3d9c78) } };
      const pg = new THREE.CircleGeometry(p.r + 4, 64, 0, Math.PI * 2);
      pg.rotateX(-Math.PI / 2);
      // add some subdivision for vertex waves
      const m = new THREE.Mesh(pg, mat);
      m.position.set(p.wx, 0, p.wz);
      m.renderOrder = 2;
      scene.add(m);
      this.ponds.push(m);
    }
  }

  addRipple(x, z, strength = 1) {
    const r = this.ripples[this.rippleIdx];
    r.set(x, z, this.uniforms.uTime.value, strength);
    this.rippleIdx = (this.rippleIdx + 1) % this.ripples.length;
  }

  update(time, camera, sky) {
    setWaterTime(time);
    const u = this.uniforms;
    u.uTime.value = time;
    const step = 1400 / 280;
    this.sea.position.set(Math.round(camera.position.x / step) * step, 0, Math.round(camera.position.z / step) * step);
    if (sky) {
      u.uSunDir.value.copy(sky.sunDir);
      u.uMoonDir.value.copy(sky.moonDir);
      u.uSunColor.value.copy(sky.sunColor);
      u.uZenith.value.copy(sky.zenith);
      u.uHorizon.value.copy(sky.horizon);
      u.uFogColor.value.copy(sky.fogColor);
      u.uFogDensity.value = sky.fogDensity;
      u.uDayLight.value = sky.dayLight;
      u.uNight.value = sky.night;
    }
  }
}
