import * as THREE from 'three';
import { state, loadState, saveState, resetState } from './state.js';
import { buildHeightTexture, buildSeabed, terrainHeight, zoneAt, waterAt } from './world/terrain.js';
import { groundHeight } from './world/collision.js';
import { WaterSystem } from './world/water.js';
import { DayNight, DAY_LENGTH } from './world/sky.js';
import { buildWorld } from './world/islands.js';
import { nightLights, animated, occluders, M } from './world/props.js';
import { Ambient } from './world/ambient.js';
import { Boat } from './world/boat.js';
import { FX } from './fx/particles.js';
import { Player } from './player/player.js';
import { CameraRig } from './player/camera.js';
import { Fishing } from './fishing/fishing.js';
import { NPC } from './npc/npc.js';
import { Dialogue } from './npc/dialogue.js';
import { Quests } from './npc/quests.js';
import { UI } from './ui/ui.js';
import { Sound } from './audio/audio.js';
import { NameModal } from './ui/nameModal.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const OCEAN = { id: 'ocean', name: 'Open Sea', subtitle: '一望無際的外海' };

class Game {
  constructor() {
    loadState();
    // ---------------------------------------------------------------- renderer
    const r = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    r.setSize(window.innerWidth, window.innerHeight);
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    r.outputColorSpace = THREE.SRGBColorSpace;
    document.body.prepend(r.domElement);
    this.renderer = r;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 4000);
    // post-processing: HDR render → soft bloom (sun glints, lanterns, sparkles) → tone mapping
    const rt = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(r, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth / 4, window.innerHeight / 4), 0.32, 0.55, 0.92);
    // the glow is soft anyway: run the blur chain at quarter resolution (much cheaper)
    const bloomSetSize = this.bloom.setSize.bind(this.bloom);
    this.bloom.setSize = (w, h) => bloomSetSize(Math.max(1, Math.round(w / 4)), Math.max(1, Math.round(h / 4)));
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      r.setSize(window.innerWidth, window.innerHeight);
      this.composer.setSize(window.innerWidth, window.innerHeight);
    });

    this.terrainH = terrainHeight;
    this.input = { f: false, b: false, l: false, r: false, shift: false, jump: false, space: false };
    this.ui = new UI();
    this.sound = new Sound();
    this.fx = new FX(this.scene);

    // ---------------------------------------------------------------- world
    this.sky = new DayNight(this.scene, state.time ?? 0.3);
    this.water = new WaterSystem(this.scene, buildHeightTexture(512));
    this.scene.add(buildSeabed());
    this.world = buildWorld(this.scene);
    this.ambient = new Ambient(this);

    // ---------------------------------------------------------------- actors
    this.cam = new CameraRig(this.camera, r.domElement);
    this.cam.occluders = occluders;
    this.player = new Player(this);
    this.fishing = new Fishing(this);
    this.boat = new Boat(this);
    this.quests = new Quests(this);
    this.dialogue = new Dialogue(this);
    this.npcs = this.world.npcs.map((d) => new NPC(this, d));
    this.nameModal = new NameModal(this);
    if (state.playerName) this.applyPlayerName(state.playerName);

    const sp = state.pos || this.world.spawn;
    this.player.teleport(sp.x, sp.z, sp.yaw ?? this.world.spawn.yaw);
    if (state.pos && waterAt(sp.x, sp.z) && groundHeight(sp.x, sp.z, 99) < -1) {
      // never start in the open sea
      const s = this.world.spawn;
      this.player.teleport(s.x, s.z, s.yaw);
    }
    this.cam.yaw = this.player.yaw;
    this.cam.update(0, this.player.pos.clone().add(new THREE.Vector3(0, 1.8, 0)), true);

    this.ui.setMoney(state.money);
    this.ui.onSelectSlot = (n) => this.selectSlot(n);
    this.ui.renderHotbar();
    this.quests.render();

    this.started = false;
    this.time = 0;
    this.zoneKey = null;
    this.zoneTimer = 0;
    this.saveTimer = 0;
    this.interactTarget = null;
    this.clock = new THREE.Clock();
    this.bindInput();
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  // ---------------------------------------------------------------- input
  bindInput() {
    const keyMap = { KeyW: 'f', ArrowUp: 'f', KeyS: 'b', ArrowDown: 'b', KeyA: 'l', ArrowLeft: 'l', KeyD: 'r', ArrowRight: 'r' };
    window.addEventListener('keydown', (e) => {
      if (!this.started) return;
      // typing a name: don't move / jump / open panels
      if (this.nameModal.isOpen || e.target.tagName === 'INPUT') return;
      if (keyMap[e.code]) this.input[keyMap[e.code]] = true;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.input.shift = true;
      if (e.code === 'Space') {
        e.preventDefault();
        if (this.dialogue.open) { this.dialogue.advance(); return; }
        if (this.fishing.state === 'reeling') this.input.space = true;
        else if (!e.repeat) this.input.jump = true;
      }
      if (e.repeat) return;
      if (e.code === 'KeyE') this.interact();
      if (e.code === 'Escape') {
        if (this.dialogue.open) this.dialogue.close();
        else if (this.ui.anyPanelOpen()) { for (const k of Object.keys(this.ui.panels)) this.ui.togglePanel(k, false); }
        else this.ui.togglePanel('menu', true);
      }
      if (e.code === 'KeyB') this.ui.togglePanel('backpack');
      if (e.code === 'KeyN') this.ui.togglePanel('dex');
      if (e.code === 'KeyH') this.ui.togglePanel('help');
      if (e.code === 'Enter' && this.dialogue.open) this.dialogue.advance();
      const m = e.code.match(/^Digit([1-9])$/);
      if (m && !this.dialogue.open) this.selectSlot(parseInt(m[1], 10));
    });
    window.addEventListener('keyup', (e) => {
      if (keyMap[e.code]) this.input[keyMap[e.code]] = false;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.input.shift = false;
      if (e.code === 'Space') this.input.space = false;
    });
    window.addEventListener('blur', () => { for (const k of Object.keys(this.input)) this.input[k] = false; this.fishing.holding = false; });
    this.renderer.domElement.addEventListener('mousedown', (e) => {
      if (!this.started || e.button !== 0) return;
      this.sound.init();
      if (this.dialogue.open || this.ui.anyPanelOpen() || this.nameModal.isOpen) return;
      if (this.fishing.equipped) this.fishing.mouseDown();
    });
    window.addEventListener('mouseup', (e) => { if (e.button === 0) this.fishing.mouseUp(); });

    document.querySelector('#btnBag').onclick = () => this.ui.togglePanel('backpack');
    document.querySelector('#btnDex').onclick = () => this.ui.togglePanel('dex');
    document.querySelector('#btnHelp').onclick = () => this.ui.togglePanel('help');
    // ---- pause / exit menu
    const q = (s) => document.querySelector(s);
    q('#btnMenu').onclick = () => this.ui.togglePanel('menu');
    q('#mResume').onclick = () => this.ui.togglePanel('menu', false);
    q('#mHelp').onclick = () => this.ui.togglePanel('help', true);
    q('#mTitle').onclick = () => this.backToTitle();
    q('#mQuit').onclick = () => this.quitGame();
    q('#qsBack').onclick = () => q('#quitScreen').classList.add('hidden'); // back to the title screen
    document.querySelector('#btnStart').onclick = () => this.start();
    document.querySelector('#btnReset').onclick = () => {
      if (confirm('確定要清除存檔、從頭開始嗎？')) { resetState(); this.noSave = true; location.reload(); }
    };
    window.addEventListener('beforeunload', () => { if (!this.noSave) this.save(); });
  }

  start() {
    this.started = true;
    this.sound.init();
    document.querySelector('#start').classList.add('hidden');
    this.zoneKey = null; // force banner
    if (!state.quests.tutorial) setTimeout(() => this.ui.toast('👉 去找頭上有「!」的導師・阿凱 說話吧！', '#ffd75e'), 1500);
  }

  playerName() { return state.playerName || '新手釣客'; }

  applyPlayerName(name) {
    this.player.setName(name);
    const tag = document.querySelector('#playerNameTag');
    tag.textContent = `👤 ${name}`;
    tag.classList.toggle('hidden', !name);
  }

  setPlayerName(name) {
    const first = !state.playerName;
    state.playerName = name;
    saveState();
    this.applyPlayerName(name);
    this.sound.jingle(3);
    this.ui.toast(first ? `🎉 從今天起你就是「${name}」了！` : `✏️ 名字已改成「${name}」`, '#9fe6ff');
  }

  /** Save and return to the title screen. */
  backToTitle() {
    this.ui.togglePanel('menu', false);
    if (this.dialogue.open) this.dialogue.close();
    this.fishing.equip(false);
    this.player.holdFish(null);
    this.ui.selected = 0;
    this.ui.renderHotbar();
    for (const k of Object.keys(this.input)) this.input[k] = false;
    this.save();
    this.started = false;
    document.querySelector('#start').classList.remove('hidden');
  }

  /** Save and leave. Browsers only let scripts close windows they opened, so show a goodbye screen otherwise. */
  quitGame() {
    this.backToTitle();
    document.querySelector('#quitScreen').classList.remove('hidden');
    try { window.close(); } catch (e) { /* not allowed */ }
  }

  save() {
    state.pos = this.player.boat ? null : { x: this.player.pos.x, z: this.player.pos.z, yaw: this.player.yaw };
    state.time = this.sky.t;
    saveState();
  }

  // ---------------------------------------------------------------- hotbar
  selectSlot(n) {
    const ui = this.ui;
    if (n === 0 || (n === ui.selected && n !== 0)) {
      this.fishing.equip(false);
      this.player.holdFish(null);
      ui.selected = 0;
      ui.renderHotbar();
      return;
    }
    if (n === 1) {
      if (this.player.swimming) { ui.toast('游泳時不能拿釣竿！', '#ffb3b3'); return; }
      this.player.holdFish(null);
      this.fishing.equip(true);
      ui.selected = 1;
      this.quests.onEvent('equip');
    } else {
      const item = state.inventory[n - 2];
      if (!item) return;
      this.fishing.equip(false);
      this.player.holdFish(item);
      ui.selected = n;
    }
    ui.renderHotbar();
  }

  onInventoryChanged() {
    const held = this.player.heldFish;
    if (held) {
      const idx = state.inventory.indexOf(held);
      if (idx < 0) { this.player.holdFish(null); this.ui.selected = this.fishing.equipped ? 1 : 0; }
      else if (idx >= 8) { state.inventory.splice(idx, 1); state.inventory.unshift(held); this.ui.selected = 2; }
      else this.ui.selected = idx + 2;
    }
    this.ui.renderHotbar();
    if (!this.ui.panels.backpack.classList.contains('hidden')) this.ui.renderBackpack();
    this.quests.render();
  }

  // ---------------------------------------------------------------- interaction
  findInteract() {
    if (this.fishing.active) return null;
    const p = this.player.pos;
    if (this.player.boat) return { type: 'exitBoat', label: '下船' };
    let best = null, bd = 4.2;
    for (const n of this.npcs) {
      const d = Math.hypot(n.pos.x - p.x, n.pos.z - p.z);
      if (d < bd && Math.abs(n.pos.y - p.y) < 3) { bd = d; best = n; }
    }
    if (best) return { type: 'npc', npc: best, label: `交談・${best.name}` };
    if (this.boat.spawned && this.boat.pos.distanceTo(p) < 4.8) return { type: 'enterBoat', label: '上船' };
    return null;
  }

  interact() {
    if (this.dialogue.open) { this.dialogue.advance(); return; }
    const t = this.interactTarget;
    if (!t) return;
    this.sound.click();
    if (t.type === 'npc') t.npc.talk(this, t.npc);
    else if (t.type === 'enterBoat') this.enterBoat();
    else if (t.type === 'exitBoat') this.exitBoat();
  }

  enterBoat() {
    if (this.fishing.equipped) this.selectSlot(0);
    this.player.boat = this.boat;
    this.player.swimming = false;
    this.ui.toast('W/S 前進後退・A/D 轉向・Shift 全速・E 下船', '#bfe9ff');
  }

  exitBoat() {
    const b = this.boat;
    let best = null, bd = Infinity;
    for (let r = 2.5; r <= 7; r += 1.5) {
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        const x = b.pos.x + Math.cos(a) * r, z = b.pos.z + Math.sin(a) * r;
        const gh = groundHeight(x, z, 3);
        if (gh > 0.2) { const d = r; if (d < bd) { bd = d; best = { x, z }; } }
      }
      if (best) break;
    }
    this.player.boat = null;
    this.sound.setEngine(false, 0);
    if (best) {
      this.player.teleport(best.x, best.z, this.player.yaw);
    } else {
      const side = new THREE.Vector3(b.forward().z, 0, -b.forward().x).multiplyScalar(2.2);
      this.player.pos.set(b.pos.x + side.x, -1.3, b.pos.z + side.z);
      this.player.vel.set(0, 0, 0);
    }
  }

  spawnBoatAt(key) {
    const s = this.world.boatSpawns[key];
    if (this.player.boat) this.exitBoat();
    this.boat.spawn(s.x, s.z, s.heading);
  }

  onDialogue(open, npc) {
    if (npc) npc.talking = open;
    document.body.classList.toggle('in-dialogue', open);
    if (open && npc) {
      const mid = this.player.pos.clone().lerp(npc.pos, 0.5).add(new THREE.Vector3(0, 1.8, 0));
      this.cam.override = { pos: mid, dist: 9 };
      this.player.yaw = Math.atan2(npc.pos.x - this.player.pos.x, npc.pos.z - this.player.pos.z);
    } else {
      this.cam.override = null;
    }
  }

  worldToScreen(v) {
    const p = v.clone().project(this.camera);
    return { x: (p.x * 0.5 + 0.5) * window.innerWidth, y: (-p.y * 0.5 + 0.5) * window.innerHeight, behind: p.z > 1 };
  }

  // ---------------------------------------------------------------- per frame
  updateZone(dt) {
    this.zoneTimer -= dt;
    if (this.zoneTimer > 0) return;
    this.zoneTimer = 0.4;
    const z = zoneAt(this.player.pos.x, this.player.pos.z) || OCEAN;
    if (z.id !== this.zoneKey) {
      const first = this.zoneKey === null;
      this.zoneKey = z.id;
      if (this.started) {
        this.ui.showZone(z.name, z.subtitle);
        this.sound.chime();
        if (!first || z.id !== 'ocean') this.quests.onEvent('arrive', { island: z.id });
      }
    }
  }

  /** Real-world clock (1 second = 1 second) + countdown to the next in-game day/night change. */
  updateClock() {
    const d = new Date();
    const p2 = (n) => String(n).padStart(2, '0');
    const night = this.sky.isNight();
    // in-game night starts at 18:36 (t=0.775) and ends at 05:36 (t≈0.2333)
    const target = night ? 5.6 / 24 : 18.6 / 24;
    let frac = target - this.sky.t;
    if (frac < 0) frac += 1;
    const secs = Math.ceil(frac * DAY_LENGTH);
    const sub = `${night ? '距離天亮' : '距離天黑'} ${Math.floor(secs / 60)}:${p2(secs % 60)}`;
    this.ui.setClock(`${p2(d.getHours())}:${p2(d.getMinutes())}:${p2(d.getSeconds())}`, night, sub);
  }

  updateWaypoint() {
    let target = this.quests.currentTarget();
    if (!target && this.quests.canStart('tutorial')) target = 'tutor';
    const npc = target && this.npcs.find((n) => n.id === target);
    if (!npc || this.dialogue.open) { this.ui.waypoint(false); return; }
    const dist = npc.pos.distanceTo(this.player.pos);
    if (dist < 8) { this.ui.waypoint(false); return; }
    const s = this.worldToScreen(npc.pos.clone().add(new THREE.Vector3(0, 4.2, 0)));
    const W = window.innerWidth, H = window.innerHeight;
    // keep clear of the hotbar / rod panel (bottom) and quest list / money (top)
    const mx = 110, top = 120, bottom = 210;
    const cy = (top + (H - bottom)) / 2, hh = ((H - bottom) - top) / 2, hw = W / 2 - mx;
    let { x, y } = s;
    let angle = null;
    if (s.behind || x < mx || x > W - mx || y < top || y > H - bottom) {
      let dx = x - W / 2, dy = y - cy;
      if (s.behind) { dx = -dx; dy = -dy; }
      const k = Math.min(hw / Math.abs(dx || 1e-3), hh / Math.abs(dy || 1e-3));
      x = W / 2 + dx * k; y = cy + dy * k;
      angle = Math.atan2(dy, dx) + Math.PI / 2;
    }
    this.ui.waypoint(true, x, y, `${npc.name}・${Math.round(dist)}m`, angle);
  }

  loop() {
    requestAnimationFrame(this.loop);
    const dt = Math.min(0.05, this.clock.getDelta());
    this.time += dt;
    const t = this.time;
    const blocked = !this.started || this.dialogue.open || this.ui.anyPanelOpen() || this.nameModal.isOpen;

    this.sky.update(dt, this.player.pos, t);
    const night = this.sky.night;

    this.boat.update(dt, t, blocked ? {} : this.input, this.player.boat === this.boat);
    this.player.update(dt, t, this.input, blocked);
    this.input.jump = false;
    this.fishing.update(dt, t);
    for (const n of this.npcs) n.update(dt, t, this.player.pos);
    this.dialogue.update(dt);

    if (!this.started) this.cam.yaw += dt * 0.05;
    this.cam.update(dt, this.player.pos.clone().add(new THREE.Vector3(0, 1.8, 0)));
    this.water.update(t, this.camera, this.sky);
    this.fx.update(dt);
    this.ambient.update(dt, t, this.player.pos, night);
    for (const fn of animated) fn(dt, t, night);
    for (const nl of nightLights) nl.light.intensity = nl.base * night * (nl.flicker ? 0.75 + 0.25 * Math.sin(t * 13) * Math.sin(t * 7.3) : 1) + (nl.flicker ? nl.base * 0.25 : 0);
    M.window.emissiveIntensity = night * 1.6;
    M.lampGlass.emissiveIntensity = 0.2 + night * 3;

    this.updateZone(dt);
    this.updateClock();
    this.interactTarget = this.started && !this.dialogue.open ? this.findInteract() : null;
    this.ui.setInteract(this.interactTarget ? this.interactTarget.label : null);
    this.updateWaypoint();
    const nearShore = terrainHeight(this.player.pos.x, this.player.pos.z) > -6;
    this.sound.update(dt, night, nearShore);

    this.saveTimer += dt;
    if (this.saveTimer > 10 && this.started) { this.saveTimer = 0; this.save(); }

    this.sky.updateEnv(this.renderer, dt);
    this.composer.render();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  try {
    window.game = new Game();
  } catch (err) {
    console.error(err);
    document.body.insertAdjacentHTML('beforeend', `<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#111;color:#fff;font-size:18px;z-index:99;padding:40px;text-align:center">遊戲載入失敗：${err.message}<br>請使用支援 WebGL 的瀏覽器（Chrome / Edge / Firefox）。</div>`);
  }
});
