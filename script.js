document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', function () {
        const isNavVisible = nav.style.height === 'auto';
        nav.style.height = isNavVisible ? '0' : 'auto';
    });
});
