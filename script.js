const menu = document.querySelector('.menu')
const nav = document.querySelector('header nav')

menu.addEventListener('click', toggleMenu)

function toggleMenu(){
    nav.classList.toggle('active')
    menu.classList.toggle('active')
}