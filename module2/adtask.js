// "use strict";

// ============== 1 ===============================================
// Объяви функцию homeworkIsDone как FUNCTION EXPRESSION
// в качестве параметров она принимает переменную pass,
// которая принимает значение через модальное окно от преподавателя
// и homework, который принимает следующие значения:
// если преподаватель ввел значение 1, то homework принимает сообщение homework is done!,
// иначе - "You must to pass the homework!"
// в результате, функция должна вывести в консоль подходящее значение homework

// // ======== mine ==========================
// let pass;

// const homeworkIsDone = function (pass, homework) {
//   pass = prompt("Please enter the result of student`s work");
//   console.log(pass);
//   if (pass == true) {
//     homework = "homework is done!";
//   } else {
//     homework = "You must to pass the homework!";
//   }
//   return console.log(homework);
// };

// homeworkIsDone();
// // ======== mine ==========================

// ============== 2 ===============================================
// Преобразуй объявление функции FUNCTION EXPRESSION из задания 1 в ARROW FUNCTION
// с использованием тернарного оператора вместо ветвления

// // ======== mine ==========================
// const homeworkIsDone = (pass, homework) =>
//   (pass =
//     prompt("Please enter the result of student`s work") == true
//       ? (homework = "homework is done!")
//       : (homework = "You must to pass the homework!"));

// console.log(homeworkIsDone());
// // ======== mine ==========================

// ============== 3 ===============================================
// Напиши функцию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

// // ======== mine ==========================
// const findLongestWord = function (string) {
//   let wordsArray = string.split(" "); // преобразуем строку в массив
//   let theLongestWord = wordsArray[0]; // первый элемент массива слов запишем в переменную, с которой будем сравнивать все остальные элементы

//   for (let i = 1; i < wordsArray.length; i++) {
//     // переберем массив слов, начиная со второго элемента (т.е. с индекса 1), потому что первый уже записали как исходный вариант самого длинного слова в переменную theLongestWord
//     if (wordsArray[i].length > theLongestWord.length) {
//       // сравниваем каждый элемент массива с первым
//       theLongestWord = wordsArray[i]; // если он оказывается больше, то записываем или перезаписываем
//     }
//   }
//   return theLongestWord; // по итогу всего цикла нам достанется самый длинный элемент
// };
// // ======== mine ==========================

// // Вызовы функции для проверки работоспособности твоей реализации.
// console.log(
//   findLongestWord(
//     "And by opposing end them. To die—to sleep, No more; and by a sleep to say we end"
//   )
// ); // opposing

// console.log(
//   findLongestWord(
//     "The heart-ache and the thousand natural shocks That flesh is heir to: 'tis a consummation"
//   )
// ); // consummation

// console.log(
//   findLongestWord(
//     "Devoutly to be wish'd. To die, to sleep; To sleep, perchance to dream—ay, there's the rub:"
//   )
// ); // perchance

// ============== 4 ===============================================
// Напиши функцию formatString(string) которая принимает строку и форматирует ее
// если необходимо.
// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и
// добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// // ======== mine ==========================
// const formatString = function (string) {
//   let arrString = string.split(""); // приводим строку к массиву символов

//   if (arrString.length > 40) {
//     // проверяем количество символов в массиве
//     arrString.splice(40, arrString.length - 40, "..."); // если элементов > 40, то заменяет лишние многоточием
//     string = arrString.join("");
//     return string;
//   }
//   return string;
// };
// // ======== mine ==========================

// //  Вызовы функции для проверки работоспособности твоей реализации.

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
// // вернется форматированная строка
