export function setData() {
  const txt = `This is a simple project demonstrating the usage of various JavaScript functionalities and concepts.<nxL>
This project was build using:<nxL>
HTML 5<nxL>
CSS 3<nxL>
BootStrap v5.2.3<nxL>
JavaSCript ES6<nxL>`;
  const outputDiv = document.getElementById("about-text");
  return [txt, outputDiv];
}

function typeText() {
  const res = setData();
  const txt = res[0];
  const outputDiv = res[1];
  const splittedTxt = txt.split("<nxL>");
  splittedTxt.forEach(() => {
    const p = document.createElement("p");
    outputDiv.appendChild(p);
  });
  const allParas = outputDiv.querySelectorAll("p");
  let i = 0;
  let currentPara = 0;
  const timerId = setInterval(() => {
    allParas[currentPara].innerHTML += splittedTxt[currentPara].charAt(i);
    i++;
    if (i === splittedTxt[currentPara].length) {
      currentPara++;
      i = 0;
      if (currentPara === splittedTxt.length) {
        clearInterval(timerId);
      }
    }
  }, 40);
}

window.onload = function () {
  typeText();
};
