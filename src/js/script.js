const hamburger = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const label = document.querySelector('.header__burger-label');
const lines = document.querySelectorAll('.header__burger-line');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    label.classList.toggle('active');
    lines.forEach(line => {
        line.classList.toggle('active');
    });
});