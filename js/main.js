const typed = new Typed('.typed', {
    strings: [
    'Programadores' ,
    'Diseñadores',
    'Inovadores',
    'Desarrolladores web'],
    typeSpeed:75,
    startDelay: 300,
    backSpeed: 75,
    shuffle: false,
    backDelay: 1500,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
    loop:true
});

const menu = document.querySelector('.mobile-menu')
const btn = document.querySelector('button.btn-mobile-menu')

    btn.addEventListener('click' ,() => {
        menu.classList.toggle('hidden')
    } )


const divpop = document.querySelector('.pop-div')
const btnpopCerrar = document.querySelector('button.btn-pop')
const btnleerOpen = document.querySelector('button.btn-plus')

btnleerOpen.addEventListener('click' , () => {
    divpop.classList.toggle('hidden')
})

btnpopCerrar.addEventListener('click' , () => {
    divpop.classList.toggle('hidden')
})