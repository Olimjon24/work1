let bars = document.querySelector('.d-none'),
    menu = document.querySelector('.menu__bar'),
    close = document.querySelector('.close'),
    exit = document.querySelector('.exit'),
    nav = document.querySelector('.nav'),
    buttonCountPlus = document.getElementById("buttonCountPlus"),
    buttonCountMinus = document.getElementById("buttonCountMinus"),
    count = document.getElementById("buttonCountNumber"),
    number = 0,
    add = document.querySelector('.add'),
    productNumb = document.querySelector('.count__product-d_none'),
    heart = document.querySelector('.heart');

bars.addEventListener('click', function () {
    nav.style.display = 'none';
    menu.style.display = 'flex';
})
close.addEventListener('click', function () {
    nav.style.display = 'flex';
    menu.style.display = 'none';
})
exit.addEventListener('click', function () {
    nav.style.display = 'flex';
    menu.style.display = 'none';
});
buttonCountPlus.onclick = function () {
    if (number <= 30) {
        number++;
        count.innerHTML = number;
    }
};
buttonCountMinus.onclick = function () {
    if (number >= 1) {
        number--;
        count.innerHTML = number;
    }
};
add.addEventListener('click', function () {
    productNumb.style.display = 'flex';
    if (number == 0) {
        productNumb.innerHTML = 'Вы не выбрали'
    } else {
        productNumb.innerHTML = `Товар в количестве '${number}' единиц добавлен в корзину`
    }
})
heart.addEventListener('click', function () {
    productNumb.style.display = 'none';
    count.innerHTML = 0;
})
/* Scroll */
// const header = document.querySelector('.header');
const body = document.querySelector('body');
const navHeight = nav.offsetHeight;
const bodyHeight = body.offsetHeight;
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > lastScrollTop) {
        nav.classList.remove('header--fixed');
        body.style.marginTop = null;
    } else {
        nav.classList.add('header--fixed');
        body.style.marginTop = `${navHeight}px`;
    }
    if (scrollDistance === 0) {
        nav.classList.remove('header--fixed');
        body.style.marginTop = null;
    }
    lastScrollTop = scrollDistance;
})
/* photo */
let mainPhoto = document.querySelector('.header__content-left_img'),
    miniPhoto = document.querySelectorAll('.header__content-card_img');
   for (let i = 0; i < miniPhoto.length; i++) {
    miniPhoto[0].addEventListener('click', function(){
        mainPhoto.src = 'img/header/header-bg-1.png'
    })
    miniPhoto[1].addEventListener('click', function(){
        mainPhoto.src = 'img/header/img1.jpg'
    })
    miniPhoto[2].addEventListener('click', function(){
        mainPhoto.src = 'img/header/img2.jpg'
    })
    miniPhoto[3].addEventListener('click', function(){
        mainPhoto.src = 'img/header/img3.jpg'
    })
    miniPhoto[4].addEventListener('click', function(){
        mainPhoto.src = 'img/header/img4.png'
    })
       
   }