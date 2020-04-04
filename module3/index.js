"use strict";
// OBJECTS

// const object = {
//   key: value,
//   key: value // СВОЙСТВО ОБЪЕКТА состоит из ключа и значения
//   // "key" || _key || $key - string : value - primitive, array, object, function
//   //
// };
// объект НЕЛЬЗЯ использовать до объявления

const frontend = {
  language_1: "HTML",
  language_2: "CSS",
  language_3: "Js"
};
console.log("frontend", frontend); // {language_1: "HTML", language_2: "CSS", language_3: "Javascript"}

const student = {
  name: "Aleksandra",
  lastName: "Hrevtsova",
  age: 31,
  sex: "female",
  course: frontend, // альтернатива ниже
  //   course: {
  //     language_1: "HTML",
  //     language_2: "CSS",
  //     language_3: "Js"
  //   },
  passExam: true
};
console.log("student", student); // {name: "Aleksandra", lastName: "Hrevtsova", age: 31, sex: "male", course: {…}, …}

// ДОСТУП К СВОЙСТВАМ ОБЪЕКТА
// 1 - object.key
console.log(student.name); // Aleksandra
console.log(student.lastName); // Hrevtsova
console.log(student.age); // 31
console.log(student.sex); // male
console.log(student.course); // {language_1: "HTML", language_2: "CSS", language_3: "Javascript"}
console.log(student.passExam); // true

// 2 - object["key"]
console.log(frontend["language_1"]); // HTML
console.log(frontend["language_2"]); // CSS
console.log(frontend["language_3"]); // Js - объект
//              array[0] - массив

// ИЗМЕНЕНИЕ СВОЙСТВА ОБЪЕКТА
// 1 - object.key
student.lastName = "O'Hurn";
console.log(student.lastName); // O'Hurn

console.log("student", student);

// 2 - object["key"]
frontend["language_3"] = "Javascript";
console.log(frontend["language_3"]); // Javascript

console.log("frontend", frontend); // {language_1: "HTML", language_2: "CSS", language_3: "Javascript"}

// ДОБАВЛЕНИЕ НОВОГО СВОЙСТВА ОБЪЕКТУ
// 1 - object.key
student.address = "Heroyv Stalihradu, 6";
console.log(student.address); // Heroyv Stalihradu, 6

console.log("student", student); // {name: "Aleksandra", lastName: "O'Hurn", age: 31, sex: "male", course: {…}, …}

// 2 - object["key"]
student["phone number"] = "+38 050 071 53 30";
console.log(student["phone number"]); // +38 050 071 53 30

console.log("student", student); // {name: "Aleksandra", lastName: "O'Hurn", age: 31, sex: "male", course: {…}, …}

// УДАЛЕНИЕ СВОЙСТВА ОБЪЕКТА оператором delete и Отсутствующие свойства
delete frontend.language_1;
console.log(frontend.language_1); // undefined - потому что отсутсвует
console.log("frontend", frontend); // {language_2: "CSS", language_3: "Javascript"}

delete frontend["language_2"];
console.log(frontend["language_2"]); // undefined
console.log("frontend", frontend); // {language_3: "Javascript"}

// КОРОТКИЕ СВОЙСТВА (shorthand properties)

const myTeacher = "Sasha Hrevtsova";
const course = "frontend";

const group_4 = {
  myTeacher, // myTeacher: "Sasha Hrevtsova",
  course, // course: "frontend",
  count: 9
};
console.log(group_4); // {myTeacher: "Sasha Hrevtsova", course: "frontend", count: 9}

// const group_17 = {
//   //   myTeacher: "Sasha Hrevtsova", // так раньше писали (2015-2017)
//   myTeacher, // теперь так пишут - 2020
//   //   course: "frontend",
//   course,
//   count: 10
// };
// console.log(group_17); // {myTeacher: "Sasha Hrevtsova", course: "frontend", count: 10}

// ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
// через переменную
const key = "test";
const name = "Lucy";
const age = "age1";
// // // через функцию
// const getKey = function() {
//   return "result";
// };

const testResult = {
  key, // key: "test", тут передается пара - ключ: значение
  [key]: "2", // тут в key запишется значение переменной
  //   [getKey()]: 22,
  [name]: "my friend",
  [age]: 32
};

console.log(testResult); // {test: "2", score: 22}

// МЕТОДЫ ОБЪЕКТА
const myProducts = {
  milk: 0.5,
  eggs: 10,
  apples: 5,
  toCheck() {
    // метод объекта = значение свойства - функция
    console.log("Проверь наличие");
  },
  oranges: 10
};
myProducts.toCheck(); // Проверь наличие
console.log("myProducts", myProducts);

// создаем новый метод
myProducts.toBuySweets = function() {
  console.log("Ну купи же уже что-то сладенькое!");
};

myProducts.toBuySweets(); // Ну купи же уже что-то сладенькое!
console.log("myProducts with new method", myProducts); // toBuySweets() добавился

delete myProducts.toBuySweets;
console.log("myProducts without new method", myProducts); // toBuySweets() удалился

// ДОСТУП К ОБЪЕКТУ ЧЕРЕЗ this

const product = {
  type: "wellness & spa",
  category: "hair care",
  productName: "shampoo",
  price: 76.94,
  showProductName() {
    console.log(this.productName); // внутри объекта образаемся через this
  },
  changePrice(value) {
    this.price = value; // внутри объекта обращаемся через this
  }
};

// за пределами объекта, обращаемся к объекту по имени
product.showProductName(); // shampoo

product.changePrice(89.5); // меняем цену
console.log(product.price); // 89.5 - получаем измененную цену

// ПЕРЕБОР ОБЪЕКТА (не так, как массив)

// цикл for...in - только для объектов, перебирает ключи объекта
//          OBJECT                        ARRAY
// for (let key in object) { || for (let el of array) {
//     // statements         ||       // statements
// }                         || }

const myCars = {
  subaru: "Forester",
  mazda: "626",
  volkswagen: "Golf",
  landRover: "Range Rover"
};

for (const key in myCars) {
  console.log("key: ", key);
}

// key:  subaru
// key:  mazda
// key:  volkswagen
// key:  landRover

// для перебора значений надо обращаться через object[key]
for (const key in myCars) {
  console.log("value: ", myCars[key]);
}
// key:  Forester
// key:  626
// key:  Golf
// key:  Range Rover

// методы конструктора Object
const hero = {
  name: "Black Cat",
  power: 100,
  lifes: 9,
  speed: 45
};

console.log("my hero", hero);
// Object.keys(obj) - вернет массив со строчными ключами
const keysOfHero = Object.keys(hero);
console.log("keysOfHero", keysOfHero); // ["name", "power", "lifes", "speed"]

// // // который мы теперь можем перебрать циклом for...of и взять значения
for (const key of keysOfHero) {
  // МЕТОД МАССИВА!!!
  console.log("ключ: ", key);
  //   //   key: name;
  //   //   key: power;
  //   //   key: lifes;
  //   //   key: speed;
  console.log("значение: ", hero[key]); // ["Black Cat", 100, 9, 45]
  //   // // value:  Black Cat
  //   // // value:  100
  //   // // value:  9
  //   // // value:  45
}

// Object.entries(obj) - вернет массив массивов [key, value] с 2я элементами
const entriesOfHero = Object.entries(hero);
console.log("entries Of Hero", entriesOfHero);

for (const entry of entriesOfHero) {
  const key = entry[0];
  const value = entry[1];

  console.log(`пакет - ${key}: сколько единиц - ${value}`);
}

// name: Black Cat
// power: 100
// lifes: 9
// speed: 45

// Object.values(obj) - вернет массив со значениями свойств
const valuesOfHero = Object.values(hero);
console.log("values Of Hero", valuesOfHero); //  ["Black Cat", 100, 9, 45]

const testsScore = {
  test_1: 16,
  test_2: 21,
  test_3: 22,
  test_4: 23
};

const arrValues = Object.values(testsScore);
console.log(arrValues); // [16, 21, 22, 23]

let totalScore = 0;

for (const value of arrValues) {
  totalScore += value; // || totalScore = totalScore + value;
  console.log("totalScore на каждой итерации", totalScore);
  // 0 + 16 = 16; - 1 итерация
  // 16 + 21 = 37; - 2 итерация
  // 37 + 22 = 59; - 3 итерация
  // 59 + 23 = 82; - 4 итерация - последняя, потому что больше нет
  // элементов массива для перебора
  // последнее значение totalScore становится итоговым по работе цикла
}
console.log("totalScore", totalScore); // 82
// // =============== ARRAY ====================
// let age = 0; // Даня родился
// const life = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// // life.push(15);
// console.log(life);

// for (const year of life) {
//   //   age = age + year;
//   age += 1;
//   console.log("возраст Дани каждый год", age);
// }
// console.log("возраст Дани сейчас", age);
// // =============== ARRAY ====================

// // // ... - SPREAD (распыление аргументов)
// // // Во время вызова функции, для передачи массива элементов отдельными аргументами
// // const test1 = [18, 14, 12, 21, 17, 29];
// // const minTest1 = Math.min(test1);
// // console.log(minTest1); // NaN

// // const test2 = [18, 14, 12, 21, 17, 29];
// // const minTest2 = Math.min(...test2);
// // console.log(minTest2); // 12

// // // ... - spread (распыление массивов) - альтернатива slice() - копирование массива
// // // В литерале массива, при создании нового массив
// // const marvelHeroes = [
// //   "Captain Marvel",
// //   "Thanos",
// //   "Black Panter",
// //   "Goose the Cat",
// //   "Black Widow",
// //   "Captain America"
// // ];
// // const copyOfMarvelHeroes = [...marvelHeroes];

// // // const copyOfMarvelHeroes = marvelHeroes.slice(); // то же самое

// // console.log("marvelHeroes", marvelHeroes);
// // // ["Captain Marvel", "Thanos", "Black Panter", "Goose the Cat", "Black Widow", "Captain America"]

// // console.log("copyOfMarvelHeroes", copyOfMarvelHeroes);
// // // ["Captain Marvel", "Thanos", "Black Panter", "Goose the Cat", "Black Widow", "Captain America"]

// // console.log(
// //   "marvelHeroes === copyOfMarvelHeroes",
// //   marvelHeroes === copyOfMarvelHeroes
// // ); // false - разные ссылки

// // // ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ РАСПЫЛЕНИИ
// // // const copyOfMarvelHeroes = [...marvelHeroes, "Hulk", "Spider-Man"];
// // // // можно добавить элементы при кописаровании
// // // console.log("copyOfMarvelHeroes", copyOfMarvelHeroes);
// // // // ["Captain Marvel", "Thanos", "Black Panter", "Goose the Cat", "Black Widow", "Captain America", "Hulk", "Spider-Man"]

// // // КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПЫЛЕНИИ полностью
// // const firstNum = [1, 2, 3];
// // const secondNum = [4, 5, 6];

// // const allNums = [...firstNum, ...secondNum];
// // // const allNums = firstNum.concat(secondNum); // альтернатива concat()

// // console.log(allNums); // [1, 2, 3, 4, 5, 6]

// // // КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПЫЛЕНИИ частично
// // const notAllNums = [...firstNum.slice(0, 1), ...secondNum.slice(-1)];
// // console.log(notAllNums); // [1, 6]

// // // КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПЫЛЕНИИ с добавлением элемента извне
// // const updatedNums = [
// //   ...firstNum.slice(0, 2),
// //   "Js is the best",
// //   ...secondNum.slice(-2)
// // ];
// // console.log(updatedNums); // [1, 2, "Js is the best", 5, 6]

// // // ... - spread (распыление объеков) как альтернатива Object.assign()
// // // В литерале объекта, при создании нового объекта
// // const mod_1 = { test: 2, hw: 3 };
// // const mod_2 = { test: 4, hw: 6, addit: 2 };

// // // const mod_3 = Object.assign({}, mod_1, mod_2);
// // // console.log("mod_3", mod_3); // {test: 4, hw: 6, addit: 2}

// // // ... - spread
// // const mod_3 = { ...mod_1, ...mod_2 };
// // console.log("mod_3", mod_3); // {test: 4, hw: 6, addit: 2}

// // // !!! ВНИМАТЕЛЬНО !!! если свойства (ключи) перед распылением совпадают
// // const a = { x: 1, y: 2 };
// // const b = { x: 0, z: 3 };
// // const c = { x: 5, j: 10, ...a, z: 15, ...b };
// // console.log(c); // {x: 0, j: 10, y: 2, z: 3}

// // // ... - REST (сбор аргументов) - немного затронули в функциях (модуль 2)
// // const add1 = function(...args) {
// //   console.log("add1 args", args); // массив всех аргументов
// // };

// // add1(1, 2, 3);
// // add1(1, 2, 3, 4, 5);

// // const add2 = function(value, ...args) {
// //   console.log("add2 value", value); // первый аргумент
// //   console.log("add2 args", args); // массив всех остальных аргументов
// // };

// // add2(10, 1, 2, 3);
// // add2(15, 1, 2, 3, 4, 5);

// // // Д Е С Т Р У К Т У Р И З А Ц И Я объектов {object}

// // // Если имя переменной и ключ объекта совпадают, то происходит присваивание.
// // // Если для переменной не нашлось подходящего ключа то будет присвоен undefined.

// // const hotel = {
// //   name: "Resort Hotel",
// //   stars: 5,
// //   capacity: 100
// // };

// // // Объявим переменные и присвоим им значения из объекта
// // const { name, stars, status } = hotel;

// // console.log(name, stars, status); // "Resort Hotel", 5, undefined

// // // == Присвоения undefined можно избежать, задав переменным значения по умолчанию,
// // // в случае если такого свойства в объекте нет.
// // const hotel2 = {
// //   name2: "Resort Hotel",
// //   stars2: 5,
// //   capacity2: 100
// // };

// // const { name2 = "hotel", stars2 = 3, status2 = "empty" } = hotel2;

// // console.log(name2, stars2, status2); // "Resort Hotel", 5, "empty"

// // // == можно переопределить имена в процессе присвоения.
// // // Сначала пишем имя свойства из которого мы хотим получить значение,
// // // после чего ставим двоеточие и пишем имя переменной в которую хотим поместить
// // // значение этого свойства.

// // const hotel3 = {
// //   name3: "Resort Hotel",
// //   stars3: 5,
// //   capacity3: 100
// // };

// // const { name3: hotelName3, stars3, status3: hotelStatus3 = "empty" } = hotel3;

// // console.log(hotelName3, stars3, hotelStatus3); // "Resort Hotel", 5, "empty"

// // // == можно делать частичную деструктуризацию, взяв из объекта необходимые поля,
// // // а остальное собрать в переменную под именем rest (имя переменной произвольное),
// // // это будет объект с теми полями, которые мы явно не деструктуризировали
// // // в переменные.
// // const hotel4 = {
// //   name4: "Resort Hotel",
// //   stars4: 5,
// //   capacity4: 100
// // };

// // const { name4, ...rest } = hotel4;

// // console.log(name4); // "Resort Hotel"
// // console.log(rest); // {stars: 5, capacity: 100}

// // // Д Е С Т Р У К Т У Р И З А Ц И Я массивов [array]

// // // В результате такой записи будут созданы 3 переменные и в них будут помещены
// // // элементы в нумерованом порядке, от 0 до конца массива.

// // const rgb = [200, 255, 100];

// // const [red, green, blue] = rgb;

// // console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // // Red: 200, Green: 255, Blue: 100

// // // При деструктуризации массивов переменной может быть присвоено значение
// // // отдельно от ее объявления.
// // const rgb1 = [200, 255, 100];
// // let red1, green1, blue1;

// // [red1, green1, blue1] = rgb1;

// // console.log(`Red: ${red1}, Green: ${green1}, Blue: ${blue1}`);
// // // Red: 200, Green: 255, Blue: 100

// // // Если переменных больше чем элементов массива, им будет присвоено undefined,
// // // поэтому можно указывать значения по умолчанию.
// // const rgb2 = [200, 100, 255];

// // const [red2, green2, blue2, alfa2 = 0.3] = rgb2;

// // console.log(`Red: ${red2}, Green: ${green2}, Blue: ${blue2}, Alfa: ${alfa2}`);
// // // Red: 200, Green: 100, Blue: 255, Alfa: 0.3

// // // можно распаковать и присвоить оставшуюся часть элементов массива переменной
// // const rgb3 = [200, 255, 100];

// // const [red3, ...colors] = rgb3;

// // console.log(`Red: ${red3}, Colors: ${colors}`);
// // // Red: 200, Colors: [255, 100]

// // // Элементы можно пропускать. Допустим из массива rgb необходимо взять только последнее значение.
// // // Используется это крайне редко.
// // const rgb4 = [200, 100, 255];

// // const [, , blue4] = rgb4;

// // console.log(`Blue: ${blue4}`); // Blue: 255
