"use strict";

document.body.style.background = "red";

const ddd = document.querySelector(".image");

console.log(ddd.attributes); // обьект всех аттрибутов елемента
// NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(ddd.hasAttribute("alt")); // true

console.log(ddd.getAttribute("alt")); // lake and clouds

ddd.setAttribute("alt", "amazing lake and clouds");

console.log(ddd.getAttribute("alt")); // amazing lake and clouds

ddd.removeAttribute("alt");

console.log(ddd.attributes);
console.log(ddd.hasAttribute("alt"));

const input = document.querySelector(".user_name");
console.log(input.value);

// setTimeout(() => (document.body.style.background = ""), 3000);

// // выберет родителя elem = body
// document.body.parentNode.style.background = "red";

// // псевдо-массив (коллекция) хранит все дочерние элементы, включая текстовые
// // только для чтения
// let elems = document.body.childNodes;
// // методы массива не работают, поэтому можно через call/apply:
// // [].forEach.call(elems, function(elem) {
// //     alert( elem ); // HEAD, текст, BODY
// //   });

// // или сделать из коллекции массив
// elems = Array.prototype.slice.call(elems);

// elems.forEach(function(elem) {
//   console.log(elem.tagName);
// });

// // псевдо-массив хранит только дочерние узлы-элементы, то есть соответствующие тегам
// for (let i = 0; i < document.body.children.length; i++) {
//   console.log(document.body.children[i]);
// }

// // elem.firstElementChild === elem.children[0]
// // elem.lastElementChild === elem.children[elem.children.length - 1]

// // выберет первый дочерний элемент внутри elem, включая текстовые узлы
// document.body.firstElementChild.style.background = "green";

// // выберет последний дочерний элемент внутри elem, включая текстовые узлы
// document.documentElement.lastChild.style.background = "silver";

// // выберет последний дочерний узел-элемент внутри elem
// document.documentElement.lastElementChild.style.textTransform = "uppercase";

// // выберет элемент "слева" от elem (его предыдущего соседа)
// // document.body.previousSibling.style.color = "blue";

// // выберет узел-элемент "слева" от elem (его предыдущего соседа)
// // document.body.previousElementSibling.style.background = "yellow";

// // выберет элемент "справа" от elem (его следующего соседа)
// // document.body.nextSibling;

// // // выберет узел-элемент "справа" от elem (его предыдущего соседа)
// document.body.nextElementSibling;

// const selectedById = document.querySelector("#menu");
// selectedById.style.textTransform = "uppercase";
// selectedById.style.fontSize = "2rem";
// console.log(selectedById); // ...

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName); // ...

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass); // ...

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "#BF4E30";
// console.log(firstMenuItem); // ...

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // текстовый контент внутри p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = "Welcome to Bahamas!";

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// console.log(button.style); // объект инлайн стилей
