import{init,stepOscillators}from"./audio.mjs";import{initScroll,stepScroll}from"./infinite-scroll.mjs";let audioContext;const start=document.getElementById("start");let lastY=0;let maxY=0;let clicks=0;function firstClick(){document.body.style["background-color"]="rgba(0, 0, 0, 0.5)";start.style["width"]="40%";start.style["margin-left"]="30%";start.style["font-size"]="20px";start.textContent="⚠️ Are you sure? ⚠️";clicks++;initScroll()}function secondClick(){document.body.style["background-color"]="";start.style["display"]="none";audioContext=init();clicks++}start.onclick=function onclick(){if(!clicks)firstClick();else if(clicks===1)secondClick()};document.body.onscroll=function onscroll(){if(!audioContext)return;const diff=window.scrollY-lastY;lastY=window.scrollY;if(lastY>maxY){maxY=lastY;stepScroll()}stepOscillators(diff)};