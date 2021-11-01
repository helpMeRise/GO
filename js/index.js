$('.faq__list').accordion({
  active: true,
  collapsible: true,
  heightStyle: 'content',
  icons: {
    header: 'faq__item-plus',
    activeHeader: 'faq__item-plus faq__item-plus_active'
  }
});

ymaps.ready(init);
    function init(){
        // Создание карты.
        const contactsMap = new ymaps.Map("contacts__map", {
            center: [55.723151, 37.565021],
            zoom: 15,
            
        });
        
        const mark = new ymaps.Placemark([55.723151, 37.565021]);

        contactsMap.geoObjects.add(mark);
    }

const burgerButton = document.querySelector('.header__menu-button');
const burger = document.querySelector('.burger');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('header__menu-button_active');
  burger.classList.toggle('burger__active');
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.feedback__next',
    prevEl: '.feedback__prev',
  },
});

const reservationForm = $('.reservation__form');

reservationForm.submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      type: 'POST',
      headers: {  'Access-Control-Allow-Origin': '*' },
      data: $(this).serialize(),
      success(data) {
        $('.reservation__title').text('Спасибо за заявку');
        $('.reservation__form').slideUp();
      },
      error() {
        $('.reservation__title').text('Попробуйте позже');
      }
    })
})

const modalForm = $('.modal__form');

modalForm.submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'POST',
    headers: {  'Access-Control-Allow-Origin': '*' },
    data: $(this).serialize(),
    success(data) {
      $('.modal__title').text('Спасибо за заявку');
      $('.modal__form').slideUp();
    },
    error() {
      $('.modal__title').text('Попробуйте позже');
    }
  })
})

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const burgerModalButton = document.querySelector('.burger__button')
const headerButton = document.querySelector('.header__button');

burgerModalButton.addEventListener('click', () => {
  modal.classList.toggle('modal__active');
})

headerButton.addEventListener('click', () => {
  modal.classList.toggle('modal__active');
})

modalClose.addEventListener('click', () => {
  modal.classList.toggle('modal__active');
})