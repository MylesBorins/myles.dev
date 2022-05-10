/*
Copyright 2021 Myles Borins
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
const content = document.getElementById('content');

let count = 0;

function createParagraph(content) {
  const p = document.createElement('p');
  const node = document.createTextNode(content);
  p.appendChild(node);
  return p;
}

function step(i, maxWidth = 50) {
  const halfWidth = Math.floor((maxWidth / 2));
  const j = i % maxWidth;
  const k = i % halfWidth;
  if (j === k) {
    return (new Array(k)).fill('-').join('');
  }
  else {
    return (new Array(halfWidth - k)).fill('-').join('');
  }
}

function stepScroll () {
  const text = `\<${step(count)}\>`;
  content.append(createParagraph(text));
  count++;
}

function initScroll () {
  content.style.display = 'grid';
  for (let i = 0; i <= 50; i ++) {
    stepScroll();
  }
}

export {
  initScroll,
  stepScroll
}