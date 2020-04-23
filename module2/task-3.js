"use strict";

// ============== 1 ===============================================
// Напиши функцию toPassTests как
// FUNCTION EXPRESSION (функциональное выражение через переменную)
// и как ARROW FUNCTION (стрелочная функция),
// которая выводит пользователю всплывающее окно с сообщением
// Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении

// // ======== mine ==========================
// // FUNCTION EXPRESSION
// const toPassTests = function () {
//   console.log(
//     "Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!"
//   );
// };
// // ARROW FUNCTION
// const toPassTests = () =>
//   console.log(
//     "Прежде чем, как выполнить это задание у тебя должно быть сдано пять тестов!"
//   );
// // вызов функции
// toPassTests();
// // ======== mine ==========================

// ============== 2 ===============================================
// Напиши функцию checkAge как FUNCTION EXPRESSION (функциональное выражение через переменную)
// и как ARROW FUNCTION (стрелочная функция),
// которая проверяет значение возраста, которое пользователь ввел в модальное окно
// и выводит пользователю всплывающее окно с сообщением
// если возраст равен или более 18, то - Here you are! You are got access!
// в остальных случаях - Sorry, you can`t to get access
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении

// // ======== mine ==========================
// let age;
// // FUNCTION EXPRESSION
// // == 1 ==
// const checkAge = function (age) {
//   age = +prompt("Enter your age please");
//   if (age >= 18) {
//     return alert("Here you are! You are got access!");
//   } else {
//     return alert("Sorry, you can`t to get access");
//   }
// };
// // // == 2 ==
// // const checkAge = function(age) {
// //   age = +prompt("Enter your age please");
// //   if (age >= 18) {
// //     return alert("Here you are! You are got access!");
// //   }
// //   return alert("Sorry, you can`t to get access");
// // };

// // // ARROW FUNCTION
// const checkAge = (age) =>
//   (age = +prompt("") >= 18)
//     ? alert("Here you are! You are got access!")
//     : alert("Sorry, you can`t to get access");
// // // вызов функции
// checkAge();
// // ======== mine ==========================

// ============== 3 ===============================================
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию toGetCost(message, pricePerWord)
// как FUNCTION EXPRESSION и как ARROW FUNCTION
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки
// одного слова, и возвращающую цену гравировки всех слов в строке.
// и вызови эту функцию
// убедись, что функция выполнилась при любом ее выражении

// // ======== mine ==========================
// // == function EXPRESSION ==
// const toGetCost = function(message, pricePerWord) {
//   let words = message.split(" ");
//   let wordsCount = words.length;
//   // return (pricePerWord = wordsCount * pricePerWord);
//   return (pricePerWord *= wordsCount);
// };

// // == arrow function ==
// // const toGetCost = (message, pricePerWord) =>
// //   (pricePerWord *= message.split(" ").length);
// // ======== mine ==========================

// // Вызовы функции для проверки кода
// console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100
// console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160
// console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280
// console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180

// ============== 4 ===============================================
// Напиши функцию logItems(array), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение
// в формате [номер элемента] - [значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого
// элемента массива ['Mango', 'Banana', 'Ajax']
// с индексом 0 будет выведено '1 - Mango',
// а для индекса 2 выведет '3 - Ajax'.
// const array = ['Mango', 'Banana', 'Ajax'];

// // ======== mine ==========================
// FUNCTION EXPRESSION
// const logItems = function(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };
// // ======== mine ==========================

// // Вызовы функции для проверки кода
// logItems([
//   "Wolverine",
//   "Thor",
//   "Iron Man",
//   "Deadpool",
//   "Nick Fury",
//   "Colossus",
// ]);

// logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

// ============== 5 ===============================================
// Напиши функцию checkTheWord(message) как FUNCTION EXPRESSION и как ARROW FUNCTION,
// принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов great и not. Если нашли запрещенное слово
// то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// // ======== mine ==========================
// // FUNCTION EXPRESSION
// const checkTheWord = function(message) {
//   let msg = message.toLowerCase();
// //   if (msg.includes("great") || msg.includes("know")) {
//     return true;
//   }
//   return false;
// };
// // // ARROW FUNCTION
// const checkTheWord = message =>
//   message.toLowerCase().includes("great") ||
//   message.toLowerCase().includes("know")
//     ? true
//     : false;
// // ======== mine ==========================

// // Вызовы функции для проверки кода
// console.log(checkTheWord("Than fly to others that we know not of?")); // true
// console.log(checkTheWord("Thus conscience does make cowards of us all")); // false
// console.log(checkTheWord("And enterprises of great pitch and moment")); // true
// console.log(checkTheWord("And lose the name of action")); // false

// ============== 6 ===============================================
// Напиши функцию countTestsScore() как FUNCTION EXPRESSION,
// принимающую при вызове все аргументы в виде псевдомассива arguments,
// Функция суммирует все полученные аргументы, независимо от их количества при вызове.
// в переменную totalSum и выводит это значение в консоль

// // ======== mine ==========================
// const countTestsScore = function() {
//   let totalSum = 0;
//   for (const argument of arguments) {
//     totalSum += argument;
//     // console.log("тот", totalSum);
//   }
//   return console.log("тот", totalSum);
// };
// ======== mine ==========================

// // Вызовы функции для проверки кода
// countTestsScore(16, 22, 23); // 61
// countTestsScore(15, 20, 22, 20); // 77
// countTestsScore(14, 19, 21, 20, 23); // 97

// // ============== 7 ===============================================
// // Напиши функцию myNewArrowFunction() как ARROW FUNCTION,
// // принимающую при вызове все аргументы с помощью ...rest ,
// // и выводит массив этих аргументов в консоль

// // ======== mine ==========================
// const myNewArrowFunction = (...args) => console.log(args);
// // ======== mine ==========================

// // Вызовы функции для проверки кода
// myNewArrowFunction(1, 2, 3); // [1, 2, 3]
// myNewArrowFunction(100, 200, 300, 400, 500); // [100, 200, 300, 400, 500]
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"); // ["Js", "Python", "Java", "PHP", "C++"]

