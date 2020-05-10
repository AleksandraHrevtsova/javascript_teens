"use strict";

// Document Object Model, сокращённо DOM – объектная модель документа,
// которая представляет все содержимое страницы в виде объектов,
// которые можно менять.

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

content.textContent = "Привет, РЕНАТА!!!";
content.style.backgroundColor = "red";
content.style.fontSize = "36px";

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

image.alt = "picture";
image.setAttribute("alt", "item image");

// image.width = image.width / 1.5;
// image.height = image.height / 1.5;

image.src = "./img/2.jpeg";
image.setAttribute("src", "./img/4.jpeg");

image.name = "Beautiful"; // добавлен новый итрибут

console.log(image.attributes);

// const button = document.querySelector(".js-btn"); // через класс
const button = document.querySelector('button[data-action="action"]');

console.log("дефолтный текст кнопки (из HTML): ", button.textContent); // click
button.textContent = "Hello!";
console.log("новый текст кнопки: ", button.textContent); // Hello

// const menuItem = document.querySelectorAll(".menu-item");
// const homeMenuItems = document.querySelector(".menu-item");

button.addEventListener("click", () => {
  updateImage();
});

function updateImage() {
  image.setAttribute("src", "./img/7.jpeg");
  content.style.backgroundColor = "black";
  content.style.color = "white";
}
// console.log(image.attributes);

// console.log("button data-action: ", button.dataset.action);
// console.log("button data-random: ", button.dataset.random);
