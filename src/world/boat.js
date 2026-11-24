import * as THREE from 'three';
import { boatModel } from './props.js';
import { terrainHeight } from './terrain.js';
import { waterSurfaceY } from './water.js';
import { resolveCircle } from './collision.js';
import { clamp, damp } from '../core/noise.js';

/** Player motor boat. Bow along local +X; forward = (cos h, 0, -sin h). */
export class Boat {
  constructor(game) {
    this.g = game;
    this.model = boatModel(0xf6f3ea, 0x1f6fb5);
    this.model.rotation.order = 'YXZ';
    this.model.visible = false;
    game.scene.add(this.model);
    this.pos = new THREE.Vector3();
    this.heading = 0;
    this.speed = 0;
    this.spawned = false;
    this.wakeTimer = 0;
    this.pitch = 0; this.roll = 0;
    this.prevY = 0;
  }

  forward() { return new THREE.Vector3(Math.cos(this.heading), 0, -Math.sin(this.heading)); }

  spawn(x, z, heading) {
    this.pos.set(x, 0, z);
    this.heading = heading;
    this.speed = 0;
    this.spawned = true;
    this.model.visible = true;
    this.g.fx.splash(new THREE.Vector3(x, 0, z), 1.4, 0);
    this.g.sound.splash(1.2);
  }

  seatWorld(kind) {
    const local = kind === 'drive' ? new THREE.Vector3(-1.55, -0.12, 0) : new THREE.Vector3(-0.2, -0.12, 0);
    this.model.updateMatrixWorld();
    return local.applyMatrix4(this.model.matrixWorld);
  }

  blockedAt(x, z) { return terrainHeight(x, z) > -0.55; }

  update(dt, time, input, driving) {
    if (!this.spawned) return;
    const canDrive = driving && !this.g.fishing.equipped;
    const throttle = canDrive ? (input.f ? 1 : 0) - (input.b ? 1 : 0) : 0;
    const steer = canDrive ? (input.l ? 1 : 0) - (input.r ? 1 : 0) : 0;
    const maxSpeed = input.shift ? 30 : 22;
    if (throttle > 0) this.speed += 12 * dt;
    else if (throttle < 0) this.speed -= 10 * dt;
    else this.speed = damp(this.speed, 0, 0.9, dt);
    this.speed = clamp(this.speed, -7, maxSpeed);
    if (this.speed > maxSpeed) this.speed = damp(this.speed, maxSpeed, 2, dt);
    this.heading += steer * 1.35 * dt * clamp(this.speed / 8, -1, 1);

    const fwd = this.forward();
    const next = this.pos.clone().addScaledVector(fwd, this.speed * dt);
    const bow = next.clone().addScaledVector(fwd, Math.sign(this.speed || 1) * 2.8);
    if (this.blockedAt(bow.x, bow.z) || this.blockedAt(next.x, next.z)) {
      if (Math.abs(this.speed) > 6) { this.g.cam.shake(0.3); this.g.sound.plop(0.6); }
      this.speed = -this.speed * 0.25;
    } else {
      const before = next.clone();
      resolveCircle(next, 1.6, 0.3, 2, true);
      if (before.distanceToSquared(next) > 1e-4) this.speed *= 0.9;
      this.pos.copy(next);
    }

    // float on the waves
    const hC = waterSurfaceY(this.pos.x, this.pos.z);
    const f = this.pos.clone().addScaledVector(fwd, 2.2), bk = this.pos.clone().addScaledVector(fwd, -2.2);
    const side = new THREE.Vector3(fwd.z, 0, -fwd.x);
    const l = this.pos.clone().addScaledVector(side, 1.0), r = this.pos.clone().addScaledVector(side, -1.0);
    const hF = waterSurfaceY(f.x, f.z), hB = waterSurfaceY(bk.x, bk.z), hL = waterSurfaceY(l.x, l.z), hR = waterSurfaceY(r.x, r.z);
    const plane = clamp(this.speed / 22, 0, 1);
    this.pitch = damp(this.pitch, Math.atan2(hF - hB, 4.4) + plane * 0.09 + throttle * 0.03, 5, dt);
    this.roll = damp(this.roll, Math.atan2(hL - hR, 2.0) - steer * plane * 0.12, 5, dt);
    this.pos.y = damp(this.pos.y, hC + 0.05 + plane * 0.15, 8, dt);
    this.model.position.copy(this.pos);
    this.model.rotation.set(this.roll, this.heading, this.pitch);
    // motor
    const prop = this.model.userData.prop;
    if (prop) prop.rotation.x += dt * (canDrive ? 10 + Math.abs(this.speed) * 3 : 0);
    if (this.model.userData.motor) this.model.userData.motor.rotation.y = -steer * 0.4;

    // wake + spray
    const sp = Math.abs(this.speed);
    this.wakeTimer -= dt;
    if (sp > 2 && this.wakeTimer <= 0) {
      this.wakeTimer = 0.07;
      const stern = this.pos.clone().addScaledVector(fwd, -2.8);
      this.g.fx.ring(stern.x, hC + 0.04, stern.z, 0.4, 1.5 + sp * 0.12, 1.6, 0.45);
      this.g.water.addRipple(stern.x, stern.z, 0.5);
      for (let i = 0; i < 3; i++) {
        this.g.fx.drop(stern.clone().setY(hC + 0.1), new THREE.Vector3((Math.random() - 0.5) * 2 - fwd.x * 2, 1 + Math.random() * 2, (Math.random() - 0.5) * 2 - fwd.z * 2), 0.8, 0.8, hC - 0.2);
      }
      if (sp > 10) {
        const bowP = this.pos.clone().addScaledVector(fwd, 2.4);
        for (const s of [-1, 1]) {
          const v = side.clone().multiplyScalar(s * (2 + Math.random() * 2)).add(new THREE.Vector3(0, 2 + Math.random() * 2, 0));
          this.g.fx.drop(bowP.clone().addScaledVector(side, s * 0.9).setY(hC + 0.1), v, 1, 0.9, hC - 0.2);
        }
      }
    }
    this.g.sound.setEngine(canDrive, clamp(sp / 26, 0, 1));
  }
}
