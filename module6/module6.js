"use strict";
// ИМПЕРАТИВНЫЙ КОД - заданная последовательность инструкций (циклы)

// ДЕКЛАРАТИВНЫЙ КОД - описание желаемого результата, а не последовательности действийы
// (команды и функции)

// imperative vs declarative

// imperative
const nums = [1, 2, 3, 4, 5, 6];
const filter = [];

for (let i = 0; i < nums.length; i += 1) {
  if (nums[i] > 3) {
    filter.push(nums[i]);
  }
}

console.log("imperative", filter);

// declarative
const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((value) => {
  return value > 3;
});

console.log("declarative", filteredNumbers); // [4, 5]

// Чистые функции

// Функция с побочными эффектами — функция, которая в процессе
// выполнения может модифицировать или использовать значения
// глобальных переменных, изменять ссылочные аргументы, выполнять
// операции ввода-вывода и т. п.

// imperative
// const numbers = [1, 2, 3, 4, 5];
const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

dirtyMultiply(numbers, 2);

// Произошла мутация исходных данных
console.log(numbers); // [2, 4, 6, 8, 10]

// Чистые функции (pure functions) — функции, результат которых
// зависит только от значений переданных аргументов и стабильных
// переменных локальной области видимости, которые при одинаковых
// аргументах всегда возвращают один и тот же результат, и не имеют
// видимых побочных эффектов, то есть не изменяют состояние программы.

//   const numbers = [1, 2, 3, 4, 5];
const pureMultiply = (array, value) => {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i] * value);
  }

  return result;
};

const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers, 2); // [1, 2, 3, 4, 5]

// Функция вернула новый массив с измененными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

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

// const numbers = [1, 2, 3];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// Функциональный forEach
numbers.forEach((num) => console.log("forEach:", num));

// Указываем параметр idx если нужен доступ к счетчику
numbers.forEach((num, idx) =>
  console.log(`forEach: index ${idx}, value ${num}`)
);

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

// == 1 ==
// const numbers = [1, 2, 3];

const doubleNumbers = numbers.map((num) => num * 2);
console.log("map: ", doubleNumbers); // [2, 4, 6]

// == 2 ==
const users = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true },
];

// Для каждого элемента коллекции (user) вернем значение поля name
const names = users.map((user) => user.name);

console.log("map: ", names); // ["Mango", "Poly", "Ajax"]

// === Array.prototype.filter() ===
// Применяет callback-функцию к каждому элементу исходного массива и если результат ее выполнения имеет значение true, то копирует значение из исходного массива в новый массив. Исходный и новый массив могут иметь разную длину. Не мутирует иходный массив. Всегда возвращает массив, даже если в нем всего 1 элемент. Если ничего не найдено, вернет пустой массив. Используется когда необходимо найти более одного элемента в коллекции.
// array.filter(callback[currentValue, index, array])
// Используется для фильтрации массива
// Перебирает
// Не изменяет
// Возвращает коллекцию

// == 1 ==

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  "filter: ",
  numbers.filter((num) => num > 5)
); // [6, 7, 8, 9]

console.log(
  "filter: ",
  numbers.filter((num) => num < 5)
); // [0, 1, 2, 3, 4]

console.log(
  "filter: ",
  numbers.filter((num) => num === 5)
); // [5]

// == 2 ==

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно true, то текущий элемент (user) будет записан в результирующий массив.
const activeUsers = users.filter((user) => user.isActive);
console.log("filter: ", activeUsers);

// Для каждого элемента коллекции (user) проверим поле isActive.
// Если оно false, то текущий элемент (user) будет записан в результирующий массив.
const inactiveUsers = users.filter((user) => !user.isActive);
console.log("filter: ", inactiveUsers);

// === Array.prototype.find() ===

// будет искать до первого совпадения,
// после чего прервет свое выполнение.

// Применяет callback-функцию к каждому элементу исходного массива и если результат ее выполнения имеет значение true, то возвращает этот элемент и завершает свое выполнение. Если ничего не найдено, вернет undefined.
// array.find(callback[currentValue, index, array])

// Используется для поиска уникального элемента массива
// Перебирает
// Не изменяет
// Возвращает элемент

// == 1 ==
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.find((num) => num > 5)); // 6
console.log(numbers.find((num) => num < 5)); // 0
console.log(numbers.find((num) => num === 5)); // 5

// == 2 ==
const allUsers = [
  { id: "000", name: "Mango", isActive: true },
  { id: "001", name: "Poly", isActive: false },
  { id: "002", name: "Ajax", isActive: true },
  { id: "003", name: "Chelsey", isActive: false },
];

// Для каждого элемента коллекции (user) проверим поле id.
// Если оно совпадает с искомым идентификатором, то find прекратит
// выполнение и вернет текущий элемент (user) как результат выполнения
const user = allUsers.find((user) => user.id === "002");
console.log("find: ", user);

// Создадим функцию которая будет возвращать нам пользователя по id
const getUserById = (arr, id) => arr.find((x) => x.id === id);

console.log(getUserById("find: ", allUsers, "001"));
console.log(getUserById("find: ", allUsers, "003"));
