const menuButton = document.querySelector('.cabecalho__menu-hamburger');
const degrade = getComputedStyle(document.documentElement).getPropertyValue('--azul-degrade');
const orange = getComputedStyle(document.documentElement).getPropertyValue('--laranja');
const menuList = document.querySelector('.lista__menu');
const optionList = document.querySelectorAll('.lista')
let active = false;


menuButton.addEventListener('click', () => {
    if (!active) {
        menuButton.setAttribute('src', 'images/Menu Aberto.svg');
        menuButton.style.backgroundColor = 'black';
        menuList.style.display = "block";
        active = true;
    } else {
        menuButton.setAttribute('src', 'images/Menu.svg')
        menuButton.style.backgroundColor = 'white';
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


