
// const cookieModal = document.querySelector('.cookies');
// const cookieBtn = document.querySelector('.cookies__button')

// cookieBtn.addEventListener('click', () => {
//   cookieModal.classList.remove('cookies__active');
//   Cookies.set('game-over-cookie', 'true', { expires: 7 });
// })

// if (!Cookies.get('game-over-cookie')) {
//   cookieModal.classList.add('cookies__active');
// }

// $('.faq__list').accordion({
//   active: true,
//   collapsible: true,
//   heightStyle: 'content',
//   icons: {
//     header: 'faq__item-plus',
//     activeHeader: 'faq__item-plus faq__item-plus_active'
//   }
// });

// ymaps.ready(init);
//     function init(){
//         // Создание карты.
//         var contactsMap = new ymaps.Map("contacts__map", {
//             center: [55.724090, 37.593342],
//             zoom: 14
//         });
//     }

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