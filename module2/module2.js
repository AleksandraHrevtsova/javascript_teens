"use strict";
// ============== занятие 1 ========
// МАССИВЫ

// const arr = [];
// console.log(arr);

// const students = ["Den", "Nick", "Dave", "Helen"];
// console.log(students); // ["Den", "Nick", "Dave", "Helen"]

// // Доступ к элементам
// console.log(students[0]); // Den
// console.log(students[1]); // Nick
// console.log(students[2]); // Dave
// console.log(students[3]); // Helen
// console.log(students[4]); // undefined

// Переопределение
// замена
// students[0] = "Roy";
// console.log(students[0]); // Roy
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen"]

// добавление
// students[4] = "Mary";
// console.log(students[4]); // Mary
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen", "Mary"]

// длина массива
// текущее количество элементов
// console.log(students.length); // 5

// // // добавить элемент/ы
// students.length = 10;
// console.log(students.length); // 10
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen", "Mary", empty]
// console.log(students[5]); // undefined
// console.log(students[6]); // undefined
// console.log(students[7]); // undefined

// // убрать элемент/ы
// students.length = 4;
// console.log(students.length);
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen"]

// // итерация по массиву

// // перебор массива
// for (let i = 1; i < students.length; i += 2) {
//   console.log("students item: ", students[i]);
// }

// ЦИКЛ СО СЧЕТЧИКОМ, МОЖНО УКАЗАТЬ ШАГ, СКОЛЬКО СТУПЕНЕК ПЕРЕСТУПАЕМ
// for (С какого эл-та перебор; ДО какого эл-та (условие); с каким шагом (каждый 1й, 2й, 3й ...)) {

// }

// ЦИКЛ, перебирающий каждый элемент массива, наступает на каждую ступень с самого начала до самого конца
// for (ПРОСИТ ОБОЗВАТЬ ЭЛЕМЕНТ МАССИВ of УКАЖИ САМ МАССИВ) {

// }

// // заполнение данными
// for (let i = 0; i <= 6; i += 2) {
//   students.push(`The best student - ${i}`);
// }
// console.log("students list: ", students); //  students list: ["Roy", "Nick", "Dave", "Helen", "student-0", "student-1", "student-2"]
// console.log(students.length);

// // FOR...OF альтернатива циклу FOR, если не нужен счетчик
// // по массиву
// for (const student of students) {
//   console.log(student);
// }

// const house = ["flat-1", "flat-2", "flat-3", "flat-4", "flat-5"];
// for (const aFlat of house) {
//   console.log(aFlat);
// }

// const week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// for (const aDay of week) {
//   console.log(aDay);
// }

// // по строке
// const name = "Aleksandra is a teacher!";
// console.log(name);

// for (const character of name) {
//   console.log(character);
// }

// // BREAK & CONTINUE

// // найти совпадение или не совпадение и вывести сообщение об этом

// // example 1
// let studentName;
// console.log("имя студента", studentName);
// // studentName = prompt("Enter your name please");

// const studentsNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Helen",
//   "Mary",
//   "Sarah",
//   "Charly",
//   "Bob"
// ];
// console.log("список студентов", studentsNew);

// const studentsNotNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Dick",
//   "Mary",
//   "Olga",
//   "Charly",
//   "Bob"
// ];
// studentName = studentsNotNew[Math.floor(studentsNotNew.length * Math.random())];
// console.log(studentName);
// // console.log("имя студента", studentName);

// let message;

// for (const student of studentsNew) {
//   if (student === studentName) {
//     message = "A student with this name already is in the database";
//     break;
//   }
//   message = "Welcome in our database of unique names!";
// }
// console.log(`${studentName}, ${message}`);

// // example 2

// let myCars = ["Land Rover", "WV", "Subaru"];
// let myCar = myCars[Math.floor(myCars.length * Math.random())];

// const worldCarsList = [
//   "BMW",
//   "Toyota",
//   "Mersedes",
//   "Porshe",
//   "Audi",
//   "Lexus",
//   "Honda",
//   "Mazda",
//   "Land Rover",
//   "Nissan",
//   "Subaru"
// ];

// let msg;

// for (const car of worldCarsList) {
//   if (car === myCar) {
//     console.log(car);
//     msg = "Оу, у меня была такая тачка!";
//     break;
//   }
//   msg = "У меня не было еще такой машины! А жаль...";
// }
// console.log(`${myCar}, ${msg}`);

// директива continue

// example 1

// const nums = [1, 5, 13, 45, 467, 99, 3, 23];
// console.log(nums.length);
// console.log(nums[0]);

// const numMore = 34;

// for (let i = 0; i < nums.length; i += 1) {
//   if (nums[i] < numMore) {
//     continue;
//   }
//   console.log(`This number is more then ${numMore}: ${nums[i]}`);
// }

// example 2

// const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const minLevel = 12;

// for (let i = 0; i < test1.length; i += 1) {
//   if (test1[i] < minLevel) {
//     continue;
//   }
//   console.log(`test1: `, test1[i]);
// }

// МНОГОМЕРНЫЕ МАССИВЫ

const house = [
  [0.1, 0.2, 0.3], // [0]
  [1.1, 1.2, 1.3], // [1]
  [2.1, 2.2, 2.3] // [2]
];
console.log(house);

// console.log(house[0][0]); // 1
// console.log(house[0][1]); // 2
// console.log(house[0][2]); // 3

// console.log(house[1][0]); // 11
// console.log(house[1][1]); // 22
// console.log(house[1][2]); // 33

// console.log(house[2][0]); // 111
// console.log(house[2][1]); // 222
// console.log(house[2][2]); // 333

// // вложенные циклы для перебора вложенных массивов
// let total = 0;

for (let i = 0; i < house.length; i += 1) {
  console.log("Вложенный массив ", house[i]);
  for (let j = 0; j <= house.length; j += 1) {
    console.log("Элемент вложенного массива", house[i][j]);
    // total += house[i][j];
  }
}
// // console.log(total);

// // ============== занятие 2 ========

// // // присвоение по значению (для примитивов)
// // // ex 1
// // let a = 5;
// // let b = a;
// // console.log(a); // 5
// // console.log(b); // 5

// // a = 10;
// // console.log(a); // 10
// // console.log(b); // 5

// // // ex 2
// // let lastName = "Hrevtsova";
// // let newLastName = lastName;

// // console.log(lastName);
// // console.log(newLastName);

// // lastName = "Boreikina";
// // console.log(lastName);
// // console.log(newLastName);

// // // присвоение по ссылке (для сложных типов)
// const units = ["alpha", "beta", "gamma"];
// const newUnits = units;

// console.log("units", units); // ["alpha", "beta", "gamma"]
// console.log("newUnits", newUnits); // ["alpha", "beta", "gamma"]

// units[0] = "1";
// console.log("units", units); // ["1", "beta", "gamma"];
// console.log("newUnits", newUnits); // ["1", "beta", "gamma"]

// // МЕТОДЫ МАССИВОВ

// // Добавление элементов

// // .push() добавляет новый эл-т в конец массива
// units.push("delta");
// console.log("units", units); // ["1", "beta", "gamma", "delta"]
// console.log("newUnits", newUnits); // ["1", "beta", "gamma", "delta"]

// // .unshift() добавляет новый эл-т в начало массива
// newUnits.unshift("epsilon");
// console.log("newUnits", newUnits); // ["epsilon", "1", "beta", "gamma", "delta"]
// console.log("units", units); // ["epsilon", "1", "beta", "gamma", "delta"]

// // Удаление элементов
// // .pop() удаляет последний эл-т из массива
// units.pop();
// console.log("units", units); // ["epsilon", "1", "beta", "gamma"]
// console.log("newUnits", newUnits); // ["epsilon", "1", "beta", "gamma"]

// newUnits.pop();
// console.log("newUnits", newUnits); // ["epsilon", "1", "beta"]
// console.log("units", units); // ["epsilon", "1", "beta"]

// // .shift() удаляет первый, с индексом [0], эл-т из массива
// units.shift();
// console.log("units", units); // ["1", "beta"]
// console.log("newUnits", newUnits); // ["1", "beta"]

// // СОБРАТЬ ЭЛЕМЕНТЫ
// // .join() массив в строку
// console.log(units.join("")); // 1beta
// console.log(units.join(", ")); // 1, beta
// console.log(units.join("-")); // 1-beta
// console.log(units.join(" - ")); // 1 - beta
// console.log(units.join("x")); // 1xbeta

// // РАЗБИТЬ ЭЛЕМЕНТЫ
// // .split() строку в массив
// const msg = "Welcome to my world!";
// console.log(msg.split(" ")); //  ["Welcome", "to", "my", "world!"]
// console.log(msg.split("m")); // ["Welco", "e to ", "y world!"]
// console.log(msg.split("")); //  ["W", "e", "l", "c", "o", "m", "e", " ", "t", "o", " ", "m", "y", " ", "w", "o", "r", "l", "d", "!"]

// const msg1 = "Welcome,to,my,world!";
// console.log(msg1.split(",")); // ["Welcome", "to", "my", "world!"]

// // НАЙТИ ЭЛЕМЕНТЫ

// // по индексу

// // .indexOf() индекс элемента, если он есть в массиве, иначе -1
// console.log(units.indexOf("beta")); // 1
// console.log(units.indexOf("b")); // -1

// // по наличию

// // .includes() указывает наличие или отсутствие элемента в массиве
// console.log(msg.includes("to")); // true
// console.log(msg.includes("WORLD")); // false
// console.log(msg.includes("world")); // true
// console.log(msg.includes("!")); // true
// console.log(msg.includes("t")); // true

// // // проверка множества условий
// // const fruit1 = "apple";
// // if (fruit1 === "apple" || fruit1 === "strawberry") {
// //   console.log("it`s a red fruit");
// // }

// // const redFruits = ["apple", "strawberry", "cherry", "cranberry"];
// // const fruit = prompt("Enter a fruit please");

// // if (redFruits.includes(fruit)) {
// //   console.log("it`s a red fruit");
// // } else {
// //   console.log("it`s not a red fruit");
// // }

// // СКОПИРОВАТЬ МАССИВ
// // .slice(a, b) копирует эл-ы от a до b, не включая b в - НОВЫЙ МАССИВ
// const numList = [0, 1, 2, 3, 4, 5, 6, 7]; // исходный массив
// // ===== если передаем два параметра
// // (1 - с какого индекса начинаем; 2 - до какого (не включительно) копируем)
// let sliceList = numList.slice(0, 3);
// console.log(sliceList); // [0, 1, 2] - НОВЫЙ МАССИВ

// sliceList = numList.slice(1, 2);
// console.log(sliceList); // [1] - НОВЫЙ МАССИВ

// sliceList = numList.slice(1, 5);
// console.log(sliceList); // [1, 2, 3, 4] - НОВЫЙ МАССИВ

// sliceList = numList.slice(2, 4);
// console.log(sliceList); // [2, 3] - НОВЫЙ МАССИВ

// // ===== если передаем 1 параметр, то он расценивается методом,
// // как 1 - с какого индекса начинаем; а вторым считается по умолчанию - последний элемент исходного массива
// sliceList = numList.slice(1);
// console.log(sliceList); // [1, 2, 3, 4, 5, 6, 7] - НОВЫЙ МАССИВ

// sliceList = numList.slice(3);
// console.log(sliceList); // [3, 4, 5, 6, 7] - НОВЫЙ МАССИВ

// sliceList = numList.slice(4);
// console.log(sliceList); // [4, 5, 6, 7] - НОВЫЙ МАССИВ

// // ===== если не указать параменты в методе вообще,
// // то будет скопирован полностью весь массив и создан новый массив, идентичный исходному
// console.log("numList", numList.slice()); // [0, 1, 2, 3, 4, 5, 6, 7]

// // ===== если указать отрицательное значение параметра, то
// // в новый массив запишется то количество элементов исходного массива С КОНЦА,
// // сколько указано в параметре отрицательного значения
// console.log("numList", numList.slice(-1)); // [7]
// console.log("numList", numList.slice(-2)); // [6, 7]
// console.log("numList", numList.slice(-3)); // [5, 6, 7]
// // (т.е. число указывает на кол-во элементов,
// // а знак "-" на то, что эти элементы копируем с конца исходного массива)
// const newNumList = numList.slice(-4);
// console.log("newNumList", newNumList);

// // ШВЕЙЦАРСКИЙ НОЖ
// // .splice() изменяет исходный массив

// // удаляет/вырезает (начальный индекс, кол-во эл-ов)
// console.log("numList", numList); // [0, 1, 2, 3, 4, 5, 6, 7] - исходный массив

// let spliceArr = numList.splice(0, 2);
// console.log("spliceArr", spliceArr); // [0, 1] - НОВЫЙ МАССИВ из удаленных элементов
// console.log("numList", numList); // [2, 3, 4, 5, 6, 7] - измененный исходный массив

// // // вставляет (начальный индекс, всегда 0, el1, el2, ...)
// spliceArr = numList.splice(0, 0, 1);
// console.log("spliceArr", spliceArr); // [] - ничего не записалось, новый массив не создается
// console.log("numList", numList); // [1, 2, 3, 4, 5, 6, 7] - еще раз измененный исходный массив

// spliceArr = numList.splice(7, 0, "8", "9");
// console.log("spliceArr", spliceArr); // [] - ничего не записалось, новый массив не создается
// console.log("numList", numList); // [1, 2, 3, 4, 5, 6, 7, "8", "9"] - и еще раз измененный исходный массив

// spliceArr = numList.splice(3, 0, 9889);
// console.log("spliceArr", spliceArr); // [] - ничего не записалось, новый массив не создается
// console.log("numList", numList); // [1, 2, 3, 9889, 4, 5, 6, 7, "8", "9"] и еще разок измененный массив

// console.log(numList.splice(4, 0, "a")); // [] - ничего не записалось, новый массив не создается
// console.log("numList", numList); // [1, 2, 3, 9889, "a", 4, 5, 6, 7, "8", "9"] - и угадайте, что? да-да, изменился исходный массив!

// // заменяет
// spliceArr = numList.splice(3, 1, "Js");
// console.log("spliceArr", spliceArr); // [9889] - НОВЫЙ МАССИВ из удаленного элемента вследствии его замены
// console.log("numList", numList); // [1, 2, 3, "Js", "a", 4, 5, 6, 7, "8", "9"] - измененный исходный массив

// spliceArr = numList.splice(3, 3, "ALFA");
// console.log("spliceArr", spliceArr); // ["Js", "а", 5] - НОВЫЙ МАССИВ из удаленных элементов вследствии их замены
// console.log("numList", numList); // [1, 2, 3, "ALFA", 5, 6, 7, "8", "9"] - измененный исходный массив

// spliceArr = numList.splice(3, 3, "BETA", "GAMMA");
// console.log("spliceArr", spliceArr); // ["ALFA", 5, 6] - НОВЫЙ МАССИВ из удаленных элементов вследствии их замены
// console.log("numList", numList); // [1, 2, 3, "BETA", "GAMMA", 7, "8", "9"] и снова измененный массив

// // // ОБЪЕДИНЕНИЕ МАССИВОВ
// // // .concat()
// // const arr1 = ["Hello"];
// // const arr2 = ["World!"];
// // const lang = arr1.concat(arr2);
// // console.log(lang.join(", "));

// // const test1 = ["1", 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// // const test2 = ["2", 17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
// // const test3 = ["3", 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];

// // const allTests = test1.concat(test2).concat(test3);
// // console.log(allTests);

// FUNCTIONS

// function expression (with variable)

// // объявление функции
// //                 (parametres)
// const add = function(a, b, c) {
//   return a + b + c;
// };

// // вызов функции
// //               (arguments)
// const result = add(1, 2, 3);
// console.log(result); // 6

// console.log(add(5, 10, 15)); // 30
// console.log(add(299, 14, 121)); // 434

// // ПОРЯДОК ВЫПОЛНЕНИЯ КОДА
// // объявление
// const fn1 = function() {
//   console.log("1я функция начала выполняться"); // 2.1 - done
//   // // вызов
//   fn2(); // DONE
//   console.log("Продолжение выполнения 1й функции после выхода из 2й функции"); // 2.3 - done
// };

// const fn2 = function() {
//   console.log("Выполняется 2я функция"); // 2.2 - done
// };

// // вызов
// console.log("Начато выполнение основного кода"); // 1 - done
// fn1(); // 2 - done
// console.log("Продолжение выполнения основного кода после выхода из 1й функции"); // 3 -done

// // параметры по умолчанию
// const count = function(a = 0, b = 10, c = 1) {
//   console.log(`countFrom = ${a}, countTo = ${b}, step = ${c}`);

//   for (let i = a; i <= b; i += c) {
//     console.log(i);
//   }
// };

// count(1, 5); // a = 1, b = 5, | c = 1 - подставится из дефолтного параметра
// count(2); // a = 2, | b = 10, c = 1 - подставятся из дефолтного параметра
// count(undefined, 5, 2); // a = 0, b = 5, c = 2
// count(); // a = 0, b = 10, c = 1

// псевдомассив ARGUMENTS (спец локальная переменная)
// хранит все аргументы, как псевдомассив
// может содержать отличное от параметров число аргументов

const sum = function() {
  let total = 0;

  for (const argument of arguments) {
    total += argument;
  }

  return total;
};

console.log(sum(1, 2, 3)); // 6
console.log(sum(2, 4, 6, 8)); // 20
console.log(sum(5, 10, 15, 20)); // 50

// преобразование псевдомассива
// (псевдомассивы не имеют большинства методов массивов, но...)

// // 1
// const fn = function() {
// В переменной args будет полноценный массив
//     const args = Array.from(arguments);
// };

// 2
const fn = function(...args) {
  // В переменной args будет полноценный массив
};

// GUARD CLAUSE
// 1 - with if...else
const takeCash = function(amount, balance) {
  if (amount === 0) {
    console.log("Enter the summ please");
  } else if (amount > balance) {
    console.log("No money, no honey");
  } else {
    console.log("Please take your cash");
  }
};

takeCash(0, 300);
takeCash(500, 300);
takeCash(100, 300);

// 2 - with operator return;
const takeCash1 = function(amount1, balance1) {
  if (amount1 === 0) {
    console.log("Enter the summ plese");
    return;
  }
  if (amount1 > balance1) {
    console.log("No money, no honey");
    return;
  }
  console.log("Please take your cash");
};
takeCash1(0, 300);
takeCash1(500, 300);
takeCash1(100, 300);

// FUNCTION DECLARATION (without variable)

// такую функцию можно вызвать до ее объявления - надо быть осторожным с такой записью

console.log(summNumbers(1, 2, 3));
modalMsg("Hello World!");

function summNumbers(a, b, c) {
  return a + b + c;
}

function modalMsg(str) {
  console.log(str);
}

// GLOBAL SCOPE && LOCAL SCOPE == FUNCTION SCOPE || BLOCK SCOPE

// ====================== GLOBAL SCOPE ======================
function relative() {
  // ============ LOCAL FUNCTION relative() SCOPE ===========
  if (true) {
    // LOCAL BLOCK SCOPE
  }
  // ============ LOCAL FUNCTION relative() SCOPE ===========
  function child() {
    // LOCAL FUNCTION child() SCOPE
  }
  // ============ LOCAL FUNCTION relative() SCOPE ===========
}
// ====================== GLOBAL SCOPE ======================

// const myName = "Sasha";
// // ==1==
// const fullName = function() {
//   const myLastName = "Hrevtsova";

//   return myName + " " + myLastName;
// };

// console.log(fullName()); // Sasha Hrevtsova
// console.log(myName); // Sasha
// // console.log(myLastName); // Uncaught ReferenceError:

// // ==2==
// const anotherFullName = function() {
//   const myLastName = "O'Hurn";

//   return myName + " " + myLastName;
// };

// console.log(anotherFullName()); // Sasha O'Hurn
// console.log(myName); // Sasha
// // console.log(myLastName); // Uncaught ReferenceError:

// HOISTING - поднятие/всплытие элемента в начало ОВ,где он был объявлен
// В FUNCTION DECLARATION (without variable)
// В ПЕРЕМЕННОЙ, объявленной через ключевое слово var

// ==1==
console.log(value);
value = 5;

if (true) {
  console.log(value); // 5
  var value = 10;
  console.log(value); // 10
}

value = 15;
console.log(value); //15

// ARROW FUNCTIONS
const myFunction = function(a, b, c) {
  return a + b + c;
};
console.log(myFunction(1, 2, 3)); // 6
// ||
const myArrowFunction = (a, b, c) => a + b + c;
console.log(myArrowFunction(1, 2, 3)); // 6

// ARROW FUNCTIONS & arguments --> ...args
const myNewArrowFunction = (...args) => console.log(args);
myNewArrowFunction(1, 2, 3); // [1, 2, 3]
