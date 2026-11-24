// All sounds are synthesized with WebAudio – no asset files needed.
export class Sound {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.6;
    this.master.connect(this.ctx.destination);
    // white noise buffer
    const len = this.ctx.sampleRate * 2;
    this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.startAmbience();
    this.startEngine();
  }

  get t() { return this.ctx.currentTime; }

  noiseSrc() {
    const s = this.ctx.createBufferSource();
    s.buffer = this.noise; s.loop = true;
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    return s;
  }

  env(gainNode, a, peak, dec) {
    const g = gainNode.gain, t = this.t;
    g.cancelScheduledValues(t);
    g.setValueAtTime(0.0001, t);
    g.linearRampToValueAtTime(peak, t + a);
    g.exponentialRampToValueAtTime(0.0001, t + a + dec);
  }

  startAmbience() {
    const c = this.ctx;
    // ocean surf: noise → lowpass, amplitude LFO
    const n = this.noiseSrc();
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520;
    const g = c.createGain(); g.gain.value = 0.05;
    const lfo = c.createOscillator(); lfo.frequency.value = 0.11;
    const lfoG = c.createGain(); lfoG.gain.value = 0.035;
    lfo.connect(lfoG); lfoG.connect(g.gain);
    n.connect(lp); lp.connect(g); g.connect(this.master);
    n.start(); lfo.start();
    this.oceanGain = g;
    // wind
    const n2 = this.noiseSrc();
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 0.6;
    const g2 = c.createGain(); g2.gain.value = 0.012;
    n2.connect(bp); bp.connect(g2); g2.connect(this.master);
    n2.start();
    this.windGain = g2;
    this.nextCritter = 0;
  }

  startEngine() {
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 40;
    const o2 = c.createOscillator(); o2.type = 'square'; o2.frequency.value = 20;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 300;
    const g = c.createGain(); g.gain.value = 0;
    o.connect(lp); o2.connect(lp); lp.connect(g); g.connect(this.master);
    o.start(); o2.start();
    this.engine = { o, o2, g, lp };
  }

  setEngine(on, speed01) {
    if (!this.ctx) return;
    const e = this.engine, t = this.t;
    e.g.gain.setTargetAtTime(on ? 0.05 + speed01 * 0.06 : 0, t, 0.15);
    e.o.frequency.setTargetAtTime(38 + speed01 * 60, t, 0.2);
    e.o2.frequency.setTargetAtTime(19 + speed01 * 30, t, 0.2);
    e.lp.frequency.setTargetAtTime(220 + speed01 * 600, t, 0.2);
  }

  /** call every frame: ambience reacts to night + birds / crickets */
  update(dt, night, nearShore) {
    if (!this.ctx) return;
    this.oceanGain.gain.setTargetAtTime(nearShore ? 0.06 : 0.04, this.t, 1);
    this.nextCritter -= dt;
    if (this.nextCritter <= 0) {
      this.nextCritter = 1.5 + Math.random() * 5;
      if (night > 0.6) this.cricket(); else if (Math.random() < 0.6) this.gull();
    }
  }

  cricket() {
    const c = this.ctx;
    for (let k = 0; k < 3; k++) {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = 4200 + Math.random() * 300;
      const g = c.createGain(); g.gain.value = 0;
      o.connect(g); g.connect(this.master);
      const t0 = this.t + k * 0.12;
      for (let i = 0; i < 4; i++) {
        g.gain.setValueAtTime(0.0001, t0 + i * 0.025);
        g.gain.linearRampToValueAtTime(0.012, t0 + i * 0.025 + 0.005);
        g.gain.linearRampToValueAtTime(0.0001, t0 + i * 0.025 + 0.02);
      }
      o.start(t0); o.stop(t0 + 0.15);
    }
  }

  gull() {
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'triangle';
    const g = c.createGain(); g.gain.value = 0;
    o.connect(g); g.connect(this.master);
    const t = this.t, f = 1100 + Math.random() * 400;
    for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i++) {
      const s = t + i * 0.22;
      o.frequency.setValueAtTime(f, s);
      o.frequency.exponentialRampToValueAtTime(f * 1.45, s + 0.06);
      o.frequency.exponentialRampToValueAtTime(f * 0.8, s + 0.18);
      g.gain.setValueAtTime(0.0001, s);
      g.gain.linearRampToValueAtTime(0.018, s + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, s + 0.19);
    }
    o.start(t); o.stop(t + 1.2);
  }

  splash(strength = 1) {
    if (!this.ctx) return;
    const c = this.ctx;
    const n = this.noiseSrc();
    const bp = c.createBiquadFilter(); bp.type = 'lowpass';
    bp.frequency.setValueAtTime(3000, this.t);
    bp.frequency.exponentialRampToValueAtTime(400, this.t + 0.4 + strength * 0.2);
    const g = c.createGain();
    n.connect(bp); bp.connect(g); g.connect(this.master);
    this.env(g, 0.01, 0.25 * Math.min(1.5, strength), 0.35 + strength * 0.25);
    n.start(); n.stop(this.t + 1.2);
    this.plop(0.6 * strength);
  }

  plop(vol = 0.5) {
    if (!this.ctx) return;
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(700, this.t);
    o.frequency.exponentialRampToValueAtTime(140, this.t + 0.12);
    const g = c.createGain();
    o.connect(g); g.connect(this.master);
    this.env(g, 0.005, 0.2 * vol, 0.15);
    o.start(); o.stop(this.t + 0.3);
  }

  whoosh() {
    if (!this.ctx) return;
    const c = this.ctx;
    const n = this.noiseSrc();
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.5;
    bp.frequency.setValueAtTime(600, this.t);
    bp.frequency.exponentialRampToValueAtTime(2600, this.t + 0.25);
    const g = c.createGain();
    n.connect(bp); bp.connect(g); g.connect(this.master);
    this.env(g, 0.08, 0.15, 0.25);
    n.start(); n.stop(this.t + 0.5);
    // reel unspooling buzz
    const o = c.createOscillator(); o.type = 'square'; o.frequency.value = 55;
    const g2 = c.createGain(); const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1500;
    o.connect(lp); lp.connect(g2); g2.connect(this.master);
    this.env(g2, 0.02, 0.03, 0.7);
    o.frequency.exponentialRampToValueAtTime(25, this.t + 0.8);
    o.start(); o.stop(this.t + 0.9);
  }

  bite() {
    if (!this.ctx) return;
    this.splash(0.7);
    const c = this.ctx;
    [880, 1175].forEach((f, i) => {
      const o = c.createOscillator(); o.type = 'square'; o.frequency.value = f;
      const g = c.createGain(); o.connect(g); g.connect(this.master);
      const t = this.t + i * 0.08;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.06, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      o.start(t); o.stop(t + 0.15);
    });
  }

  shake() {
    if (!this.ctx) return;
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(500 + Math.random() * 200, this.t);
    o.frequency.exponentialRampToValueAtTime(1200, this.t + 0.06);
    const g = c.createGain(); o.connect(g); g.connect(this.master);
    this.env(g, 0.005, 0.12, 0.1);
    o.start(); o.stop(this.t + 0.15);
    this.plop(0.4);
  }

  tick() {
    if (!this.ctx) return;
    const c = this.ctx;
    const n = this.noiseSrc();
    const hp = c.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 3000;
    const g = c.createGain(); n.connect(hp); hp.connect(g); g.connect(this.master);
    this.env(g, 0.001, 0.08, 0.025);
    n.start(); n.stop(this.t + 0.05);
  }

  strain(level) {
    if (!this.ctx) return;
    if (!this.strainNode) {
      const c = this.ctx;
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 180;
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 4;
      const g = c.createGain(); g.gain.value = 0;
      o.connect(bp); bp.connect(g); g.connect(this.master); o.start();
      this.strainNode = { o, g };
    }
    this.strainNode.g.gain.setTargetAtTime(level * 0.03, this.t, 0.05);
    this.strainNode.o.frequency.setTargetAtTime(160 + level * 120 + Math.random() * 20, this.t, 0.05);
  }

  snap() {
    if (!this.ctx) return;
    const c = this.ctx;
    const n = this.noiseSrc();
    const hp = c.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1500;
    const g = c.createGain(); n.connect(hp); hp.connect(g); g.connect(this.master);
    this.env(g, 0.001, 0.3, 0.12);
    n.start(); n.stop(this.t + 0.2);
    const o = c.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(400, this.t); o.frequency.exponentialRampToValueAtTime(90, this.t + 0.4);
    const g2 = c.createGain(); o.connect(g2); g2.connect(this.master);
    this.env(g2, 0.005, 0.15, 0.4);
    o.start(); o.stop(this.t + 0.5);
  }

  jingle(tier = 1) {
    if (!this.ctx) return;
    const c = this.ctx;
    const scale = [523.25, 659.25, 783.99, 1046.5, 1318.5, 1568, 2093];
    const notes = Math.min(scale.length, 3 + tier);
    for (let i = 0; i < notes; i++) {
      const o = c.createOscillator(); o.type = tier >= 4 ? 'triangle' : 'sine';
      o.frequency.value = scale[i];
      const g = c.createGain(); o.connect(g); g.connect(this.master);
      const t = this.t + i * 0.085;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.11, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
      o.start(t); o.stop(t + 0.55);
    }
    if (tier >= 5) {
      // shimmering chord for legendary+
      [1046.5, 1318.5, 1568].forEach((f) => {
        const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
        const g = c.createGain(); o.connect(g); g.connect(this.master);
        const t = this.t + notes * 0.085;
        g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.06, t + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
        o.start(t); o.stop(t + 1.7);
      });
    }
  }

  coin() {
    if (!this.ctx) return;
    const c = this.ctx;
    [1318.5, 1975.5].forEach((f, i) => {
      const o = c.createOscillator(); o.type = 'square'; o.frequency.value = f;
      const g = c.createGain(); o.connect(g); g.connect(this.master);
      const t = this.t + i * 0.07;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.05, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
      o.start(t); o.stop(t + 0.3);
    });
  }

  click() {
    if (!this.ctx) return;
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = 900;
    const g = c.createGain(); o.connect(g); g.connect(this.master);
    this.env(g, 0.002, 0.06, 0.05);
    o.start(); o.stop(this.t + 0.08);
  }

  talk() {
    if (!this.ctx) return;
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'square'; o.frequency.value = 300 + Math.random() * 160;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1200;
    const g = c.createGain(); o.connect(lp); lp.connect(g); g.connect(this.master);
    this.env(g, 0.002, 0.025, 0.04);
    o.start(); o.stop(this.t + 0.06);
  }

  chime() {
    if (!this.ctx) return;
    const c = this.ctx;
    [659.25, 987.77, 1318.5].forEach((f, i) => {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = c.createGain(); o.connect(g); g.connect(this.master);
      const t = this.t + i * 0.12;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.07, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
      o.start(t); o.stop(t + 1.3);
    });
  }
}
