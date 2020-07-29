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
const oscillators = [];
const step = 0.1;

function makeOscillators(context, gain) {
  for (var i = 0; i < 10; i++) {
    var osc = context.createOscillator();
    osc.type = 'square';
    osc.frequency.value = 40 + i * 0.1111; // value in hertz
    osc.connect(gain);
    osc.start();
    oscillators.push(osc);
  }
}

function stepOscillators(steps=1) {
  oscillators.forEach((osc) => {
    osc.frequency.value = osc.frequency.value + (step * steps);
  });
}


function init() {
  var context = new (window.AudioContext || window.webkitAudioContext)();
  var gain = context.createGain();
  gain.gain.value = 0.6;
  gain.connect(context.destination)
  makeOscillators(context, gain);
  return context;
}

export {
  init,
  stepOscillators
}
