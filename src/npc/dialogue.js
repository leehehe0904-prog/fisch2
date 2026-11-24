/**
 * Bottom dialogue box with typewriter text and option buttons.
 * run(npc, steps): steps are strings (click to continue) or
 *   { text, options: [{ label, cls, action: () => void }] }
 */
export class Dialogue {
  constructor(game) {
    this.g = game;
    this.el = document.querySelector('#dialogue');
    this.nameEl = this.el.querySelector('.dlg-name');
    this.textEl = this.el.querySelector('.dlg-text');
    this.nextEl = this.el.querySelector('.dlg-next');
    this.optEl = this.el.querySelector('.dlg-options');
    this.box = this.el.querySelector('.dlg-box');
    this.open = false;
    this.steps = [];
    this.idx = 0;
    this.typing = false;
    this.full = '';
    this.shown = 0;
    this.box.addEventListener('mousedown', (e) => { e.stopPropagation(); this.advance(); });
  }

  run(npc, steps) {
    this.npc = npc;
    this.steps = steps;
    this.idx = 0;
    this.open = true;
    this.el.classList.remove('hidden');
    this.nameEl.textContent = npc ? (npc.title ? `${npc.title}・${npc.name}` : npc.name) : '';
    this.g.onDialogue(true, npc);
    this.showStep();
  }

  showStep() {
    const s = this.steps[this.idx];
    if (s === undefined) { this.close(); return; }
    const node = typeof s === 'string' ? { text: s } : s;
    this.node = node;
    this.full = node.text;
    this.shown = 0;
    this.typing = true;
    this.textEl.textContent = '';
    this.optEl.innerHTML = '';
    this.nextEl.style.visibility = 'hidden';
    // retrigger pop animation
    this.box.style.animation = 'none'; void this.box.offsetWidth; this.box.style.animation = '';
  }

  finishTyping() {
    this.typing = false;
    this.shown = this.full.length;
    this.textEl.textContent = this.full;
    const node = this.node;
    if (node.options) {
      this.nextEl.style.visibility = 'hidden';
      this.optEl.innerHTML = '';
      node.options.forEach((o, i) => {
        const b = document.createElement('button');
        b.textContent = o.label;
        if (o.cls) b.className = o.cls;
        b.style.animationDelay = `${i * 0.05}s`;
        b.onmousedown = (e) => {
          e.stopPropagation();
          this.g.sound.click();
          if (o.action) o.action(); else this.close();
        };
        this.optEl.appendChild(b);
      });
    } else {
      this.nextEl.style.visibility = 'visible';
    }
  }

  advance() {
    if (!this.open) return;
    if (this.typing) { this.finishTyping(); return; }
    if (this.node.options) return;
    this.g.sound.click();
    this.idx++;
    this.showStep();
  }

  close() {
    if (!this.open) return;
    this.open = false;
    this.el.classList.add('hidden');
    this.optEl.innerHTML = '';
    this.g.onDialogue(false, this.npc);
  }

  update(dt) {
    if (!this.open || !this.typing) return;
    const before = Math.floor(this.shown);
    this.shown += dt * 38;
    const n = Math.floor(this.shown);
    if (n !== before) {
      this.textEl.textContent = this.full.slice(0, n);
      if (n % 2 === 0 && this.full[n - 1] && this.full[n - 1] !== ' ') this.g.sound.talk();
    }
    if (this.shown >= this.full.length) this.finishTyping();
  }
}
