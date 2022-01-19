navbar = document.getElementById('navBar')
menuBtn = document.getElementById('menu-button')

function showMenu() {
    if (navbar.style.display == 'block') {
        navbar.style.display = 'none'
        menuBtn.style.marginRight = '0'
    } else {
        navbar.style.display = 'block'
        menuBtn.style.marginRight = '5px'
    }
}