// "use strict";

// ==================== 1 ========================
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
// и возвращает имя самого продуктивного (который выполнил больше всех задач).
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта
// в формате "имя":"кол-во задач".

// const findBestEmployee = function (employees) {
//   // твой код
//   // =============== MINE ====================
//   const arrOfValues = Object.values(employees);
//   let maxValue = Math.max.apply(null, arrOfValues);
//   let key = Object.keys(employees)
//     .filter((k) => employees[k] === maxValue)
//     .join();
//   return key;

//   // =============== MINE ====================
// };

// // Вызовы функции для проверки работоспособности твоей реализации.
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// ==================== 2 ========================
// Напиши функцию getAllPropValues(arr, prop), которая получает
// массив объектов и имя свойства. Возвращает массив значений
// определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   // твой код
//   // =============== MINE ====================
//   //   // ==== 1 ====
//   //   let arrOfValues = [];
//   //   for (let i = 0; i < arr.length; i += 1) {
//   //     // console.log(arr[i]);
//   //     let arrOfObjectEntries = Object.entries(arr[i]);
//   //     // console.log(arrOfObjectEntries);
//   //     for (let el of arrOfObjectEntries)
//   //       if (el[0] === prop) {
//   //         arrOfValues.push(el[1]);
//   //       }
//   //   }
//   //   return arrOfValues;
// //   // ==== 2 ====
// //   return arr.reduce(function (result, item) {
// //     if (
// //       result.indexOf(item[prop]) == -1 && // if need unique values
// //       typeof item[prop] != "undefined"
// //     )
// //       // if don't want undefined's
// //       result.push(item[prop]);
// //     return result;
// //   }, []);
//   // =============== MINE ====================
// };

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []

// ==================== 3 ========================
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.
// Типов транзацкий всего два.
// Можно положить либо снять деньги со счета.
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
//Каждая транзакция это объект со свойствами: id, type и amount
const TransactionObj = function (type, amount) {
  this.id = Date.now();
  this.type = type;
  this.amount = amount;
};
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  // Метод создает и возвращает объект транзакции.
  // Принимает сумму и тип транзакции.
  createTransaction(amount, type) {
    let transaction = new TransactionObj(type, amount);
    this.transactions.push(transaction);
    console.log(this.transactions);
    return console.log("новая транзакция", transaction);
  },
  // Метод отвечающий за добавление суммы к балансу.
  // Принимает сумму транзакции.
  // Вызывает createTransaction для создания объекта транзакции
  // после чего добавляет его в историю транзакций
  deposit(amount) {
    createTransaction();
  },
  // Метод отвечающий за снятие суммы с баланса.
  // Принимает сумму танзакции.
  // Вызывает createTransaction для создания объекта транзакции
  // после чего добавляет его в историю транзакций.
  // Если amount больше чем текущий баланс, выводи сообщение
  // о том, что снятие такой суммы не возможно, недостаточно средств.
  withdraw(amount) {},
  //Метод возвращает текущий баланс
  getBalance() {},
  //Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {},
  // Метод возвращает количество средств
  // определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {},
};

account.createTransaction(100, "deposit");
