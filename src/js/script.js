const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Авто расчет прогресса
const counters = document.querySelectorAll('.progress__block-percent'),
      lines = document.querySelectorAll('.progress__block-linebar span');

console.log(counters);