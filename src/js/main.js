const hamburger = document.querySelector('#nav-hamburger');
const navMenu = document.querySelector('#nav-container');

hamburger.addEventListener('click', () => {
    hamburger.ariaExpanded = hamburger.ariaExpanded === 'true' ? 'false' : 'true';
    navMenu.classList.toggle('scale-x-0');
    navMenu.classList.toggle('scale-x-100');
});