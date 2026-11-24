import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/** Normalise a geometry so different primitive types can be merged together. */
function prep(geo, matrix) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
  g.applyMatrix4(matrix);
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
  if (!g.attributes.normal) g.computeVertexNormals();
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  g.morphAttributes = {};
  g.clearGroups();
  return g;
}

function mergeBuckets(entries) {
  const buckets = new Map();
  for (const e of entries) {
    const key = `${e.mesh.material.uuid}|${e.mesh.castShadow ? 1 : 0}|${e.mesh.receiveShadow ? 1 : 0}`;
    if (!buckets.has(key)) buckets.set(key, { mat: e.mesh.material, cast: e.mesh.castShadow, recv: e.mesh.receiveShadow, geos: [] });
    buckets.get(key).geos.push(prep(e.mesh.geometry, e.matrix));
  }
  const out = [];
  for (const b of buckets.values()) {
    const geo = b.geos.length === 1 ? b.geos[0] : mergeGeometries(b.geos);
    const m = new THREE.Mesh(geo, b.mat);
    m.castShadow = b.cast; m.receiveShadow = b.recv;
    out.push(m);
  }
  return out;
}

/**
 * Bake a whole group of static scenery into one mesh per material (huge draw-call saving).
 * Lights, sprites and multi-material meshes are moved to `scene` unchanged.
 */
export function mergeStatic(group, scene) {
  group.updateMatrixWorld(true);
  const entries = [], keep = [];
  group.traverse((o) => {
    if (o === group) return;
    if (o.isLight || o.isSprite || o.isInstancedMesh || o.isPoints || (o.isMesh && Array.isArray(o.material))) keep.push(o);
    else if (o.isMesh) entries.push({ mesh: o, matrix: o.matrixWorld.clone() });
  });
  // keep only top-most kept objects (their children come along)
  for (const o of keep) {
    let p = o.parent, nested = false;
    while (p && p !== group) { if (keep.includes(p)) { nested = true; break; } p = p.parent; }
    if (!nested) scene.attach(o);
  }
  for (const m of mergeBuckets(entries)) scene.add(m);
}

/**
 * For an articulated model: inside every group, merge its direct mesh children that share a
 * material (they move rigidly together), so the group's transform still animates them.
 */
export function mergeRigid(root) {
  const groups = [];
  root.traverse((o) => { if (!o.isMesh) groups.push(o); });
  for (const g of groups) {
    const meshes = g.children.filter((c) => c.isMesh && !Array.isArray(c.material) && c.children.length === 0);
    if (meshes.length < 2) continue;
    const entries = meshes.map((m) => { m.updateMatrix(); return { mesh: m, matrix: m.matrix.clone() }; });
    for (const m of meshes) g.remove(m);
    for (const m of mergeBuckets(entries)) g.add(m);
  }
}
