import '../scss/style.scss'

//   ЧИТАТЬ ДАЛЕЕ БРЕНДЫ

let brandsShowButton = document.querySelector('.button--show');
let brandsTextChange = document.querySelector('.next--show');
let brandsList = document.querySelector('.brands__list');

brandsShowButton.addEventListener ('click', function(){
    brandsShowButton.classList.toggle('button--hide');
    brandsTextChange.classList.toggle('next--hide');
    brandsList.classList.toggle('brands__list--show');
    
    if (brandsShowButton.classList.contains('button--hide')) {
        brandsShowButton.textContent = 'Скрыть';
    } else {
        brandsShowButton.textContent = 'Показать все';
    }

});

//   ЧИТАТЬ ДАЛЕЕ ТИПЫ

let typesShowButton = document.querySelector('.button-types--show');
let typesTextChange = document.querySelector('.types--show');
let typesList = document.querySelector('.types__list');

typesShowButton.addEventListener ('click', function(){
    typesShowButton.classList.toggle('button-types--hide');
    typesTextChange.classList.toggle('types--hide');
    typesList.classList.toggle('types__list--show');
    
    if (typesShowButton.classList.contains('button-types--hide')) {
        typesShowButton.textContent = 'Скрыть';
    } else {
        typesShowButton.textContent = 'Показать все';
    }

});

// ЧИТАТЬ ДАЛЕЕ ТЕКСТ

let textShowButton = document.querySelector('.info__next-btn--read');
let textBlock = document.querySelector('.info__block');

textShowButton.addEventListener('click', function(){
    textShowButton.classList.toggle('info__next-btn--hide');
    textBlock.classList.toggle('info__block--active');

    if (textShowButton.classList.contains('info__next-btn--hide')){
        textShowButton.textContent = 'Скрыть';
    } else {
        textShowButton.textContent = 'Читать далее';
    }
})

//   СВАЙПЕР

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.2,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  })

//   ОТКРЫТИЕ ОСНОВНОГО МЕНЮ

  let burgerBtn = document.querySelector('.burger');
  let asideMenu = document.querySelector('.sidebar');
  let closeBtn = document.querySelector('.btn--close');
  let backGround = document.querySelector('.blur');

  burgerBtn.addEventListener('click', function(){
    asideMenu.classList.add('sidebar--active');
    backGround.classList.add('blur--active');
  })

  closeBtn.addEventListener('click', function(){
    asideMenu.classList.remove('sidebar--active');
    backGround.classList.remove('blur--active');
  })

  backGround.addEventListener('click', function(){
    asideMenu.classList.remove('sidebar--active');
    backGround.classList.remove('blur--active');
  })

//   ОТКРЫТИЕ МЕНЮ ОБРАТНОЙ СВЯЗИ

  let chatBtn = document.querySelector('.menu__icon-img-chat');
  let fdbckMenu = document.querySelector('.feedback');
  let fdbckClose = document.querySelector('.feedback__close');
  let chat = document.querySelector('.icon--chat');

  chatBtn.addEventListener('click', function(){
    fdbckMenu.classList.add('feedback--active');
    backGround.classList.add('blur--active');
  })

  fdbckClose.addEventListener('click', function(){
    fdbckMenu.classList.remove('feedback--active');
    backGround.classList.remove('blur--active');
  })

  backGround.addEventListener('click', function(){
    fdbckMenu.classList.remove('feedback--active');
    backGround.classList.remove('blur--active');
  })

  chat.addEventListener('click', function(){
    fdbckMenu.classList.add('feedback--active');
    asideMenu.classList.remove('sidebar--active');
    backGround.classList.add('blur--active');
  })

  //   ОТКРЫТИЕ МЕНЮ ЗВОНКА

  let phoneMenu = document.querySelector('.phone');
  let phoneClose = document.querySelector('.phone__close');
  let phone = document.querySelector('.menu__icon-img-call');
  let phoneBtn = document.querySelector('.icon--call');

  phoneBtn.addEventListener('click', function(){
    phoneMenu.classList.add('phone--active');
    backGround.classList.add('blur--active');
    asideMenu.classList.remove('sidebar--active');
  })

  phoneClose.addEventListener('click', function(){
    phoneMenu.classList.remove('phone--active');
    backGround.classList.remove('blur--active');
  })

  backGround.addEventListener('click', function(){
    phoneMenu.classList.remove('phone--active');
    backGround.classList.remove('blur--active');
  })

  phone.addEventListener('click', function(){
    phoneMenu.classList.add('phone--active');
    asideMenu.classList.remove('sidebar--active');
    backGround.classList.add('blur--active');
  })






  


