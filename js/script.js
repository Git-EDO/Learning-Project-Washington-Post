let burger = document.querySelector('.nav__burger');
let menu = document.querySelector('.menu__list');
let login = document.querySelector('.nav__login');
let nav = document.querySelector('nav');

let body = document.querySelector('body');

burger.onclick = function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    login.classList.toggle('active');
    body.classList.toggle('lock');
}

menu.onclick = function () {
    burger.classList.remove('active');
    nav.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
    login.classList.remove('active');
}