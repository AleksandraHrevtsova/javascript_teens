"use strict";
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате.
// При загрузке страницы у посетителя запрашивается пароль через prompt:
// __MCE_ITEM____MCE_ITEM__·
// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// __MCE_ITEM____MCE_ITEM__·
// В протовном случае, если введен пароль который совпадает со значением
// константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// __MCE_ITEM____MCE_ITEM__·
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
// записать в message строку 'Доступ запрещен, неверный пароль!'
// __MCE_ITEM____MCE_ITEM__·
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message = prompt("введите пароль");
// // console.log(message);

// if (message == null) {
//   console.log("Отменено пользователем!");
// } else if (message === ADMIN_PASSWORD) {
//   console.log("Добро пожаловать!");
// } else {
//   console.log("Доступ запрещен, неверный пароль!");
// }
// alert(message);

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// let passentered = prompt("Enter your password");
// console.log(passentered);

// if (passentered === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!";
//   console.log(message);
// } else if (passentered === null) {
//   message = "Отменено пользователем!";
//   console.log(message);
// } else {
//   message = "Доступ запрещен, неверный пароль!";
//   console.log(message);
// }
// alert(message);
