let audio;

const start = document.getElementById('start');
let clicked = false;
let lastY = 0;

start.onclick = async function onclick() {
  if (clicked) return;
  clicked = true;
  audio = await import('./audio.mjs');
  audio.init();
  start.setAttribute('style', 'display: none;')
}

document.body.onscroll = function onscroll() {
  if (!audio) return;
  let diff = window.scrollY - lastY;
  lastY = window.scrollY;
  audio.stepOscillators(diff);
}
