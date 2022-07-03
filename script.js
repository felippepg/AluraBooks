const menuButton = document.querySelector('.cabecalho__menu-hamburger');
const degrade = getComputedStyle(document.documentElement).getPropertyValue('--azul-degrade');
const menuList = document.querySelector('.lista__menu');
const optionList = document.querySelectorAll('.lista')
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

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
});


