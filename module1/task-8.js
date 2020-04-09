"use strict";

let total = 0;
// 1
let input = Number(prompt("Введите число"));

do {
  input = Number(prompt("Введите число"));
  total += input;
  console.log(total);
} while (input);

console.log("total: ", total);

// 2
// let total = 0;
// let input = +prompt("Введите число");
// while (input) {
//   input = +prompt("А ТЕПЕРЬ ЕЩЕ ОДНО ЧИСЛО");
//   //   total += input;
//   total = total + input;
//   console.log(total);
// }
// console.log("total: ", total);
// ==========================================
// let total8 = 0;
// let input8 = +prompt("введіть число");
// while (input8) {
//   input8 = +prompt("введіть число");
//   total8 = total8 + input8;
// }

// alert(`Общая сумма чисел равна ${total8}`);
// ==========================================
// let total = 0;

// let input = +prompt("Введите число");

// do {
//   input = +prompt("Введите число");
//   total += input;
// } while (input);

// alert(`Общая сумма чисел равна ${total}`);
