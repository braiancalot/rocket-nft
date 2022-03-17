//Menu
const menu = document.querySelector('.menu')
const nav = document.querySelector('header nav')

menu.addEventListener('click', toggleMenu)

function toggleMenu(){
    nav.classList.toggle('active')
    menu.classList.toggle('active')
}

//Scroll to Top
const btnToTop = document.querySelector('.to-top')

btnToTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})

// Scroll animate
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll(){
    const windowTop = window.scrollY + ((window.innerHeight * 3)/4);
    target.forEach( element => {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

window.addEventListener('scroll', function() {
    animeScroll()
})

animeScroll()