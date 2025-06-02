import '../scss/style.scss'

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


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.2,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  })

  let burgerBtn = document.querySelector('.burger');
  let asideMenu = document.querySelector('.sidebar');
  let closeBtn = document.querySelector('.btn--close');
  let backGround = document.querySelector('.main');

  burgerBtn.addEventListener ('click', function(){
    asideMenu.classList.add('sidebar--active');
  })

  closeBtn.addEventListener ('click', function(){
    asideMenu.classList.remove('sidebar--active');
  })
