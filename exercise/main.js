// window.onload = () => {
//   let obj = document.querySelector('.pattern-desktop');
//   let svgE = obj.contentDocument;
//   let svg = svgE.querySelector('svg');
//   let g = svgE.querySelector('g');
//   let path = svgE.querySelectorAll('path');
// };

const qS = document.querySelectorAll('.question');
const aS = document.querySelectorAll('.answers');

for (let i = 0; i < qS.length; i++) {
  qS[i].addEventListener('click', () => {
    aS[i].classList.toggle('active');
    qS[i].classList.toggle('active');
  });

  document.addEventListener('click', e => {
    if (e.target !== qS[i]) {
      aS[i].classList.remove('active');
      qS[i].classList.remove('active');
    };
  });
};