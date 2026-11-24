import * as THREE from 'three';
import { clamp, damp } from '../core/noise.js';
import { terrainHeight } from '../world/terrain.js';

/** Third-person orbit camera (hold right mouse to rotate, wheel to zoom). */
export class CameraRig {
  constructor(camera, dom) {
    this.camera = camera;
    this.yaw = Math.PI / 2;
    this.pitch = 0.32;
    this.dist = 13;
    this.distTarget = 13;
    this.target = new THREE.Vector3();
    this.override = null; // {pos, dist}
    this.shakeAmt = 0;
    this.dragging = false;
    this.occluders = null;
    this.ray = new THREE.Raycaster();
    // Right-drag rotates the camera. The cursor is locked (hidden & frozen) while
    // dragging so it does not slide across the screen, then released on mouse-up.
    this.dom = dom;
    dom.addEventListener('mousedown', (e) => {
      if (e.button !== 2) return;
      this.dragging = true;
      this.skipMoves = 1; // first event after locking can carry a large bogus delta
      try {
        const p = dom.requestPointerLock && dom.requestPointerLock({ unadjustedMovement: true });
        if (p && p.catch) p.catch(() => { try { const q = dom.requestPointerLock(); if (q && q.catch) q.catch(() => {}); } catch (err) { /* unsupported */ } });
      } catch (err) { /* pointer lock unsupported: fall back to plain dragging */ }
    });
    const stopDrag = () => {
      this.dragging = false;
      if (document.pointerLockElement === dom) document.exitPointerLock();
    };
    window.addEventListener('mouseup', (e) => { if (e.button === 2) stopDrag(); });
    window.addEventListener('blur', stopDrag);
    document.addEventListener('pointerlockchange', () => {
      // lock lost (e.g. Esc pressed) → stop rotating
      if (document.pointerLockElement !== dom) this.dragging = false;
    });
    window.addEventListener('mousemove', (e) => {
      if (!this.dragging) return;
      if (this.skipMoves > 0) { this.skipMoves--; if (Math.abs(e.movementX) > 60 || Math.abs(e.movementY) > 60) return; }
      const dx = e.movementX || 0, dy = e.movementY || 0;
      this.yaw -= dx * 0.0055;
      this.pitch = clamp(this.pitch + dy * 0.004, -0.1, 1.35);
    });
    dom.addEventListener('wheel', (e) => {
      this.distTarget = clamp(this.distTarget * (e.deltaY > 0 ? 1.12 : 0.89), 4, 45);
    }, { passive: true });
    dom.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  forward() { return new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw)); }
  shake(a) { this.shakeAmt = Math.min(0.6, this.shakeAmt + a); }

  update(dt, focus, snap = false) {
    const goal = this.override ? this.override.pos : focus;
    const dGoal = this.override ? this.override.dist : this.distTarget;
    if (snap) this.target.copy(goal); else {
      this.target.x = damp(this.target.x, goal.x, 12, dt);
      this.target.y = damp(this.target.y, goal.y, 8, dt);
      this.target.z = damp(this.target.z, goal.z, 12, dt);
    }
    this.dist = damp(this.dist, dGoal, 6, dt);
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const off = new THREE.Vector3(-Math.sin(this.yaw) * cp, sp, -Math.cos(this.yaw) * cp).multiplyScalar(this.dist);
    // don't clip through houses / stalls: pull the camera in front of the first hit
    if (this.occluders && this.occluders.length) {
      const dir = off.clone().normalize();
      this.ray.set(this.target, dir);
      this.ray.far = this.dist;
      const hit = this.ray.intersectObjects(this.occluders, true)[0];
      if (hit) off.multiplyScalar(Math.max(1.5, hit.distance - 0.4) / this.dist);
    }
    const pos = this.target.clone().add(off);
    // keep above ground / water
    const gh = Math.max(terrainHeight(pos.x, pos.z), 0.2) + 0.7;
    if (pos.y < gh) pos.y = gh;
    if (this.shakeAmt > 0) {
      pos.x += (Math.random() - 0.5) * this.shakeAmt;
      pos.y += (Math.random() - 0.5) * this.shakeAmt;
      pos.z += (Math.random() - 0.5) * this.shakeAmt;
      this.shakeAmt = Math.max(0, this.shakeAmt - dt * 1.6);
    }
    this.camera.position.copy(pos);
    this.camera.lookAt(this.target);
  }
}
