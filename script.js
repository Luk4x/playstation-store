navbar = document.getElementById('navBar')
menuBtn = document.getElementById('menu-button')


function showMenu() {
    if (navbar.style.display == 'flex') {
        navbar.style.display = 'none'
        menuBtn.style.marginLeft = ''
    } else {
        navbar.style.display = 'flex'
        menuBtn.style.marginLeft = '10px'
    }
}