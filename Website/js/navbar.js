const closeBtn = document.querySelector('.close-menu-btn');
const menuLinks = document.querySelector('.menu-links');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const overlay = document.querySelector('.overlay');

function toggleMenu(show) {
    // menuLinks.classList.toggle('menu-links-show', show);
    menuLinks.style.transform = show ? 'translateX(0)' : 'translateX(100%)';
    overlay.style.display = show ? 'block' : 'none';
    document.querySelector('body').style.overflow = show ? 'hidden' : 'auto';
}

mobileMenuBtn.addEventListener('click', () => toggleMenu(true));
closeBtn.addEventListener('click', () => toggleMenu(false));

document.querySelectorAll('.menu-links > li').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

overlay.addEventListener('click', () => toggleMenu(false));
