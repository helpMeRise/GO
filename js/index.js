
const cookieModal = document.querySelector('.cookies');
const cookieBtn = document.querySelector('.cookies__button')

cookieBtn.addEventListener('click', () => {
  cookieModal.classList.remove('cookies__active');
  Cookies.set('game-over-cookie', 'true', { expires: 7 });
})

if (!Cookies.get('game-over-cookie')) {
  cookieModal.classList.add('cookies__active');
}

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
        var contactsMap = new ymaps.Map("contacts__map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.724090, 37.593342],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });
    }