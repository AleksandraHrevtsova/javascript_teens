"use strict";

// CALLBACK функции обратного вызова - передается аргументом в другую функцию
// ===1===
// Функция высшего порядка — функция, принимающая в качестве
// параметров другие функции или возвращающая функцию
// как результат.
const highOrderFunc = function (callbackFunc) {
  const message = "Вот так работает колбэк";
  callbackFunc(message);
};

// // Функция обратного вызова (callback) — это функция, которая// передается другой функции в качестве аргумента и та,// в свою очередь, вызывает переданную функцию.

const showMessage = function (Vania) {
  // объявление
  console.log(Vania);
};

highOrderFunc(showMessage);

// // ===2===
const argumentFunc = function (message) {
  console.log(message);
};

const higherOrderFunction = function (parametr) {
  const string = "HOCs are awesome";
  parametr(string);
};

higherOrderFunction(argumentFunc);

// ===3===

const showHeroes = function (heroes) {
  console.log(heroes);
};

const mainFunc = function (callback) {
  //   const hero = "Batman";
  const heroes = ["Batman", "Robin"];
  for (const el of heroes) {
    // console.log(hero);
    callback(el);
  }
};
mainFunc(showHeroes);

// // АСБТРАГИРОВАНИЕ ПОВТОРЕНИЯ
const repeatLog = function (n) {
  let result;
  for (let i = 0; i <= n; i += 1) {
    result = i;
    // console.log("каждая итерация i: ", i); // каждая итерация
    console.log("каждая итерация result: ", result); // каждая итерация
  }
  console.log("последняя итерация", result);
};

repeatLog(5);

// ===1===
// callback - функция - обычная
const showResult = function (result) {
  console.log(result);
};

// callback - функция - обычная
const showResultWithComment = function (value) {
  console.log("комментарий к результату: ", value);
};

// ф-я верх порядка, в которую можно передавать разные колбэки при вызове
const repeat = function (num, callback) {
  // объявление
  for (let i = 0; i < num; i += 1) {
    callback(i);
    //(value) => { myArr.push(`element ${value + 1}`)
  }
};

repeat(4, showResult); // вызов ф-и
// 0
// 1
// 2
// 3

repeat(3, showResultWithComment);
// комментарий к резльтату:  0
// комментарий к резльтату:  1
// комментарий к резльтату:  2
// комментарий к резльтату:  3

// callback - функция - анонимная
// (стрелочная) и вызывается сразу в ф-и верхнего порядка
const myArr = [];
console.log("массив объявлен", myArr);

repeat(5, (value) => {
  myArr.push(`element ${value + 1}`);
});
console.log("массив после функции", myArr);

// // console.log(myArr); // ["element 1", "element 2", "element 3", "element 4", "element 5"]

// ФИЛЬТР МАССИВА
const filterFunc = function (array, cbFunc) {
  const filteredArr = []; // новый массив для добавления отфильтрованных элементов
  for (const el of array) {
    const ok = cbFunc(el);
    //        (Renata) => Renata.isFresh)

    if (ok) {
      filteredArr.push(el);
    }
  }
  return filteredArr;
};

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
  { name: "oranges", quantity: 120 },
];

const freshFruits = filterFunc(fruits, (Renata) => Renata.isFresh);
console.log("только свежие: ", freshFruits); // массив с объектами apples и bananas

const fruitsWithQuantity = filterFunc(fruits, (fruit) => fruit.quantity >= 120);
console.log("те, что больше 120: ", fruitsWithQuantity); // массив с объектами apples и grapes

// // // ============ СТЕК ВЫЗОВОВ / КОНТЕКСТ ИСПОЛНЕНИЯ
// // //  Execution Context stack / (execution context)
// // //             (callstack) / global (default) & functional
// // //                                           (каждый раз при вызове)
// // // структура данных (котел) / (LIFO - Last In, First Out)

// // //              верх стека  _____   выполнение начинается с верха
// // //  2я Вложенная ф-я        | 3 |   эта выполнится 1я - stack frame
// // //                          _____
// // //  1я Вложенная ф-я        | 2 |   эта - 2я - stack frame
// // //                          _____
// // //  Родительская ф-я        | 1 |   эта последняя - stack frame
// // //              дно стека   _____
const thirdChildFunc = function () {
  console.log("Выполнилась 3я вложенная функци");
};

const secondChildFunc = function () {
  thirdChildFunc();
  console.log("Выполнилась 2я вложенная функци");
};
const firstChildFunc = function () {
  secondChildFunc();
  console.log("Выполнилась 1я вложенная функция");
};

const parentFunc = function () {
  console.log("Начала выполняться родительская функция");
  firstChildFunc();
  //   secondChildFunc();
  console.log("Закончила выполняться родительская функция");
};

parentFunc();
// мы об этом уже говорили в модуле 2,
// когда смотрели порядок выполнения кода

// ============ LEXICAL ENVIRONMENT (лексическое окружение)
// структура, хранящая имена переменных,
//                     значения переменых,
//                     значения this
// механизм их извлечения при обращении к ним
// ссылки на родительское lexical environment

const x = 10; // global scope
console.log("значение х глобально", x);
const y = 20; // global scope
let double;
const summ = function (z) {
  //   // z = 30, значение аргумента при вызове
  const x = 100; // function scope, применяется, потому что есть
  console.log("local", x);
  //   console.log("значение х внутри ф-и", x);
  return console.log(x + x + y + z);
  //                100 + 20 + 30
};

summ(30); // 150

// == CLOSURE (ЗАМЫКАНИЯ) - способность функции получать доступ к переменым
// из ее лексического окружения при объявлениия, независимо от того, где эта
// функция вызвана

// // ===1===
const createCounter = function () {
  // local function scope
  let privateValue = 0;
  //   // local function scope
  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };
  // local function scope
  const decrement = function () {
    privateValue -= 1;
    console.log(privateValue);
  };
  return {
    increment,
    decrement,
  };
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2
counterA.increment(); // 3
counterA.decrement(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3
// counterB.increment(); // 4
// counterB.increment(); // 5
// counterB.increment(); // 6
// =============== the end =================

// // это способ посмотреть в консоли свойства заданного js объекта.
// console.dir(counterA);
// console.dir(counterB);

// // ===2===
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Ilia", "apple pie"); // Ilia is cooking apple pie
// makeDish("Eva", "fish"); // Eva is cooking fish
// makeDish("Polina", "beef stew"); // Polina is cooking beef stew

// makeDish("Vika", "muffins"); // Vika is cooking muffins
// makeDish("Yarik", "pork chops"); // Yarik is cooking pork chops
// makeDish("Andrei", "roast beef"); // Andrei is cooking roast beef

// const makeShef = function (name) {
//   return function makeDish(dish) {
//     console.log(`${name} is cooling ${dish}`);
//   };
// };
// const kiril = makeShef("Kiril");
// kiril("cheesecake");

// const dima = makeShef("Dima");
// dima("pancakes");

// // this in global environment
// // - window без "use strict" и udefined с "use strict"

// // this in object`s methods
// // ===1===
// const petya = {
//   name: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'

// // ===2===
// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: "Mango" };

// /*
//  * Записываем ссылку на функцию в свойство объекта
//  * Обратите внимание, что это не вызов - нет ()
//  */
// user.showContext = showThis;

// /*
//  * Вызываем функцию в контексте объекта
//  * this будет указывать на текущий объект, в контексте
//  * которого осуществляется вызов, а не на глобальный объект.
//  */

// user.showContext();
// // this in showThis: {name: "Mango", showContext: ƒ}

// // this in callback
// // ===1===
// const hotel = {
//   name: "Resort Hotel",
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   /*
//    * Во время вызова fn, callback будет ссылкой
//    * на функцию showThis объекта hotel.
//    * Ее вызов происходит в глобальном контексте,
//    * про hotel она ничего не знает.
//    * Соответственно this не будет ссылаться на hotel
//    */
//   callback();
// };

// // Передается ссылка на функцию а нее ее вызов
// fn(hotel.showThis); // window или undefined

// // this in arrow function
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = { name: "Mango" };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// // ===2===
// const hotel = {
//   name: "Resort hotel",
//   showThis() {
//     const fn = () => {
//       /*
//        * Стрелки запоминают контекст во время объявления,
//        * из родительской области видимости
//        */
//       console.log("this in fn: ", this);
//     };

//     fn();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in fn: {name: 'Resort hotel', showThis: ƒ}
// // this in showThis: {name: 'Resort hotel',showThis: ƒ}

// // ===ES5==
// const hotel = {
//   name: "Resort hotel",
//   showThis: function showThis() {
//     /*
//      * Контекст для стрелки сохраняется
//      * и передается из внешней области видимости
//      */
//     const context = this;

//     const fn = function fn() {
//       // А тут используется
//       console.log("this in fn: ", context);
//     };

//     fn();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in fn: {name: 'Resort hotel', showThis: ƒ}
// // this in showThis: {name: 'Resort hotel',showThis: ƒ}

// // call & apply
// const greet = function () {
//   return `Wellcome to ${this.name} hotel!`;
// };

// const hotel = { name: "Resort Hotel" };

// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"

// //call вызовет функцию fn передав ее this ссылку на объект obj, а также аргументы arg1, arg2 и т. д.
// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: "Resort Hotel" };
// const motel = { name: "Sunlight Motel" };

// console.log(greet.call(hotel, "Mango", 5));
// // "Mango, wellcome to 5-star Resort Hotel!"

// console.log(greet.call(motel, "Poly", 4));
// // "Poly, wellcome to 4-star Sunlight Motel!"

// // apply полный аналог метода call за исключением того, что синтаксис
// // вызова аргументов требует не перечисление, а массив.
// const greet = function (guest, stars) {
//   return `${guest}, welcome to ${stars}-star ${this.name}!`;
// };

// const hotel = { name: "Resort Hotel" };
// const motel = { name: "Sunlight Motel" };

// console.log(greet.apply(hotel, ["Mango", 5]));
// // "Mango, wellcome to 5-star Resort Hotel!"

// console.log(greet.apply(motel, ["Poly", 4]));
// // "Poly, wellcome to 4-star Sunlight Motel!"

// // bind
// // bind создает копию функции fn с привязанным контекстом obj
// // и аргументами arg1, arg2 и так дале, после чего возвращает
// // ее как результат своей работы. В результате мы получаем копию
// // функции с привязанным контекстом, которую можно передать куда
// // угодно и вызвать когда угодно.
// const greet = function (guest) {
//   return `${guest}, welcome to ${this.name}!`;
// };

// const hotel = { name: "Resort Hotel" };

// const hotelGreeter = greet.bind(hotel, "Mango");

// hotelGreeter(); // "Mango, wellcome to Resort Hotel!"

// // Чаще всего метод bind используется для привязки контекста при передаче
// // методов объекта как функций обратного вызова.
// const hotel = {
//   name: "Resort Hotel",
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function (callback) {
//   callback();
// };

// // Передаем копию метода showThis с контекстом привязанным к hotel
// fn(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}
