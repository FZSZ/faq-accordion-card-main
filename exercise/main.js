const qS = document.querySelectorAll('.question');
const aS = document.querySelectorAll('.answer');

for (let i = 0; i < qS.length; i++) {
  qS[i].addEventListener('click', () => {
    aS[i].classList.toggle('active');
    qS[i].classList.toggle('active');
  });

  document.addEventListener('click', e => {
    if (e.target !== qS[i]
      && e.target !== aS[i]) {
        aS[i].classList.remove('active');
        qS[i].classList.remove('active');
      };
  });
};