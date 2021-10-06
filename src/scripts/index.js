
// const menuIconWrapper = document.querySelector('.menu__icon-wrapper');

// menuIconWrapper.onclick = function () {
//   document.querySelector('.menu__icon').classList.toggle('menu__icon_active');
// }


const menuContainer = document.querySelector('.menu');
const buregerIcon = document.getElementById('buregerIcon');
const logo = document.querySelector('.logo');
const logoutButton = document.getElementById('logoutButton');
const contentContainer = document.querySelector('.content');


// Передать в Users button header и прочее а дальше вызывать как this.button('button_add', 'Создать').createElement();
// Таким образом будет возможно добавление нескольких объектов из класса Users


const header = (...arg) => new Header(...arg);
const button = (...arg) => new Button(...arg);
// const users = (...arg) => new Users(...arg);
const users = new Users(contentContainer, header, button);

const menuSwitcher = new MenuSwitcher(menuContainer, buregerIcon, logo, logoutButton);
// const content = new Content(contentContainer)

// Доюавление слушателей на меню
menuSwitcher.setEventListener();

// создание страницы Users





// !!!! Разделить переключение меню switchMenu. По нажатию на кнопку вешать классы  menu_small и menu_full. А просто при загрузке выставлять ширину через стиль