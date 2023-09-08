// Navbar
let section = document.querySelector('section')
let navLink = document.querySelector('header nav a')
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = set.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']'.classList.add('active'))
            })
        }
    })

var header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100)

menubar.classList.remove('bx-x')
 navbar.classList.remove('active')
};
let menubar = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')

    menubar.onclick = () => {
        menubar.classList.toggle('bx-x')
        navbar.classList.toggle('active')
    }
