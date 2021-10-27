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


$(document).ready(function(){
//Page Up

$(window).scroll(function () {
    if ($(this).scrollTop() > 1600 ) {
      $('.pageUp').fadeIn();
    } else {
      $('.pageUp').fadeOut();
    }
  });


  // Плавный скроллинг
  $("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();
});