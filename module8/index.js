"use strict";
// event bubbling (всплытие собитий)

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// const parentClickHandler = () => alert("Parent click handler");
// const childClickHundler = () => alert("Child click hundler");
// const innerClickChildHundler = () => alert("INNER Child click hundler");

// parent.addEventListener("click", parentClickHandler);
// child.addEventListener("click", childClickHundler);
// innerChild.addEventListener("click", innerClickChildHundler);

// event.target

// const handleClick = event => {
//   alert(`event.target: ${event.target.id}`);
//   console.log(`event.target: ${event.target}`);
// };

// откройте консоль и покликайте, вы увидите что
// event.target это всегда исходный (и самый глубокий) элемент
// на котором был сделан клик
// parent.addEventListener("click", handleClick);

// stoppropagarion
// const innerChildClickHandler = event => {
//   event.stopPropagation();
//   alert("INNER-CHILD click handler!");
// };

// parent.addEventListener("click", parentClickHandler);
// child.addEventListener("click", childClickHundler);
// innerChild.addEventListener("click", innerChildClickHandler);

// stopImmediatePropagation()
// const innerChildClickHandler = event => {
//   event.stopImmediatePropagation();
//   alert("Stop Propagation");
// };
// parent.addEventListener("click", parentClickHandler);
// child.addEventListener("click", childClickHundler);
// innerChild.addEventListener("click", innerChildClickHandler);

// //

// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();

//   const target = event.target;
//   console.log("event target: ", target); // посмотрите что тут

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== "A") return;

//   setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector("a.active");

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// }

// let selectedBox;

const ul = document.querySelector(".list");

ul.addEventListener("click", handleUlClick);
function handleUlClick(event) {
  event.preventDefault();
  const target = event.target;
  console.log("event target: ", target);

  if (target.nodeName !== "A") return;

  setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
  const currentActiveLink = ul.querySelector("a.active");

  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }
  nextActiveLink.classList.add("active");
}

// ul.onclick = function(event) {
//   let target = event.target; // где был клик?

//   if (target.tagName != "LI") return;
//   // если не на li, тогда выйти
//   highlight(target);
//   // подсветить li
// };

// function highlight(li) {
//   if (selectedBox) {
//     //убрать подсветку
//     selectedBox.classList.remove("highlight");
//   }
//   selectedBox = li;
//   selectedBox.classList.add("hightlight");
//   // подсветить новый элемент списка
// }
