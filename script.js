mobileMenu = document.querySelector('#menu-button')
navbar = document.querySelector('#navBar')

mobileMenu.addEventListener('click', showMobileMenu)

function showMobileMenu() {
    navbar.classList.toggle('active')
}