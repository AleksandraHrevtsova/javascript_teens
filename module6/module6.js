"use strict";

// ИМПЕРАТИВНЫЙ КОД - заданная последовательность инструкций (циклы)

// ДЕКЛАРАТИВНЫЙ КОД - описание желаемого результата, а не последовательности действийы
// (команды и функции)

// imperative vs declarative

// imperative

const array = [1, 2, 4, 8, 27, 23, 21]; // исходный массив
const filterArray = [];

for (let i = 0; i < array.length; i += 1) {
  // 1
  if (array[i] > 3) {
    // 2
    filterArray.push(array[i]); // 3
  }
}
console.log("imperative", filterArray); // 4

// declarative

const filteredNumber = array.filter((item) => {
  return item > 3;
}); // 1
console.log("declarative", filteredNumber);

// Чистые функции

// Функция с побочными эффектами — функция, которая в процессе
// выполнения может модифицировать или использовать значения
// глобальных переменных, изменять ссылочные аргументы, выполнять
// операции ввода-вывода и т. п.

// imperative

const dirtyMultiply = (arr, value) => {
  for (let j = 0; j < arr.length; j += 1) {
    arr[j] *= value; // arr[j] = arr[j] * value;
  }
};

console.log("исходный массив", array);
dirtyMultiply(array, 5);
console.log("измененный исходный массив", array);

// измененный исходный массив
// Чистые функции (pure functions) — функции, результат которых
// зависит только от значений переданных аргументов и стабильных
// переменных локальной области видимости, которые при одинаковых
// аргументах всегда возвращают один и тот же результат, и не имеют
// видимых побочных эффектов, то есть не изменяют состояние программы.

const cleanMultiply = (arr, value) => {
  const result = [];
  for (let k = 0; k < arr.length; k += 1) {
    result.push(arr[k] * value);
  }
  return console.log("ретерн", result);
};

console.log("исходный массив", array);
cleanMultiply(array, 5);
console.log("не изменившийся исходный массив", array);

// ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА

// В JavaScript есть методы массивов пришедшие из функциональных языков.
// Они получают исходный массив, создают новый пустой массив и заполняют
// его, применяя к копии значения каждого элемента указанную
// callback-функцию.

// Все функциональные методы массивов имеют схожий синтаксис.
// Исходный массив array, вызов метода method и callback-функция
// callback в качестве аргумента метода.

// array.method(callback[currentValue, index, array]);

// В большинстве методов, аргументами callback-функции являются
// значение элемента currentValue (первый параметр), позиция элемента
// index (второй параметр) и сам исходный массив array (третий параметр).

// array.method((item, idx, arr) => {
//     // логика которая будет применяться на каждой итерации
//   });

// Все параметры кроме значения элемента item необязательны. Названия
// параметров могут быть любые, но есть неофициальные соглашения.

// array.method(item => {
//     // логика которая будет применяться на каждой итерации
//   });

// === Array.prototype.forEach() === замена цикла for
// ничего не возвращает, просто перебирает коллекцию.

// array.forEach(callback[currentValue, index, array])
// Перебирает
// Может изменять
// Не возвращает

const arrNumber = [1, 4, 3, 14, 16, 2, 90];

for (let i = 0; i < arrNumber.length; i += 1) {
  console.log("for", arrNumber[i]);
}
// Функциональный forEach
arrNumber.forEach((el) => console.log("forEach", el));

// Указываем параметр idx если нужен доступ к счетчику
arrNumber.forEach((el, x) => console.log(`forEach: index ${x}, value ${el}`));

const tests = ["test-1", "test-2", "test-3", "test-4", "test-5", "test-6"];
tests.forEach((test) => console.log(test));

// === Array.prototype.map() ===
// Используется для транформации массива.
// Применяет callback-функцию к каждому элементу исходного массива,
// результат работы callback-функции записывает в новый массив,
// который и будет результатом выполнения метода. Исходный и новый
// массив всегда имеют одинаковую длину. Не мутирует иходный массив.

// array.map(callback[currentValue, index, array])
// Используется для трансформации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию

// example 1
console.log("исходный массив", arrNumber);

const doubleNumbers = arrNumber.map((num) => num * 2);
console.log("map:", doubleNumbers);
console.log("исходный массив", arrNumber);

// example 2

const users = [
  { name: "jack", isActive: true },
  { name: "john", isActive: false },
  { name: "Susan", isActive: true },
];

const names = users.map((user) => user.name);
console.log("map:", names);

// === Array.prototype.filter() ===
// Применяет callback-функцию к каждому элементу исходного массива и если результат
//  ее выполнения имеет значение true, то копирует значение из исходного массива в новый массив.
// Исходный и новый массив могут иметь разную длину. Не мутирует иходный массив. Всегда возвращает
// массив, даже если в нем всего 1 элемент. Если ничего не найдено, вернет пустой массив.
// Используется когда необходимо найти более одного элемента в коллекции.

// array.filter(callback[currentValue, index, array])
// Используется для фильтрации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию

// example 1
console.log("исходник", arrNumber); //  [1, 4, 3, 14, 16, 2, 90]
const n1 = [1, 4, 3, 14, 5, 5, 5, 16, 2, 90];
const filteredArray = arrNumber.filter((el) => el > 10);
console.log("filter-1:", filteredArray);

const filteredArray1 = arrNumber.filter((num) => num < 5);
console.log("filter-2:", filteredArray1);

const filteredArray2 = n1.filter((num) => num === 5);
console.log("filter-3:", filteredArray2);

// example 2

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.

// const activeUsers = users.filter((user) => user.isActive === true);

const activeUsers = users.filter((user) => user.isActive);
console.log("filter: active", activeUsers);

// const inActiveUsers = users.filter((user) => user.isActive !== true);
// const inActiveUsers = users.filter((user) => user.isActive === false);

const inActiveUsers = users.filter((user) => !user.isActive);

console.log("filter: inactive", inActiveUsers);

// === Array.prototype.find() ===

// будет искать до первого совпадения,
// после чего прервет свое выполнение.

// Применяет callback-функцию к каждому элементу исходного массива и если результат ее
// выполнения имеет значение true, то возвращает этот элемент и завершает свое выполнение.
// Если ничего не найдено, вернет undefined.

// array.find(callback[currentValue, index, array])

// Используется для поиска уникального элемента массива
// Перебирает
// Не изменяет
// Возвращает элемент

// example 1
const newArr = [1, 2, 3, 2, 1];

const nextToThree = newArr.find((el) => el > 3);
console.log("find:", nextToThree); // undefined

const beforeThree = newArr.find((num) => num < 2);
console.log("find:", beforeThree); // 1

const five = newArr.find((num) => num === 5);
console.log("find:", five); // undefined

// example 2

const newUsers = [
  { id: "01", name: "Mango", isActive: true },
  { id: "01", name: "Poly", isActive: false },
  { id: "002", name: "Ajax", isActive: true },
  { id: "003", name: "Chelsey", isActive: false },
];

const user = newUsers.find((el) => el.id === "002");
console.log(user); // {id: "002", name: "Ajax", isActive: true}

const getUserById = (array, id_value) => array.find((el) => el.id === id_value);

console.log(getUserById(newUsers, "003")); // {id: "003", name: "Chelsey", isActive: false}
console.log(getUserById(newUsers, "01")); // { id: "01", name: "Mango", isActive: true },
console.log(getUserById(newUsers, "000")); // undefined

// === Array.prototype.every(), Array.prototype.some() ===

// === Array.prototype.every(), Array.prototype.some() ===Метод every проверяет,
// прошли ли все элементы массива тест, предоставляемый callback-функцией. Возвращает true,
// если вызов callback-функции вернет true для каждого элемента в array
// array.every(callback[currentValue, index, array])
// Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест,
//  предоставляемый callback-функцией. Возвращает true, если вызов callback-функции
// вернет true хотябы для одного элемента в array.
// array.some(callback[(currentValue, index, array)]);
// Перебирает
// Не изменяет
// Возвращает true или false

// example 1

const sumNums = [1, 20, 31, 4, 500];
const isBig = (val) => val >= 10;

console.log(sumNums.every(isBig)); // false
// как лог оператор && - вернет true, когда все true

console.log(sumNums.some(isBig)); // true
// как лог оператор || - вернет true, когда хотя бы один элемент true

const isBig1 = (val) => val >= 1;
console.log(sumNums.every(isBig1)); // true
console.log(sumNums.some(isBig1)); // true

const isBig2 = (val) => val >= 501;
console.log(sumNums.every(isBig2)); // false
console.log(sumNums.some(isBig2)); // false

// every ==> true, if all elements === true
// some ==> true, if only one element === true

// // example 2

const fruits = [
  { name: "apples", amount: 3 }, // true
  { name: "bananas", amount: 10 }, // true
  { name: "oranges", amount: 1 }, // true
];

const allAvailble = fruits.every((el) => el.amount > 0);
console.log(allAvailble); // true

const anyAvailble = fruits.some((sum) => sum.amount >= 10);
console.log(anyAvailble); // true

// === Array.prototype.reduce() ===

// используется для последовательной обработки каждого элемента массива с сохранением
// промежуточного результата. Швейцарский нож функциональных методов массива.
// Перебирает
// Не изменяет
// Возвращает что угодно

// array.reduce(сallback[(previousValue, currentItem, index, array)],
// initialValue)previousValue — промежуточный результат (аккумулятор)
// currentItem — текущий элемент массива
// index — индекс текущего элемента массива
// array — оригинальный массив

// // example 1
console.log("initial array", sumNums); // [1, 20, 31, 4, 500]
const newSum = sumNums.reduce((acc, el) => acc + el, 0);
//                                   1000 + 1 + 20 + 31 + 4 + 500
//                                       1001 + 20
//                                            1021 + 31
//                                                 1052 + 4
//                                                     1056 + 500
//                                                           1556
console.log("reduce acc", newSum); // 556, если начальное значение 0

let total = 0;

for (let el of sumNums) {
  total += el;
  // 0 += 1
  // 1 += 20
  // 21 += 31
  // 52 += 4
  // 56 += 500 === 556
}

console.log("for ...of", total);
//=======================
// let a = [121, 92, 35, 54];
//       4, 11, 8, 9
// 1 - перебор массива
// 2 - каждый эл-т в строку: "121"
// 3 - строку "121" => ["1", "2", "1"]
// 4 - const sum = arr.reduce((acc, el) => acc + Number(el), 0);
// 5 - arr.push(sum)
//=======================

// // example 2

const tweets = [
  // 0
  { id: "000", likes: 5, tags: ["js", "nodejs"] }, // 5
  { id: "001", likes: 2, tags: ["html", "css"] }, // 7
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] }, // 24
  { id: "003", likes: 8, tags: ["css", "react"] }, // 32
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }, // 32
];
//                           acc, element => //////, начальное значение acc
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
//                                                    0 + 5 + 2 + 17 + 8 + 0
console.log(likes); // 32

const countLikes = (arr) => arr.reduce((acc, el) => acc + el.likes, 0);

console.log(countLikes(tweets)); // 32

const getTags = (array) =>
  //             acc, element => {/////}, начальное значение acc
  array.reduce((acc, elem) => {
    acc.push(...elem.tags);
    //["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

    return acc;
  }, []);

const tags = getTags(tweets);
console.log("все теги объектов", tags);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
};

// // Начальное значение аккумулятора это пустой объект {}
// ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]
const countTags = (arr) => arr.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

// === Array.prototype.sort() === Позволяет сортировать элементы массива на месте.
// Помимо возврата отсортированного массива метод sort также отсортирует массив,
// на котором он был вызван. По умолчанию метод sort сортирует, преобразуя элементы к строке.

// Перебирает
// Изменяет
// Возвращает коллекцию

const alpha = [1, 3, 5, 7, 4, 8, 2, 6];

console.log("before sort:", alpha);
console.log("after sort", alpha.sort());

const clients = ["Jane", "Jack", "Cecile", "Arlo", "Susan"];
console.log("before sort:", clients);
console.log("after sort", clients.sort());
