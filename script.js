const menuButton = document.querySelector('.cabecalho__menu-hamburger');
const degrade = getComputedStyle(document.documentElement).getPropertyValue('--azul-degrade');
const menuList = document.querySelector('.lista__menu');
const optionList = document.querySelectorAll('.lista')

const desktopMenuList = document.querySelector('.lista__menu__container')
const menuCategoria = document.querySelector('.container__botao-categoria');
const optionListDesktop = document.querySelectorAll('.lista__container');

let active = false;


menuButton.addEventListener('click', () => {
    if (!active) {
        menuButton.setAttribute('src', 'images/Menu Aberto.svg');
        menuButton.style.background = degrade;
        menuList.style.display = "block";
        active = true;
    } else {
        menuButton.setAttribute('src', 'images/Menu.svg')
        menuButton.style.background = 'white';
        menuList.style.display = "none";
        active = false;
    }

})

menuCategoria.addEventListener('click', () => {

    if (!active) {
        menuCategoria.style.background = degrade;
        menuCategoria.style.color = "white";
        menuCategoria.style.padding = "0 0.5em";
        desktopMenuList.style.display = "block";
        active = true;
    } else {
        menuCategoria.style.background = "white";
        menuCategoria.style.color = "black";
        desktopMenuList.style.display = "none";
        active = false;
    }
})

optionListDesktop.forEach((item) => {
    item.addEventListener('click', (e) => {
        optionListDesktop.forEach((another) => {
            if (another.classList.contains('active__container')) {
                another.classList.remove('active__container')
            }
        })
        item.classList.add('active__container')
    })

})

optionList.forEach((item) => {
    item.addEventListener('click', (e) => {
        optionList.forEach((another) => {
            if (another.firstElementChild.classList.contains('active')) {
                another.firstElementChild.classList.remove('active')
            }
        })
        e.target.classList.add('active')
    })
})


const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3,

    autoplay: {
        delay: 5000,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
});


