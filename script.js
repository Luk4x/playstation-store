navbar = document.getElementById('navBar')

function showMenu() {
    if (navbar.style.display == 'flex') {
        navbar.style.display = 'none'
    } else {
        navbar.style.display = 'flex'
    }
}