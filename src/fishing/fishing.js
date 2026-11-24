import * as THREE from 'three';
import { Rod, RODS } from './rod.js';
import { rollFish, fishValue, fishDifficulty, rarityById, formatWeight } from './fishData.js';
import { buildFishModel, fishVisualLength } from './fishModel.js';
import { waterAt, terrainHeight } from '../world/terrain.js';
import { groundHeight } from '../world/collision.js';
import { waterSurfaceY } from '../world/water.js';
import { clamp, damp, rand, lerp } from '../core/noise.js';
import { state, addFishToInventory, saveState } from '../state.js';
import { makeTextCanvas } from '../world/props.js';

function exclamationSprite() {
  const tex = makeTextCanvas([{ text: '!', font: 'bold 120px "Arial Black", sans-serif', color: '#ffe14a', strokeW: 14 }], { w: 128, h: 128, stroke: '#c0261a' });
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, fog: false }));
  s.renderOrder = 20;
  s.visible = false;
  return s;
}

function shadowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 2, 32, 32, 32);
  grd.addColorStop(0, 'rgba(0,10,20,0.75)'); grd.addColorStop(1, 'rgba(0,10,20,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

const POSE = {
  idle: { rX: -0.75, rZ: -0.12, lX: null, lZ: null, torso: 0 },
  charge: { rX: -2.7, rZ: -0.25, lX: -0.6, lZ: 0.3, torso: 0.15 },
  release: { rX: -0.35, rZ: -0.05, lX: -0.5, lZ: 0.25, torso: -0.05 },
  wait: { rX: -0.9, rZ: -0.1, lX: -0.75, lZ: 0.4, torso: 0 },
  reel: { rX: -1.05, rZ: -0.1, lX: -0.95, lZ: 0.5, torso: -0.14 },
  hold: { rX: -2.95, rZ: -0.35, lX: -2.95, lZ: 0.35, torso: -0.05 },
};

export class Fishing {
  constructor(game) {
    this.g = game;
    this.rod = new Rod(game.scene);
    const hand = game.player.rig.handR;
    hand.add(this.rod.group);
    this.rod.group.position.set(0, -0.05, 0.05);
    this.rod.group.rotation.x = 0.49; // compensates the fixed -0.2 elbow bend so the rod points forward-up
    this.state = 'none';
    this.t = 0;
    this.power = 0;
    this.powerDir = 1;
    this.holding = false;
    this.pose = { rX: 0, rZ: 0, lX: 0, lZ: 0, torso: 0 };
    this.poseTarget = POSE.idle;
    this.excl = exclamationSprite();
    game.scene.add(this.excl);
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.visible = false;
    game.scene.add(this.shadow);
    this.castFrom = new THREE.Vector3();
    this.castTo = new THREE.Vector3();
    this.water = null;
    this.catch = null;
    this.mg = null;
    this.fishModel = null;
    this.bobPrev = new THREE.Vector3();
    this.lateral = 0;
    this.splashTimer = 0;
    this.tickTimer = 0;
    this.nibbleTimer = 0;
    this.nibble = 0;
  }

  get stats() { return RODS[state.rod]; }
  get active() { return this.state !== 'none' && this.state !== 'idle'; }
  get equipped() { return this.state !== 'none'; }
  /** player may not walk while doing these */
  get locksMovement() { return ['charging', 'casting', 'bite', 'shake', 'reeling', 'caught'].includes(this.state); }

  equip(on) {
    if (on && this.state === 'none') {
      this.state = 'idle';
      this.rod.setVisible(true);
      this.resetBobberToTip();
      this.g.ui.showRodStats(true);
    } else if (!on && this.state !== 'none') {
      this.cancelAll();
      this.state = 'none';
      this.rod.setVisible(false);
      this.g.ui.showRodStats(false);
    }
  }

  cancelAll() {
    this.g.ui.power(false);
    this.g.ui.clearShake();
    this.g.ui.reel(false);
    this.g.sound.strain(0);
    this.excl.visible = false;
    this.shadow.visible = false;
    this.rod.spin = 0;
    this.rod.targetBend = 0; this.rod.targetSide = 0;
    if (this.fishModel) { this.g.scene.remove(this.fishModel); this.fishModel = null; }
    if (this.state !== 'none') this.rod.setVisible(true);
    this.state = this.state === 'none' ? 'none' : 'idle';
    this.resetBobberToTip();
  }

  resetBobberToTip() {
    const tip = this.rod.tipWorld();
    this.rod.bobber.position.copy(tip).add(new THREE.Vector3(0, -0.7, 0));
    this.bobPrev.copy(this.rod.bobber.position);
  }

  canCast() {
    const p = this.g.player;
    if (p.swimming) { this.g.ui.toast('游泳時不能釣魚！', '#ffb3b3'); return false; }
    if (p.boat && Math.abs(p.boat.speed) > 1.5) { this.g.ui.toast('先把船停下來再釣魚！', '#ffb3b3'); return false; }
    return true;
  }

  // ---------------------------------------------------------------- input
  mouseDown() {
    if (this.state === 'idle') {
      if (!this.canCast()) return;
      this.state = 'charging';
      this.power = 0; this.powerDir = 1;
      this.g.player.faceCamera();
    } else if (this.state === 'waiting') {
      this.retrieve();
    } else if (this.state === 'reeling') {
      this.holding = true;
    }
  }
  mouseUp() {
    if (this.state === 'charging') this.cast();
    this.holding = false;
  }
  /** called when the player tries to walk while waiting */
  interruptByMove() { if (this.state === 'waiting' || this.state === 'landed') this.retrieve(); }

  // ---------------------------------------------------------------- phases
  cast() {
    this.state = 'casting';
    this.t = 0;
    this.released = false;
    this.g.ui.power(false);
    this.rod.impulse(-6);
  }

  releaseBobber() {
    this.released = true;
    const p = this.g.player;
    const fwd = p.forward();
    const dist = 3 + this.power * 11; // max ~14 m: short, controllable casts
    this.castFrom.copy(this.rod.tipWorld());
    const tx = p.pos.x + fwd.x * dist, tz = p.pos.z + fwd.z * dist;
    this.water = waterAt(tx, tz);
    let ty;
    if (this.water) ty = waterSurfaceY(tx, tz, this.water.level, this.water.pond);
    else ty = groundHeight(tx, tz, 999) + 0.12;
    this.castTo.set(tx, ty, tz);
    this.flightT = 0;
    this.flightDur = 0.45 + this.power * 0.35;
    this.arc = 1.5 + this.power * 3;
    this.g.sound.whoosh();
  }

  land() {
    const b = this.rod.bobber.position;
    if (!this.water) {
      this.state = 'landed';
      this.t = 0;
      this.g.ui.toast('要把浮標甩進水裡才能釣魚喔！', '#ffd2a8');
      this.g.fx.burst(b.clone(), 0xc8b38a, 10, 2, 0.25, 0.6);
      return;
    }
    const strength = 0.45 + this.power * 0.5;
    this.g.fx.splash(b.clone(), strength, b.y);
    this.g.water.addRipple(b.x, b.z, 1.0);
    this.g.sound.splash(strength);
    this.state = 'waiting';
    this.t = 0;
    const lure = this.stats.lure;
    this.waitTime = lure >= 100 ? 0.2 : rand(5, 14) * (1 - lure / 100) + 0.4;
    this.nibbleTimer = rand(1.2, 2.5);
    this.pool = this.water.pond ? 'pond' : (this.water.island ? this.water.island.id : 'ocean');
    this.rod.impulse(3);
    // Fisch-style: the fish is decided now and SHAKE buttons appear right away.
    // The lure fills by itself (lure speed) and every shake fills it faster.
    this.catch = rollFish(this.pool, this.stats.luck, this.g.sky.isNight());
    const ri = rarityById[this.catch.fish.rarity].index;
    this.shakesNeeded = clamp(4 + Math.floor(ri * 0.8), 4, 10);
    this.lureProgress = 0;
    this.g.ui.spawnShake(() => this.onShake(), '點擊 SHAKE 讓魚更快上鉤！');
  }

  retrieve() {
    this.g.ui.clearShake();
    if (this.state === 'waiting') {
      const b = this.rod.bobber.position;
      this.g.fx.splash(b.clone(), 0.25, b.y);
      this.g.sound.plop(0.4);
    }
    this.state = 'retrieve';
    this.t = 0;
    this.retrieveFrom = this.rod.bobber.position.clone();
    this.excl.visible = false;
    this.shadow.visible = false;
  }

  bite() {
    this.g.ui.clearShake();
    this.state = 'bite';
    this.t = 0;
    const b = this.rod.bobber.position;
    this.g.fx.splash(b.clone(), 0.8, b.y);
    this.g.water.addRipple(b.x, b.z, 1.4);
    this.g.sound.bite();
    this.g.cam.shake(0.25);
    this.excl.visible = true;
    this.excl.scale.set(0.01, 0.01, 1);
    this.excl.position.copy(this.g.player.pos).y += 3.05;
    this.rod.impulse(10);
  }

  onShake() {
    if (this.state !== 'waiting') return;
    this.lureProgress += 1 / this.shakesNeeded;
    this.nibble = 1;
    this.g.sound.shake();
    const b = this.rod.bobber.position;
    this.g.fx.splash(b.clone(), 0.35, b.y);
    this.g.water.addRipple(b.x, b.z, 0.7);
    this.rod.impulse(8);
    this.g.cam.shake(0.08);
    if (this.lureProgress >= 1) this.bite();
    else setTimeout(() => { if (this.state === 'waiting') this.g.ui.spawnShake(() => this.onShake(), '點擊 SHAKE 讓魚更快上鉤！'); }, 90);
  }

  startReel() {
    this.state = 'reeling';
    this.t = 0;
    this.excl.visible = false;
    const st = this.stats;
    const { fish, weight } = this.catch;
    const diff = fishDifficulty(fish, weight) * (1 - (st.resilience / 100) * 0.35);
    const barW = clamp(0.26 + st.control, 0.1, 0.95);
    this.mg = {
      barW, barPos: 0.5 - barW / 2, barVel: 0, fishPos: 0.5, fishVel: 0, fishTarget: 0.5,
      timer: 0.5, progress: 0.3, diff, overweight: weight > st.maxWeight, inBar: true, perfect: true,
    };
    this.g.ui.reel(true);
    this.reelStart = this.rod.bobber.position.clone();
    this.lateral = 0;
    const size = fishVisualLength(fish, weight);
    this.shadow.scale.set(Math.max(0.6, size * 1.2), Math.max(0.35, size * 0.5), 1);
    this.shadow.visible = !['boot', 'can', 'weed', 'wood'].includes(fish.shape);
  }

  updateMinigame(dt, time) {
    const mg = this.mg, st = this.stats;
    const holding = this.holding || this.g.input.space;
    mg.barVel += (holding ? 1 : -1) * 3.3 * dt;
    mg.barVel = clamp(mg.barVel, -1.35, 1.35);
    mg.barPos += mg.barVel * dt;
    if (mg.barPos < 0) { mg.barPos = 0; mg.barVel = Math.abs(mg.barVel) * 0.25; }
    if (mg.barPos > 1 - mg.barW) { mg.barPos = 1 - mg.barW; mg.barVel = -Math.abs(mg.barVel) * 0.25; }

    const d = mg.diff;
    mg.timer -= dt;
    if (mg.timer <= 0) {
      if (Math.random() < 0.12 + d * 0.3) mg.fishTarget = Math.random() < 0.5 ? rand(0.02, 0.15) : rand(0.85, 0.98);
      else mg.fishTarget = clamp(mg.fishPos + rand(-0.45, 0.45) * (0.5 + d), 0.03, 0.97);
      mg.timer = rand(0.4, 1.5) * (1.25 - d * 0.75);
    }
    const speed = 1.3 + d * 4.2;
    mg.fishVel = damp(mg.fishVel, (mg.fishTarget - mg.fishPos) * speed, 5, dt);
    mg.fishPos = clamp(mg.fishPos + (mg.fishVel + Math.sin(time * 11) * 0.06 * d) * dt, 0.02, 0.98);

    mg.inBar = mg.fishPos >= mg.barPos && mg.fishPos <= mg.barPos + mg.barW;
    const gain = 0.16 * (mg.overweight ? 0.2 : 1) * (1 - d * 0.3);
    const loss = 0.15 * (1 + d * 0.6) * (1 - st.resilience / 100);
    if (mg.inBar) mg.progress += gain * dt;
    else { mg.progress -= loss * dt; mg.perfect = false; }
    this.g.ui.updateReel(mg);

    // reel feedback
    this.rod.spin = holding ? -22 : -4;
    this.tickTimer -= dt;
    if (this.tickTimer <= 0) { this.g.sound.tick(); this.tickTimer = holding ? 0.06 : 0.16; }
    this.g.sound.strain(mg.inBar ? 0.15 : 0.7);
    if (!mg.inBar) this.g.cam.shake(0.03);

    if (mg.progress >= 1) this.landFish();
    else if (mg.progress <= 0) this.lose('魚掙脫跑掉了…');
  }

  landFish() {
    this.g.ui.reel(false);
    this.g.sound.strain(0);
    this.rod.spin = 0;
    this.shadow.visible = false;
    const { fish, weight, mutation } = this.catch;
    let value = fishValue(fish, weight, mutation);
    if (this.mg.perfect) value = Math.round(value * 1.1);
    const { isNew } = addFishToInventory(fish.id, weight, mutation, value);
    saveState();
    const b = this.rod.bobber.position.clone();
    const size = fishVisualLength(fish, weight);
    this.g.fx.splash(b, Math.min(2.2, 0.8 + size * 0.5), b.y);
    this.g.water.addRipple(b.x, b.z, 2);
    this.g.sound.splash(1.2);
    // fish model
    this.fishModel = buildFishModel(fish);
    // exaggerate small fish a bit so the catch is easy to admire (like other fishing games do)
    this.fishModel.scale.setScalar(Math.min(5, Math.max(0.9, 0.6 + size * 0.9)));
    this.fishModel.position.copy(b);
    if (mutation && mutation.id === 'albino') this.fishModel.traverse((o) => { if (o.isMesh && o.material.color) { o.material = o.material.clone(); o.material.color.set(0xffffff); o.material.vertexColors = false; } });
    if (mutation && mutation.id === 'shiny') this.fishModel.traverse((o) => { if (o.isMesh && o.material.emissive) { o.material = o.material.clone(); o.material.emissive.set(0xfff2a0); o.material.emissiveIntensity = 0.35; } });
    this.g.scene.add(this.fishModel);
    this.flyFrom = b;
    this.fishSize = Math.min(5, Math.max(0.9, 0.6 + size * 0.9));
    this.state = 'caught';
    this.t = 0;
    this.caughtInfo = { fish, weight, mutation, value, isNew };
    this.rod.setVisible(false);
    this.g.quests.onEvent('catch', { fish, weight, pool: this.pool, night: this.g.sky.isNight() });
    this.g.onInventoryChanged();
  }

  lose(msg) {
    this.g.ui.reel(false);
    this.g.ui.clearShake();
    this.g.sound.strain(0);
    this.g.sound.snap();
    this.g.ui.toast(msg, '#ff9b9b');
    this.rod.impulse(-12);
    this.rod.spin = 0;
    this.excl.visible = false;
    this.shadow.visible = false;
    this.state = 'lost';
    this.t = 0;
    this.retrieveFrom = this.rod.bobber.position.clone();
  }

  // ---------------------------------------------------------------- per-frame
  update(dt, time) {
    if (this.state === 'none') return;
    const rod = this.rod, b = rod.bobber.position, ui = this.g.ui;
    this.t += dt;
    let sag = 0.6, wobble = 0;
    let pose = POSE.idle;
    rod.targetSide = 0;

    switch (this.state) {
      case 'idle':
        rod.targetBend = 0.05;
        this.dangle(dt);
        break;
      case 'charging': {
        this.power += this.powerDir * dt * 1.05;
        if (this.power >= 1) { this.power = 1; this.powerDir = -1; }
        if (this.power <= 0) { this.power = 0; this.powerDir = 1; }
        pose = {
          rX: lerp(POSE.idle.rX, POSE.charge.rX, Math.min(1, this.t * 4)), rZ: POSE.charge.rZ, lX: POSE.charge.lX, lZ: POSE.charge.lZ, torso: POSE.charge.torso,
        };
        rod.targetBend = -0.15;
        this.dangle(dt);
        const sp = this.g.worldToScreen(this.g.player.pos.clone().add(new THREE.Vector3(0, 2.2, 0)));
        ui.power(true, this.power, sp.x + 70, sp.y);
        break;
      }
      case 'casting': {
        pose = POSE.release;
        if (!this.released && this.t > 0.12) this.releaseBobber();
        if (this.released) {
          this.flightT += dt;
          const s = Math.min(1, this.flightT / this.flightDur);
          const tip = rod.tipWorld();
          // start of flight follows the rod tip briefly
          const from = this.flightT < 0.05 ? tip : this.castFrom;
          b.lerpVectors(from, this.castTo, s);
          b.y += this.arc * 4 * s * (1 - s);
          sag = 0.08;
          if (s >= 1) this.land();
        } else {
          this.dangle(dt);
        }
        rod.targetBend = 0.2;
        break;
      }
      case 'landed':
        pose = POSE.wait;
        sag = 0.5;
        if (this.t > 0.7) this.retrieve();
        break;
      case 'waiting': {
        pose = POSE.wait;
        const w = this.water;
        const surf = waterSurfaceY(b.x, b.z, w.level, w.pond);
        this.nibbleTimer -= dt;
        if (this.nibbleTimer <= 0) {
          this.nibble = 1;
          this.nibbleTimer = rand(1.2, 3.2);
          this.g.water.addRipple(b.x, b.z, 0.4);
          this.g.fx.ring(b.x, surf + 0.02, b.z, 0.1, 0.9, 0.8, 0.35);
          if (Math.random() < 0.5) this.g.sound.plop(0.15);
        }
        this.nibble = Math.max(0, this.nibble - dt * 4);
        b.y = damp(b.y, surf - 0.02 - this.nibble * 0.12 + Math.sin(time * 2.2) * 0.02, 12, dt);
        b.x += Math.sin(time * 0.6) * 0.002;
        rod.bobber.rotation.z = Math.sin(time * 1.7) * 0.1;
        rod.bobber.rotation.x = Math.cos(time * 1.3) * 0.08;
        rod.targetBend = 0.12 + this.nibble * 0.2;
        sag = 0.45;
        this.lureProgress += dt / this.waitTime;
        if (this.lureProgress >= 1) this.bite();
        break;
      }
      case 'bite': {
        pose = POSE.wait;
        const surf = waterSurfaceY(b.x, b.z, this.water.level, this.water.pond);
        b.y = damp(b.y, surf - 0.35, 18, dt);
        b.x += Math.sin(time * 30) * 0.01;
        rod.targetBend = 0.7;
        sag = 0.0;
        // big "!" pops up above the player's head
        const pp = this.g.player.pos;
        this.excl.position.set(pp.x, pp.y + 3.05 + Math.sin(this.t * 12) * 0.06, pp.z);
        const s = Math.min(1, this.t * 7) * (1 + Math.max(0, 0.35 - this.t) * 2 + Math.sin(this.t * 10) * 0.05);
        this.excl.scale.set(1.3 * s, 1.3 * s, 1);
        if (this.t > 0.65) this.startReel();
        break;
      }
      case 'shake': {
        pose = POSE.wait;
        const surf = waterSurfaceY(b.x, b.z, this.water.level, this.water.pond);
        b.y = damp(b.y, surf - 0.25 + Math.sin(time * 20) * 0.06, 14, dt);
        b.x += Math.sin(time * 9) * 0.015;
        b.z += Math.cos(time * 7) * 0.015;
        rod.targetBend = 0.55 + Math.sin(time * 18) * 0.1;
        sag = 0.0; wobble = 0.5;
        this.excl.visible = true;
        this.excl.position.set(b.x, surf + 1.6 + Math.sin(this.t * 12) * 0.1, b.z);
        this.splashTimer -= dt;
        if (this.splashTimer <= 0) { this.splashTimer = 0.35; this.g.fx.splash(b.clone(), 0.2, surf); this.g.water.addRipple(b.x, b.z, 0.5); }
        if (this.t > 20) this.lose('太慢了，魚跑掉了…');
        break;
      }
      case 'reeling': {
        pose = POSE.reel;
        this.updateMinigame(dt, time);
        if (this.state !== 'reeling') break;
        const mg = this.mg;
        const p = this.g.player.pos;
        const toP = new THREE.Vector3(p.x - this.reelStart.x, 0, p.z - this.reelStart.z);
        toP.normalize();
        const perp = new THREE.Vector3(-toP.z, 0, toP.x);
        // The fish stays where it bit (no pulling toward the player): it only
        // thrashes side to side around that spot. The catch happens when the
        // progress bar reaches 100%.
        this.lateral = damp(this.lateral, (mg.fishPos - 0.5) * 3, 3, dt);
        const nx = this.reelStart.x + perp.x * this.lateral;
        const nz = this.reelStart.z + perp.z * this.lateral;
        const w = waterAt(nx, nz);
        if (w) { b.x = damp(b.x, nx, 4, dt); b.z = damp(b.z, nz, 4, dt); }
        const surf = waterSurfaceY(b.x, b.z, this.water.level, this.water.pond);
        b.y = damp(b.y, surf - 0.18 + Math.sin(time * 25) * (mg.inBar ? 0.02 : 0.07), 15, dt);
        rod.bobber.rotation.z = Math.sin(time * 15) * 0.4;
        rod.targetBend = (mg.inBar ? 0.6 : 0.95) + Math.sin(time * 23) * 0.06;
        rod.targetSide = clamp(-this.lateral * 0.08, -0.4, 0.4);
        sag = 0; wobble = mg.inBar ? 0.2 : 1;
        this.splashTimer -= dt;
        if (this.splashTimer <= 0) {
          this.splashTimer = mg.inBar ? 0.4 : 0.14;
          this.g.fx.splash(b.clone(), mg.inBar ? 0.2 : 0.45, surf);
          this.g.water.addRipple(b.x, b.z, mg.inBar ? 0.4 : 0.9);
        }
        this.shadow.position.set(b.x - toP.x * 0.4, surf - 0.25, b.z - toP.z * 0.4);
        this.shadow.rotation.z = Math.atan2(toP.x, toP.z) + Math.PI / 2 + Math.sin(time * 6) * 0.3;
        break;
      }
      case 'caught': {
        const p = this.g.player.pos;
        // hold the fish just above the two raised hands
        const hl = this.g.player.rig.handL.getWorldPosition(new THREE.Vector3());
        const hr = this.g.player.rig.handR.getWorldPosition(new THREE.Vector3());
        const holdPos = hl.add(hr).multiplyScalar(0.5);
        holdPos.y += 0.12 + Math.min(1.2, this.fishSize * 0.1);
        const fwd = this.g.player.forward();
        holdPos.addScaledVector(fwd, 0.05);
        const fm = this.fishModel;
        const flyDur = 0.75;
        if (this.t < flyDur) {
          pose = POSE.reel;
          const s = this.t / flyDur;
          const e = 1 - Math.pow(1 - s, 2);
          fm.position.lerpVectors(this.flyFrom, holdPos, e);
          fm.position.y += 3.5 * 4 * s * (1 - s);
          fm.rotation.set(0, 0, s * Math.PI * 4);
          fm.userData.update(time, 1.5);
          if (Math.random() < 0.5) this.g.fx.drop(fm.position.clone(), new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)), 0.9, 1, -50);
        } else {
          pose = POSE.hold;
          if (!this.shownPopup) {
            this.shownPopup = true;
            const c = this.caughtInfo;
            ui.catchPopup(c.fish, c.weight, c.mutation, c.isNew, c.value);
            const r = rarityById[c.fish.rarity];
            this.g.sound.jingle(r.index);
            if (this.mg.perfect) ui.toast('✨ 完美收線！價值 +10%', '#fff59d');
            const col = r.color === 'rainbow' ? 0xff8af0 : new THREE.Color(r.color).getHex();
            if (r.index >= 3) this.g.fx.burst(holdPos.clone(), col, 20 + r.index * 12, 4 + r.index, 0.5, 1.5);
            if (r.index >= 5) { this.g.fx.burst(holdPos.clone(), 0xffffff, 40, 7, 0.6, 2); this.g.cam.shake(0.2); }
          }
          // fish held horizontally above the head, flapping
          fm.position.copy(holdPos);
          const yaw = this.g.player.yaw;
          fm.rotation.set(0, yaw + Math.PI, 0);
          fm.rotateZ(Math.sin(time * 9) * 0.08);
          fm.userData.update(time, 0.8);
          const r = rarityById[this.caughtInfo.fish.rarity];
          if (r.index >= 4 && Math.random() < 0.3) {
            const col = r.color === 'rainbow' ? new THREE.Color().setHSL((time * 0.5) % 1, 1, 0.6) : new THREE.Color(r.color);
            this.g.fx.spark(holdPos.clone().add(new THREE.Vector3(rand(-1, 1) * this.fishSize * 0.6, rand(-0.4, 0.6), rand(-0.5, 0.5))), new THREE.Vector3(0, 0.8, 0), col, 0.35, 1.2, 0);
          }
          if (Math.random() < 0.15) this.g.fx.drop(fm.position.clone().add(new THREE.Vector3(rand(-0.3, 0.3) * this.fishSize, -0.1, 0)), new THREE.Vector3(0, -1, 0), 0.7, 1.2, -50);
          if (this.t > flyDur + 2.4) {
            this.g.scene.remove(fm);
            this.fishModel = null;
            this.shownPopup = false;
            this.state = 'idle';
            rod.setVisible(true);
            this.resetBobberToTip();
          }
        }
        rod.bobber.position.copy(rod.tipWorld());
        break;
      }
      case 'retrieve':
      case 'lost': {
        pose = POSE.wait;
        const dur = this.state === 'lost' ? 0.35 : 0.45;
        const s = Math.min(1, this.t / dur);
        const tip = rod.tipWorld().clone().add(new THREE.Vector3(0, -0.7, 0));
        b.lerpVectors(this.retrieveFrom, tip, s * s);
        b.y += Math.sin(s * Math.PI) * 1.2;
        sag = this.state === 'lost' ? 1.4 : 0.15;
        wobble = this.state === 'lost' ? 2 : 0;
        rod.targetBend = 0.05;
        if (s >= 1) { this.state = 'idle'; this.bobPrev.copy(b); }
        break;
      }
    }
    this.poseTarget = pose;
    if (this.state !== 'bite' && this.state !== 'shake') this.excl.visible = false;
    rod.update(dt);
    if (rod.visible) rod.updateLine(sag, wobble, time);
  }

  /** verlet pendulum for the bobber hanging under the rod tip */
  dangle(dt) {
    const b = this.rod.bobber.position;
    const tip = this.rod.tipWorld();
    const vel = b.clone().sub(this.bobPrev).multiplyScalar(0.96);
    this.bobPrev.copy(b);
    b.add(vel);
    b.y -= 9.8 * dt * dt;
    const d = b.clone().sub(tip);
    const len = d.length();
    const L = 0.7;
    if (len > L) b.copy(tip).addScaledVector(d.normalize(), L);
    this.rod.bobber.rotation.set(0, 0, 0);
  }

  /** apply arm poses after the base walk animation (called by player) */
  applyPose(rig, dt, time) {
    if (this.state === 'none') return;
    const t = this.poseTarget;
    const p = this.pose;
    const k = this.state === 'casting' ? 30 : 12;
    p.rX = damp(p.rX, t.rX, k, dt);
    p.rZ = damp(p.rZ, t.rZ, k, dt);
    p.torso = damp(p.torso, t.torso, 8, dt);
    rig.armR.rotation.x = p.rX;
    rig.armR.rotation.z = p.rZ;
    rig.elbowR.rotation.x = -0.2;
    if (t.lX !== null) {
      p.lX = damp(p.lX, t.lX, k, dt);
      p.lZ = damp(p.lZ, t.lZ, k, dt);
      let crank = 0;
      if (this.state === 'reeling' && (this.holding || this.g.input.space)) crank = Math.sin(time * 22) * 0.18;
      rig.armL.rotation.x = p.lX + crank;
      rig.armL.rotation.z = p.lZ;
      rig.elbowL.rotation.x = this.state === 'caught' ? -0.2 : -0.65;
    } else {
      p.lX = rig.armL.rotation.x; p.lZ = rig.armL.rotation.z;
    }
    rig.torso.rotation.x += p.torso;
  }
}
