// Simple 2.5D collision world: oriented boxes and circles with a "top" height.
// If an object's top is below the player's feet + STEP it acts like ground (docks, stairs),
// otherwise it blocks horizontal movement (walls, trees).
import { terrainHeight } from './terrain.js';

export const STEP = 0.6;
export const colliders = [];

// rot uses the same convention as three.js Object3D.rotation.y
export function addBox(cx, cz, w, d, top, rot = 0, opts = {}) {
  const a = -rot;
  const c = {
    type: 'box', cx, cz, hw: w / 2, hd: d / 2, top,
    bottom: opts.bottom ?? -100, cos: Math.cos(a), sin: Math.sin(a),
    walkable: opts.walkable ?? false, boatBlock: opts.boatBlock ?? true,
  };
  colliders.push(c);
  return c;
}

export function addCircle(x, z, r, top, opts = {}) {
  const c = { type: 'circle', x, z, r, top, bottom: opts.bottom ?? -100, walkable: false, boatBlock: opts.boatBlock ?? true };
  colliders.push(c);
  return c;
}

function toLocal(c, x, z) {
  const dx = x - c.cx, dz = z - c.cz;
  // rotate by -rot
  return [dx * c.cos + dz * c.sin, -dx * c.sin + dz * c.cos];
}

export function insideCollider(c, x, z, margin = 0) {
  if (c.type === 'circle') {
    const dx = x - c.x, dz = z - c.z;
    return dx * dx + dz * dz < (c.r + margin) ** 2;
  }
  const [lx, lz] = toLocal(c, x, z);
  return Math.abs(lx) < c.hw + margin && Math.abs(lz) < c.hd + margin;
}

/** Highest standable surface under (x,z) for something whose feet are at feetY. */
export function groundHeight(x, z, feetY = 999) {
  let g = terrainHeight(x, z);
  for (const c of colliders) {
    if (c.top > g && c.top <= feetY + STEP && insideCollider(c, x, z, 0.05)) g = c.top;
  }
  return g;
}

/** Only platforms (no terrain). Returns -Infinity when none. */
export function platformHeight(x, z, feetY = 999) {
  let g = -Infinity;
  for (const c of colliders) {
    if (c.walkable && c.top <= feetY + STEP && insideCollider(c, x, z, 0.05)) g = Math.max(g, c.top);
  }
  return g;
}

/** Push a circle (x,z,r) out of every collider that is taller than feetY + STEP. Mutates pos. */
export function resolveCircle(pos, r, feetY, headY, forBoat = false) {
  for (const c of colliders) {
    if (forBoat ? !c.boatBlock : false) continue;
    if (c.top <= feetY + STEP) continue;
    if (c.bottom > headY) continue;
    if (c.type === 'circle') {
      const dx = pos.x - c.x, dz = pos.z - c.z;
      const d = Math.hypot(dx, dz), m = c.r + r;
      if (d < m && d > 1e-5) {
        pos.x = c.x + (dx / d) * m;
        pos.z = c.z + (dz / d) * m;
      }
    } else {
      const [lx, lz] = toLocal(c, pos.x, pos.z);
      const px = c.hw + r - Math.abs(lx), pz = c.hd + r - Math.abs(lz);
      if (px > 0 && pz > 0) {
        let nx = lx, nz = lz;
        if (px < pz) nx = Math.sign(lx || 1) * (c.hw + r);
        else nz = Math.sign(lz || 1) * (c.hd + r);
        // back to world
        pos.x = c.cx + nx * c.cos - nz * c.sin;
        pos.z = c.cz + nx * c.sin + nz * c.cos;
      }
    }
  }
  return pos;
}
