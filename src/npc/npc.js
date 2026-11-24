import * as THREE from 'three';
import { createCharacter } from '../player/character.js';
import { makeLabelSprite, makeTextCanvas } from '../world/props.js';
import { angleDamp } from '../core/noise.js';
import { addCircle } from '../world/collision.js';

const markerTex = {};
function marker(ch) {
  if (!markerTex[ch]) {
    markerTex[ch] = makeTextCanvas([{ text: ch, font: 'bold 110px "Arial Black", sans-serif', color: ch === '!' ? '#ffd23f' : '#7dff8a', strokeW: 14 }], { w: 128, h: 128, stroke: '#2a1a00' });
  }
  return markerTex[ch];
}

export class NPC {
  constructor(game, def) {
    this.g = game;
    this.def = def;
    this.id = def.id;
    this.name = def.name;
    this.title = def.title;
    this.talk = def.talk;
    this.rig = createCharacter(def.look || {});
    this.pos = new THREE.Vector3(def.x, def.y, def.z);
    this.baseYaw = def.yaw || 0;
    this.yaw = this.baseYaw;
    this.rig.root.position.copy(this.pos);
    game.scene.add(this.rig.root);
    this.label = makeLabelSprite(def.name, def.title);
    this.label.position.set(0, 3.55, 0);
    this.rig.root.add(this.label);
    this.marker = new THREE.Sprite(new THREE.SpriteMaterial({ map: marker('!'), transparent: true, depthWrite: false, fog: false }));
    this.marker.scale.set(1.1, 1.1, 1);
    this.marker.position.set(0, 4.5, 0);
    this.marker.visible = false;
    this.marker.renderOrder = 11;
    this.rig.root.add(this.marker);
    this.markerCh = null;
    this.talking = false;
    this.phase = Math.random() * 10;
    addCircle(def.x, def.z, 0.55, def.y + 3, { boatBlock: false });
    if (def.prop) def.prop(this);
  }

  update(dt, time, playerPos) {
    const d = this.pos.distanceTo(playerPos);
    let targetYaw = this.baseYaw;
    if (d < 9 || this.talking) targetYaw = Math.atan2(playerPos.x - this.pos.x, playerPos.z - this.pos.z);
    this.yaw = angleDamp(this.yaw, targetYaw, 5, dt);
    this.rig.root.rotation.y = this.yaw;
    this.rig.animate(dt, time + this.phase, 0, this.def.sit ? 'sit' : 'ground');
    if (this.talking) {
      // gesture while talking
      this.rig.armR.rotation.x = -0.6 + Math.sin(time * 5) * 0.25;
      this.rig.armR.rotation.z = -0.3;
      this.rig.neck.rotation.x = Math.sin(time * 6) * 0.05;
    } else if (this.def.wave && d < 14) {
      this.rig.armR.rotation.x = -2.6;
      this.rig.armR.rotation.z = -0.3 + Math.sin(time * 8) * 0.35;
    }
    const m = this.g.quests.markerFor(this.id);
    if (m !== this.markerCh) {
      this.markerCh = m;
      this.marker.visible = !!m;
      if (m) this.marker.material.map = marker(m);
      this.marker.material.needsUpdate = true;
    }
    if (m) {
      this.marker.position.y = 4.5 + Math.sin(time * 3) * 0.15;
      const s = 1.1 + Math.sin(time * 6) * 0.05;
      this.marker.scale.set(s, s, 1);
    }
    // labels are readable only when close-ish
    this.label.visible = d < 45;
  }
}
