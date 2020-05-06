"use strict";

var btnOurWork = document.querySelector('.btn__seo');
var sectionOurWork = document.querySelector('.our-work');
var sidebar = document.querySelector('#wrapper');
var btnSideBarClose = document.querySelector('#menu-close');
var hamburger = document.querySelector('#menu-toggle'); // Функция выводит плавно блок на экран

function showBlock(btn, el, speed) {
  el.style.display = 'block';
  var step = 1 / speed;
  var interval = setInterval(function () {
    if (+el.style.opacity >= 1) clearInterval(interval);
    btn.style.opacity = +btn.style.opacity - step;
    el.style.opacity = +el.style.opacity + step;

    if (+btn.style.opacity <= 0) {
      btn.style.display = "none";
    }
  }, speed / 1000);
} // Закрытие сайдбара


btnSideBarClose.addEventListener('click', function () {
  sidebar.classList.remove('toggled');
  btnSideBarClose.style.opacity = 0;
}); // Открытие блока "Наши работы"

btnOurWork.addEventListener('click', function () {
  showBlock(btnOurWork, sectionOurWork, 300);
}); // Открытие гамбургера

hamburger.addEventListener('click', function (evt) {
  evt.stopPropagation();
  sidebar.classList.toggle('toggled');
  btnSideBarClose.style.opacity = 1;
}); // Закрытие гамбургера при клике в любое другое место

document.addEventListener('click', function (evt) {
  var target = evt.target;
  var itsHamburger = target == hamburger;
  var itsMenu = target == sidebar || sidebar.contains(target);
  var menuIsToggled = sidebar.classList.contains('toggled');

  if (!itsMenu && !itsHamburger && menuIsToggled) {
    sidebar.classList.remove('toggled');
    btnSideBarClose.style.opacity = 0;
  }
});
//# sourceMappingURL=main.js.map
