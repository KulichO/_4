import '../scss/style.scss'

let showButton = document.querySelector('.button--show');
let textChange = document.querySelector('.next--show');
let list = document.querySelector('.brands__list');

showButton.addEventListener ('click', function(){
    showButton.classList.toggle('button--hide');
    textChange.classList.toggle('next--hide');
    list.classList.toggle('brands__list--show');
    
    if (showButton.classList.contains('button--hide')) {
        showButton.textContent = 'Скрыть';
    } else {
        showButton.textContent = 'Показать все';
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
