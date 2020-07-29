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

let audioContext;

const start = document.getElementById('start');
let clicked = false;
let lastY = 0;

start.onclick = function onclick() {
  if (clicked) return;
  clicked = true;
  audioContext = init();
  start.setAttribute('style', 'display: none;')
}

document.body.onscroll = function onscroll() {
  if (!audioContext) return;
  const diff = window.scrollY - lastY;
  lastY = window.scrollY;
  stepOscillators(diff);
}
