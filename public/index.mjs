import {
  init,
  stepOscillators
} from './audio.mjs';

const start = document.getElementById('start');
let clicked = false;
let lastY = 0;

start.onclick = function onclick() {
  if (clicked) return;
  clicked = true;
  init();
  start.setAttribute('style', 'display: none;')
}

document.body.onscroll = function onscroll() {
  let diff = window.scrollY - lastY;
  lastY = window.scrollY;
  stepOscillators(diff);
}
