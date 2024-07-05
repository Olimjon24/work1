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
/* ---nav bars start-------- */
  function showAndHide(btn, hide, show) {
      btn.addEventListener('click', function () {
          hide.style.display = 'none';
          show.style.display = 'flex'
      })
  }
    showAndHide(bars, nav, menu)
    showAndHide(close, menu, nav)
    showAndHide(exit,menu,nav)
/* -----nav bars end */

/* ---------timer start------ */
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
        count.innerHTML = 0;
        number = 0
    }
})
heart.addEventListener('click', function () {
    productNumb.style.display = 'none';
    count.innerHTML = 0;
})
/* ------timer end */

/*------ Scroll start */
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
/* -------Scroll end----- */
/* photo */
let mainPhoto = document.querySelector('.header__content-left_img'),
    miniPhoto = document.querySelectorAll('.header__content-card_img');
    img(miniPhoto[0], mainPhoto, 'img/header/header-bg-1.png');
    img(miniPhoto[1], mainPhoto, 'img/header/img1.jpg');
    img(miniPhoto[2], mainPhoto, 'img/header/img2.jpg');
    img(miniPhoto[3], mainPhoto, 'img/header/img3.jpg');
    img(miniPhoto[4], mainPhoto, 'img/header/img4.png');

    function img(btn, miniImg, bigImg){
    btn.addEventListener('click', function(){
        miniImg.src = bigImg
    })
    }
    let inpClose = document.getElementById('text'),
        butt = document.querySelector('.footer__button');
    butt.addEventListener('click', function(){
        inpClose.value = ""
    })