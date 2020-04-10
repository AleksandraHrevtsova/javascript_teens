"use strict";
// ============== 5 ===============================================
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