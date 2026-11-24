import * as THREE from 'three';
import { createCharacter } from './character.js';
import { groundHeight, platformHeight, resolveCircle, colliders, insideCollider } from '../world/collision.js';
import { waterAt, terrainHeight } from '../world/terrain.js';
import { waterSurfaceY } from '../world/water.js';
import { damp, angleDamp } from '../core/noise.js';
import { buildFishModel, fishVisualLength } from '../fishing/fishModel.js';
import { fishById } from '../fishing/fishData.js';

export class Player {
  constructor(game) {
    this.g = game;
    this.rig = createCharacter({ shirt: 0x2f80ed, pants: 0x34495e, hat: 'bucket', hatColor: 0xe9b949, hair: 0x3b2414, vest: 0x5d8a3a });
    game.scene.add(this.rig.root);
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.onGround = false;
    this.swimming = false;
    this.boat = null;
    this.heldFish = null;
    this.heldModel = null;
    this.splashTimer = 0;
    this.stepTimer = 0;
  }

  forward() { return new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw)); }
  faceCamera() { this.yaw = this.g.cam.yaw; }

  teleport(x, z, yaw = this.yaw) {
    this.pos.set(x, Math.max(terrainHeight(x, z), platformHeight(x, z, 999)) + 0.05, z);
    this.vel.set(0, 0, 0);
    this.yaw = yaw;
  }

  holdFish(item) {
    if (this.heldModel) { this.heldModel.parent.remove(this.heldModel); this.heldModel = null; }
    this.heldFish = item;
    if (!item) return;
    const def = fishById[item.id];
    const m = buildFishModel(def);
    const L = Math.min(2.2, fishVisualLength(def, item.weight));
    m.scale.setScalar(L);
    m.rotation.set(1.1, 0, 0); // arm is raised ~1.1 rad, keep the fish level & side-on to the camera
    m.position.set(0, -0.12, 0.05);
    this.rig.handR.add(m);
    this.heldModel = m;
  }

  update(dt, time, input, blocked) {
    const g = this.g;
    if (this.boat) {
      this.updateInBoat(dt, time);
      return;
    }
    // ---- input → wish direction (relative to camera)
    let mx = 0, mz = 0;
    if (!blocked) {
      if (input.f) mz += 1;
      if (input.b) mz -= 1;
      if (input.l) mx -= 1;
      if (input.r) mx += 1;
    }
    const cy = g.cam.yaw;
    const fwd = new THREE.Vector3(Math.sin(cy), 0, Math.cos(cy));
    const right = new THREE.Vector3(-Math.cos(cy), 0, Math.sin(cy));
    const wish = fwd.multiplyScalar(mz).add(right.multiplyScalar(mx));
    const moving = wish.lengthSq() > 0.01;
    if (moving) {
      wish.normalize();
      if (g.fishing.state === 'waiting' || g.fishing.state === 'landed') g.fishing.interruptByMove();
    }
    const fishingLock = g.fishing.locksMovement;
    const speed = this.swimming ? 5.5 : (input.shift ? 15 : 9);
    const target = fishingLock ? new THREE.Vector3() : wish.clone().multiplyScalar(speed);
    const accel = this.onGround || this.swimming ? 14 : 3;
    this.vel.x = damp(this.vel.x, target.x, accel, dt);
    this.vel.z = damp(this.vel.z, target.z, accel, dt);
    if (moving && !fishingLock) this.yaw = angleDamp(this.yaw, Math.atan2(wish.x, wish.z), 12, dt);

    // ---- vertical
    const w = waterAt(this.pos.x, this.pos.z);
    const ground = groundHeight(this.pos.x, this.pos.z, this.pos.y);
    const swimY = w ? waterSurfaceY(this.pos.x, this.pos.z, w.level, w.pond) - 1.35 : -Infinity;
    const wasSwimming = this.swimming;
    this.swimming = !!w && ground < swimY - 0.05 && this.pos.y <= swimY + 0.1;
    if (this.swimming) {
      if (!wasSwimming) {
        g.fx.splash(new THREE.Vector3(this.pos.x, swimY + 1.35, this.pos.z), 0.9, swimY + 1.35);
        g.sound.splash(0.8);
        g.water.addRipple(this.pos.x, this.pos.z, 1.2);
        if (g.fishing.equipped) g.selectSlot(0);
      }
      this.vel.y = 0;
      this.pos.y = damp(this.pos.y, swimY, 8, dt);
      this.onGround = false;
      this.splashTimer -= dt;
      if (this.splashTimer <= 0 && moving) {
        this.splashTimer = 0.45;
        g.water.addRipple(this.pos.x, this.pos.z, 0.6);
        g.fx.ring(this.pos.x, swimY + 1.38, this.pos.z, 0.5, 2.2, 1.2, 0.35);
      }
    } else {
      this.vel.y -= 32 * dt;
      if (input.jump && this.onGround && !blocked && !fishingLock) { this.vel.y = 11.5; this.onGround = false; }
    }
    // ---- integrate + collide
    const next = this.pos.clone().addScaledVector(this.vel, dt);
    // climb out of the water onto docks
    if (this.swimming) {
      for (const c of colliders) {
        if (c.walkable && c.top > next.y + 0.6 && c.top < swimY + 3.6 && insideCollider(c, next.x, next.z, 0.35)) {
          next.y = c.top + 0.05; this.swimming = false; this.vel.y = 4; break;
        }
      }
    }
    resolveCircle(next, 0.45, next.y, next.y + 2.4);
    const gh = groundHeight(next.x, next.z, Math.max(next.y, this.pos.y));
    if (next.y <= gh && !this.swimming) {
      if (gh - next.y > 0.05 && this.onGround) next.y = damp(next.y, gh, 25, dt); else next.y = gh;
      if (next.y < gh - 0.3) next.y = gh;
      if (this.vel.y < 0) this.vel.y = 0;
      this.onGround = true;
    } else if (!this.swimming) {
      this.onGround = next.y - gh < 0.08;
    }
    this.pos.copy(next);

    // footstep dust / water splashes in shallow water
    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (this.onGround && hs > 3) {
      this.stepTimer -= dt * hs;
      if (this.stepTimer <= 0) {
        this.stepTimer = 3.2;
        if (w && w.level > this.pos.y - 0.05) {
          g.fx.splash(new THREE.Vector3(this.pos.x, w.level, this.pos.z), 0.15, w.level);
          g.water.addRipple(this.pos.x, this.pos.z, 0.5);
        }
      }
    }
    this.applyVisual(dt, time, hs, this.swimming ? 'swim' : (this.onGround ? 'ground' : 'air'));
  }

  updateInBoat(dt, time) {
    const b = this.boat;
    const driving = !this.g.fishing.equipped || this.g.fishing.state === 'idle';
    const seat = b.seatWorld(driving && !this.g.fishing.equipped ? 'drive' : 'stand');
    this.pos.copy(seat);
    this.vel.set(0, 0, 0);
    this.onGround = true;
    this.swimming = false;
    if (!this.g.fishing.equipped) this.yaw = b.heading + Math.PI / 2;
    else if (!this.g.fishing.locksMovement && this.g.fishing.state === 'idle') this.yaw = angleDamp(this.yaw, this.g.cam.yaw, 6, dt);
    this.applyVisual(dt, time, 0, this.g.fishing.equipped ? 'ground' : 'sit');
    this.rig.root.rotation.z = b.model.rotation.x * 0.6;
  }

  applyVisual(dt, time, speed, mode) {
    const r = this.rig;
    r.root.position.copy(this.pos);
    r.root.rotation.set(0, this.yaw, 0);
    r.animate(dt, time, speed, mode);
    if (this.heldFish && mode !== 'swim') {
      r.armR.rotation.x = -1.1; r.armR.rotation.z = -0.1;
      if (this.heldModel) this.heldModel.userData.update(time, 0.25);
    }
    this.g.fishing.applyPose(r, dt, time);
  }
}
