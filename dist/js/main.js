"use strict";

var btnOurWork = document.querySelector('.btn__seo');
var sectionOurWork = document.querySelector('.our-work');
var sidebar = document.querySelector('#wrapper');
var btnSideBarClose = document.querySelector('#menu-close');
var hamburger = document.querySelector('#menu-toggle');
var popup = document.querySelector('.popup');
var popupOpen = document.querySelector('#popup-open');
var popupClose = document.querySelector('#popup-close');
var overlay = document.querySelector('.overlay'); // Функция выводит плавно блок на экран

function showBlock(el, speed) {
  var btn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  el.style.display = 'block';
  var step = 1 / speed;
  var interval = setInterval(function () {
    if (+el.style.opacity >= 1) clearInterval(interval);

    if (btn) {
      btn.style.opacity = +btn.style.opacity - step;
      if (+btn.style.opacity <= 0) btn.style.display = "none";
    }

    el.style.opacity = +el.style.opacity + step;
  }, speed / 1000);
} // Закрытие сайдбара


btnSideBarClose.addEventListener('click', function () {
  sidebar.classList.remove('toggled');
  btnSideBarClose.style.opacity = 0;
}); // Открытие блока "Наши работы"

btnOurWork.addEventListener('click', function () {
  showBlock(sectionOurWork, 300, btnOurWork);
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
}); // Открытие popup 

popupOpen.addEventListener('click', function () {
  showBlock(overlay, 150);
  showBlock(popup, 200);
}); //Закрытие popup

popupClose.addEventListener('click', function () {
  popup.style.display = 'none';
  popup.style.opacity = 0;
  overlay.style.display = 'none';
  overlay.style.opacity = 0;
});
//# sourceMappingURL=main.js.map
