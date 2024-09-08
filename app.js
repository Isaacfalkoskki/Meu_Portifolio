

const menuResponsive = document.querySelector('.menu-responsive');
menuResponsive.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuResponsive.classList.toggle('change');

    if (menuResponsive.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

}