import { cleanPlayerName } from '../state.js';

const PREFIX = ['海風', '浪花', '月光', '小浮標', '黃金', '深海', '夕陽', '星空', '暴風', '珊瑚', '鯖魚', '鮪魚'];
const SUFFIX = ['釣客', '漁夫', '船長', '獵人', '達人', '小子', '大師', '王'];

/** Modal where the player types (or rolls) their name. */
export class NameModal {
  constructor(game) {
    this.g = game;
    this.el = document.querySelector('#nameModal');
    this.input = document.querySelector('#nmInput');
    this.preview = document.querySelector('#nmPreview');
    this.error = this.el.querySelector('.nm-error');
    this.isOpen = false;
    this.input.addEventListener('input', () => this.refresh());
    this.input.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'Enter' && !e.isComposing) this.confirm();
      if (e.key === 'Escape') this.cancel();
    });
    document.querySelector('#nmDice').onclick = () => {
      const r = (a) => a[Math.floor(Math.random() * a.length)];
      this.input.value = `${r(PREFIX)}${r(SUFFIX)}${Math.floor(Math.random() * 90 + 10)}`;
      this.g.sound.click();
      this.refresh();
      this.input.focus();
    };
    document.querySelector('#nmOk').onclick = () => this.confirm();
    document.querySelector('#nmCancel').onclick = () => this.cancel();
  }

  open(current, onDone, onCancel) {
    this.onDone = onDone;
    this.onCancel = onCancel;
    this.isOpen = true;
    this.input.value = current || '';
    this.el.classList.remove('hidden');
    this.refresh(true);
    setTimeout(() => this.input.focus(), 50);
  }

  refresh(silent = false) {
    const { ok, name, error } = cleanPlayerName(this.input.value);
    this.preview.textContent = name || '？？？';
    this.error.textContent = ok || silent || !this.input.value ? '' : error;
    return ok;
  }

  confirm() {
    const { ok, name, error } = cleanPlayerName(this.input.value);
    if (!ok) { this.error.textContent = error; this.input.focus(); return; }
    this.close();
    this.onDone && this.onDone(name);
  }

  cancel() {
    this.close();
    this.onCancel && this.onCancel();
  }

  close() {
    this.isOpen = false;
    this.el.classList.add('hidden');
    this.input.blur();
  }
}
