/*
Copyright 2019 Myles Borins

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { init, stepOscillators } from './audio.mjs';
import { initScroll, stepScroll } from './infinite-scroll.mjs'

let audioContext;

const start = document.getElementById('start');

let lastY = 0;
let maxY = 0;
let clicks = 0;


function firstClick() {
  document.body.style['background-color'] = 'rgba(0, 0, 0, 0.5)';
  start.style['width'] = '40%';
  start.style['margin-left'] = '30%';
  start.style['font-size'] = '20px';
  start.textContent = '⚠️ Are you sure? ⚠️'
  clicks++;
  initScroll();
}

function secondClick() {
  document.body.style['background-color'] = '';
  start.style['display'] = 'none';
  audioContext = init();
  clicks++
}

start.onclick = function onclick() {
  if (!clicks) firstClick();
  else if (clicks === 1) secondClick();  
}

document.body.onscroll = function onscroll() {
  if (!audioContext) return;
  const diff = window.scrollY - lastY;
  lastY = window.scrollY;
  if (lastY > maxY) {
    maxY = lastY;
    stepScroll();
  }
  stepOscillators(diff);
}
