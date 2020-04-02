"use strict";

// ============== 1 ===============================================
// Напиши функцию toPassTests как FUNCTION EXPRESSION,
// которая выводит пользователю всплывающее окно с сообщением
// Прежде чем, как выполнить это задание у тебя должно быть сдано пять тестов!
// и вызови эту функцию
// убедись, что функция выполнилась

// ======== mine ==========================
// const toPassTests = function() {
//   console.log(
//     "Прежде чем, как выполнить это задание у тебя должно быть сдано пять тестов!"
//   );
// };
// toPassTests();
// ======== mine ==========================

// ============== 2 ===============================================
// Напиши функцию checkAge как FUNCTION EXPRESSION,
// которая проверяет значение возраста, которое пользователь ввел в модальное окно
// и выводит пользователю всплывающее окно с сообщением
// если возраст равен или более 18, то - Here you are! You are got access!
// в остальных случаях - Sorry, you can`t to get access
// Вызови эту функцию
// убедись, что функция она работает

// ======== mine ==========================
// let age;
// == 1 ==
// const checkAge = function(age) {
//   age = +prompt("Enter your age please");
//   if (age >= 18) {
//     return alert("Here you are! You are got access!");
//   } else {
//     return alert("Sorry, you can`t to get access");
//   }
// };
//== 2 ==
// const checkAge = function(age) {
//   age = +prompt("Enter your age please");
//   if (age >= 18) {
//     return alert("Here you are! You are got access!");
//   }
//   return alert("Sorry, you can`t to get access");
// };

// checkAge();
// ======== mine ==========================

// ============== 3 ===============================================
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию toGetCost(message, pricePerWord)
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки
// одного слова, и возвращающую цену гравировки всех слов в строке.

// ======== mine ==========================
// == function EXPRESSION ==
// const toGetCost = function(message, pricePerWord) {
//   let words = message.split(" ");
//   let wordsCount = words.length;
//   //   return (pricePerWord = wordsCount * Number(pricePerWord));
//   //   return (pricePerWord = wordsCount * pricePerWord);
//   return (pricePerWord *= wordsCount);
// };

// == arrow function ==
// const toGetCost = (message, pricePerWord) =>
//   (pricePerWord *= message.split(" ").length);
// ======== mine ==========================

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
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

// ======== mine ==========================
// const logItems = function(array) {
//   // твой код
//   for (let i = 0; i < array.length; i += 1) {
//     // console.log(array[i]);
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };
// ======== mine ==========================

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// logItems([
//   "Wolverine",
//   "Thor",
//   "Iron Man",
//   "Deadpool",
//   "Nick Fury",
//   "Colossus"
// ]);

// logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

// ============== 5 ===============================================
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.
// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// const formatString = function(string) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// вернется форматированная строка
// ============== 6 ===============================================
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово
// то функция возвращает true, если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function(message) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ============== 7 ===============================================
// Напиши скрипт со следующим функционалом:
// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of. После чего в консоль выведи строку
//'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов,
//  не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом
// 'Было введено не число, попробуйте еще раз',
// при этом результат prompt записывать в массив чисел не нужно,
// после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

