"use strict";

// Document Object Model, сокращённо DOM – объектная модель документа,
// которая представляет все содержимое страницы в виде объектов,
// которые можно менять.

// BOM (Browser Object Model, Объектная модель браузера) — межплатформенный,
// независимый от языка интерфейс для работы с окном браузера.

// Объект document – основная «входная точка».
// С его помощью мы можем что-то создавать или менять на странице.

console.log("HTML разметка", document); // html
console.dir(document); // object
// document.querySelector - до первого совпадения
// используется для уникальных элементов

// обращение к элементу через класс
const content = document.querySelector(".p"); // получаем доступ к узлу-элементу (тег <р>)
console.log(content);
console.dir(content);

// свойство element.textContent
content.textContent = "Привет, РЕНАТА!!!";

// свойство element.style
content.style.backgroundColor = "red";
content.style.fontSize = "36px";

// свойство element.classList
// возвращает true или false, в зависимости от того, есть ли у элемента класс
console.log(content.classList);

console.log(content.classList.contains("js-list_content")); // false
console.log(content.classList.contains("p")); // true
console.log(content.classList.contains("text")); // true

// добавляет класс cls в список классов элемента
content.classList.add("js-list_content");
console.log(content.classList); // ["p", "text", "js-list_content", (value: "p text js-list_content")];
console.log(content.classList.contains("js-list_content")); // true

// удаляет класс cls из списка классов элемента
content.classList.remove("text");
// проверяем наличие класса
console.log(content.classList.contains("text")); // false
// выводим массив всех имен классов элемента
console.log(content.classList);

// заменяет существующий класс на указанный
//                           ( старый класс, новый класс )
content.classList.replace("js-list_content", "js-item_text");
// проверяем наличие старого класса
console.log(content.classList.contains("js-list_content")); // false
// выводим массив всех имен классов элемента
console.log(content.classList); // ["p", "js-item_text", value: "p js-item_text"]

// если класса cls нет, добавляет его, если есть, удаляет
content.classList.toggle("main-content");
console.log(content.classList);

content.classList.toggle("js-item_text");
console.log(content.classList);

const image = document.querySelector(".js-img");
console.dir(image);

// АТРИБУТЫ
image.alt = "picture";
image.setAttribute("alt", "item image");

// image.width = image.width / 1.5;
// image.height = image.height / 1.5;

image.name = "Beautiful"; // добавлен новый итрибут
image.src = "./img/2.jpeg";
image.setAttribute("src", "./img/4.jpeg");

console.log(image.hasAttribute("name")); // true
console.log(image.getAttribute("name")); // Beautiful
// console.log(image.removeAttribute(""));
console.log(image.attributes);

function updateImage() {
  image.setAttribute("src", "./img/7.jpeg");
  content.style.backgroundColor = "black";
  content.style.color = "white";
}
console.log(image.attributes);

// const button = document.querySelector(".js-btn"); // через класс

// HTM5 data-атрибуты
const button = document.querySelector('button[data-action="action"]');
console.log("button data-action: ", button.dataset.action);
console.log("button data-random: ", button.dataset.random);

console.log("дефолтный текст кнопки (из HTML): ", button.textContent); // click
button.textContent = "Hello!";
console.log("новый текст кнопки: ", button.textContent); // Hello

button.addEventListener("click", () => {
  updateImage();
  // setActiveItem();
  toggleActiveItem();
  showItems();
});

// выбор ВСЕХ элементов списка с указанным селектором
const menuItems = document.querySelectorAll(".menu-item");
console.dir(menuItems); // псевдомассив элементов списка

// выбор ПЕРВОГО элемента с указанным селектором
const homeMenuItem = document.querySelector(".menu-item");
console.log(homeMenuItem);

function setActiveItem() {
  homeMenuItem.classList.add("active");
}

function toggleActiveItem() {
  homeMenuItem.classList.toggle("active");
}

// НАВИГАЦИЯ по DOM
// document.parentNode - - выберет родителя elem
console.log(document.parentNode); // null
console.log(button.parentNode); // header
console.log(image.parentNode); // li
console.log(menuItems.parentNode); // undefined
console.log(homeMenuItem.parentNode); // undefined
// document.childNodes - псевдо-массив хранит все дочерние элементы, включая текстовые.
console.log(document.childNodes); // [html, html]
console.log(button.childNodes); // [text]
console.log(image.childNodes); // []
console.log(menuItems.childNodes); // undefined
console.log(homeMenuItem.parentNode); // undefined
// document.children - псевдо-массив хранит только дочерние узлы-элементы, то есть соответствующие тегам.
console.log(document.children); // [html, html]
console.log(button.children); // [text]
console.log(image.children); // []
console.log(menuItems.children); // undefined
console.log(homeMenuItem.parentNode); // undefined
// document.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// document.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
// document.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// document.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
// document.previousSibling - выберет элемент "слева" от elem (его предыдущего соседа)
// document.previousElementSibling - выберет узел-элемент "слева" от elem (его предыдущего соседа)
// document.nextSibling - выберет элемент "справа" от elem (его следующего соседа)
// document.nextElementSibling - выберет узел-элемент "справа" от elem (его предыдущего соседа)

// Добавление элемента
const menu = document.querySelector(".menu");

const news = '<li class="menu-item"><a href="#">news</a></li>';
menu.insertAdjacentHTML("afterbegin", news);
// menu.insertAdjacentHTML("afterend", news); // после всего списка ul

const cart = '<li class="menu-item"><a href="#">cart</a></li>';
// menu.insertAdjacentHTML("beforebegin", cart); // перед всем списком ul
menu.insertAdjacentHTML("beforeend", cart);
