// "use strict";

// // ============== 1 ===============================================
// // Объяви функцию homeworkIsDone как FUNCTION EXPRESSION
// // в качестве параметров она принимает переменную pass,
// // которая принимает значение через модальное окно от преподавателя
// // и homework, который принимает следующие значения:
// // если преподаватель ввел значение 1, то homework принимает сообщение homework is done!,
// // иначе - "You must to pass the homework!"
// // в результате, функция должна вывести в консоль подходящее значение homework

// // ======== mine ==========================
// // let pass;

// // const homeworkIsDone = function(pass, homework) {
// //   pass = prompt("Please enter the result of student`s work");
// //   console.log(pass);
// //   if (pass == true) {
// //     homework = "homework is done!";
// //   } else {
// //     homework = "You must to pass the homework!";
// //   }
// //   return console.log(homework);
// // };

// // homeworkIsDone();
// // ======== mine ==========================
// // let pass;

// // const homeworkIsDone = function(pass, homework) {
// //   pass = prompt("Please enter the result of student`s work");
// //   if (pass == 1) {
// //     homework = "homework is done!";
// //     return console.log(homework);
// //   }
// //   homework = "You must to pass the homework!";
// //   return console.log(homework);
// // };

// // homeworkIsDone();
// // ============== 2 ===============================================
// // Преобразуй объявление функции FUNCTION EXPRESSION из задания 1 в ARROW FUNCTION
// // с использованием тернарного оператора вместо ветвления
// // ======== mine ==========================
// // const homeworkIsDone = (pass, homework) =>
// //   (pass =
// //     prompt("Please enter the result of student`s work") == true
// //       ? (homework = "homework is done!")
// //       : (homework = "You must to pass the homework!"));

// // console.log(homeworkIsDone());
// // ======== mine ==========================

// // // ============== 3 ===============================================
// // // Напиши функцию findLongestWord(string), которая принимает параметром
// // // произвольную строку (в строке будут только слова и пробелы)
// // // и возвращает самое длинное слово в этой строке.

// // // ======== mine ==========================
// // const findLongestWord = function(string) {
// //   let wordsArray = string.split(" "); // преобразуем строку в массив
// //   //   console.log("массив из слов строки", wordsArray);

// //   // первый элемент массива слов запишем в переменную
// //   // с которой будем сравнивать все остальные элементы
// //   let theLongestWord = wordsArray[0];
// //   //   console.log("самое длинное слово", theLongestWord);

// //   // переберем массив слов, начиная со второго элемента (т.е. с индекса 1),
// //   // потому что первый уже записали как исходный вариант
// //   // самого длинного слова в переменную theLongestWord
// //   for (let i = 1; i < wordsArray.length; i++) {
// //     // сравниваем каждый элемент массива с первым
// //     if (wordsArray[i].length > theLongestWord.length) {
// //       // если он оказывается больше, то записываем или перезаписываем
// //       theLongestWord = wordsArray[i];
// //     }
// //   }
// //   // по итогу всего цикла нам достанется самый длинный элемент
// //   return theLongestWord;
// // };
// // // ======== mine ==========================
// const findLongestWord = function(string) {
//   let wordsMassive = string.split(" ");
//   let longWord = wordsMassive[0];

//   for (let i = 1; i < wordsMassive.length; i++) {
//     if (wordsMassive[i].length > longWord.length) {
//       longWord = wordsMassive[i];
//     }
//   }
//   console.log(longWord);
// };
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

// // ============== 4 ===============================================
// // Напиши функцию formatString(string) которая принимает строку и форматирует ее
// // если необходимо.
// // Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// // Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и
// // добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// // // ======== mine ==========================
// // const formatString = function(string) {
// //   //   console.log(string);
// //   let arrString = string.split(""); // приводим строку к массиву символов
// //   //   console.log(arrString);
// //   if (arrString.length > 40) {
// //     // проверяем количество символов в массиве
// //     arrString.splice(40, arrString.length - 40, "..."); //
// //     // console.log(arrString);
// //     string = arrString.join("");
// //     // console.log(string);
// //     return string;
// //   }
// //   return string;
// // };
// // ======== mine ==========================
// const formatString = function(string) {
//   let arrString = string.split("");

//   if (arrString.length > 40) {
//     arrString.splice(40, arrString.length - 40, "...");
//     string = arrString.join("");
//     return string;
//   }
//   return string;
// };
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

// // ============== 5 ===============================================
// // Напиши скрипт со следующим функционалом:
// // При загрузке страницы пользователю предлагается в prompt ввести число.
// // Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// // Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// // пока пользователь не нажмет Cancel в prompt.
// // После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// // необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// // Используй цикл for или for...of. После чего в консоль выведи строку
// //'Общая сумма чисел равна [сумма]'.
// // 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов,
// //  не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом
// // 'Было введено не число, попробуйте еще раз',
// // при этом результат prompt записывать в массив чисел не нужно,
// // после чего снова пользователю предлагается ввести число в prompt.

// // ============== 6 ===============================================
// // // // Есть массив allLogins с логинами пользователей.
// // // Напиши скрипт добавления логина в массив allLogins. Добавляемый логин должен:

// // // // проходить проверку на длину от 4 до 16-ти символов включительно
// // // // быть уникален, то есть отсутствовать в массиве allLogins
// // // // Разбей задачу на подзадачи с помощью функций.

// // // // Напиши функцию isLoginValid(login),
// // // в которой проверь количество символов параметра login и верни true или false
// // // в зависимости от того, попадает ли длина параметра в заданный диапазон
// // // от 4-х до 16-ти символов включительно.

// // // // Напиши функцию isLoginUnique(allLogins, login),
// // // которая принимает список всех логинов и добавляемый логин как параметры
// // // и проверяет наличие login в массиве allLogins, возвращая true если такого логина
// // // еще нет и false если логин уже используется.

// // // let login = prompt("Enter your login please");
// // const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// // // console.log(logins);
// // let allLoginsLength = logins.length;
// // console.log("длина массива", allLoginsLength);

// // let login = "dff";
// // console.log("текущий логин", login);
// // let loginLength = login.length;
// // console.log("длина текущего логин", loginLength);

// // const isLoginValid = function(login) {
// //   // проверяю кол-во символов в введенном логине
// //   if (loginLength >= 4 && loginLength <= 16) {
// //     return console.log("валидность 4-16 символов", true);
// //   }
// //   return console.log("валидность 4-16 символов", false);
// // };
// // isLoginValid(login);

// // const isLoginUnique = function(logins, login) {
// //   console.log(logins);
// //   // перебор
// //   for (let i = 0; i < logins.length; i += 1) {
// //     console.log(logins[i]);
// //     console.log("логин в цикле", login);
// //     if (logins[i] !== login) {
// //       return console.log("логин уникален?", true);
// //     }
// //     return console.log("логин уникален?", false);
// //   }
// // };
// // isLoginUnique(logins, login);

// // // Напиши функцию addLogin(allLogins, login) которая:
// // Принимает новый логин и массив всех логинов как параметры
// // Проверяет валидность логина используя вспомогательную функцию isLoginValid
// // Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// // Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// // Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// // Если isLoginUnique вернет true, addLogin добавляет новый логин в allLogins и возвращает строку 'Логин успешно добавлен!'
// // 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код
// // и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// // // Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is:
// // // isLoginUnique и isLoginValid в нашем случае.
// // // isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// // // isLoginValid только проверяет валидный ли логин и возвращает true или false.
// // // addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует
// // // результаты вызовов других функций - isLoginUnique и isLoginValid.

// // const addLogin = function(logins, login) {
// //   if (isLoginValid() == false) {
// //     return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
// //   }
// //   if (isLoginUnique() == true) {
// //     return console.log("Такой логин уже используется!");
// //   }
// //   logins.push(login);
// //   return console.log("Логин успешно добавлен!");
// // };

// // // Вызовы функции для проверки работоспособности твоей реализации.

// // addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
// // // console.log(logins(allLogins, "robotGoogles")); // 'Такой логин уже используется!'
// // // console.log(logins(allLogins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// // // console.log(logins(allLogins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
