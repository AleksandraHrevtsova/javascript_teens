"use strict";
// OBJECTS

// const object = {
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
  sex: "male",
  course: frontend,
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
console.log(frontend["language_3"]); // Js

// ИЗМЕНЕНИЕ СВОЙСТВА ОБЪЕКТА
student.lastName = "O'Hurn";
console.log(student.lastName); // O'Hurn

console.log("student", student);

frontend["language_3"] = "Javascript";
console.log(frontend["language_3"]); // Javascript

console.log("frontend", frontend); // {language_1: "HTML", language_2: "CSS", language_3: "Javascript"}

// ДОБАВЛЕНИЕ НОВОГО СВОЙСТВА ОБЪЕКТУ
student.address = "Heroyv Stalihradu, 6";
console.log(student.address); // Heroyv Stalihradu, 6

console.log("student", student); // {name: "Aleksandra", lastName: "O'Hurn", age: 31, sex: "male", course: {…}, …}

student["phone number"] = "+38 050 071 53 30";
console.log(student["phone number"]); // +38 050 071 53 30

console.log("student", student); // {name: "Aleksandra", lastName: "O'Hurn", age: 31, sex: "male", course: {…}, …}

// УДАЛЕНИЕ СВОЙСТВА ОБЪЕКТА оператором delete и Отсутствующие свойства
delete frontend.language_1;
console.log(frontend.language_1); // undefined - потому что отсутсвует
console.log("student", frontend); // {language_2: "CSS", language_3: "Javascript"}

delete frontend["language_2"];
console.log(frontend["language_2"]); // undefined
console.log("student", frontend); // {language_3: "Javascript"}

// КОРОТКИЕ СВОЙСТВА (shorthand properties)

const myTeacher = "Sasha Hrevtsova";
const course = "frontend";

const group_17 = {
  myTeacher,
  course,
  count: 10
};
console.log(group_17); // {myTeacher: "Sasha Hrevtsova", course: "frontend", count: 10}

const group_4 = {
  myTeacher,
  course,
  count: 9
};
console.log(group_4); // {myTeacher: "Sasha Hrevtsova", course: "frontend", count: 9}

// ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
// через переменную
const key = "test";

// через функцию
const getKey = function() {
  return "score";
};

const testResult = {
  [key]: "2",
  [getKey()]: 22
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
console.log(myProducts);

// создаем новый метод
myProducts.toBuySweets = function() {
  console.log("Ну купи же уже что-то сладенькое!");
};

myProducts.toBuySweets(); // Ну купи же уже что-то сладенькое!
console.log(myProducts); // toBuySweets() добавился

delete myProducts.toBuySweets;
console.log(myProducts); // toBuySweets() удалился

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
    this.price = value; // внутри объекта образаемся через this
  }
};

// за пределами объекта, обращаемся к объекту по имени
product.showProductName(); // shampoo

product.changePrice(89.5); // меняем цену
console.log(product.price); // 89.5 - получаем измененную цену

// ПЕРЕБОР ОБЪЕКТА (не так, как массив)

// // цикл for...in - только для объектов, перебирает ключи объекта
// for (key in object) {
//     // statements
// }

const myCars = {
  subaru: "Forester",
  marda: "626",
  volkwagen: "Golf",
  landRover: "Range Rover"
};

for (const key in myCars) {
  console.log("key: ", key);
}

// key:  subaru
// key:  marda
// key:  volkwagen
// key:  landRover

// для перебора значений надо обращаться через object[key]
for (const key in myCars) {
  console.log("key: ", myCars[key]);
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

// Object.keys(obj) - вернет массив со строчными ключами
const keysOfHero = Object.keys(hero);
console.log(keysOfHero); // ["name", "power", "lifes", "speed"]

// который мы теперь можем перебрать циклом for...of и взять значения
for (const key of keysOfHero) {
  console.log("value: ", hero[key]); // ["Black Cat", 100, 9, 45]
}
// value:  Black Cat
// value:  100
// value:  9
// value:  45

// Object.entries(obj) - вернет массив массивов [key, value] с 2я элементами
const entriesOfHero = Object.entries(hero);
console.log(entriesOfHero);

for (const entry of entriesOfHero) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

// name: Black Cat
// power: 100
// lifes: 9
// speed: 45

// Object.values(obj) - вернет массив со значениями свойств
const valuesOfHero = Object.values(hero);
console.log(valuesOfHero); //  ["Black Cat", 100, 9, 45]

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
  totalScore += value;
}
console.log(totalScore); // 82

// ... - SPREAD (распыление аргументов)
// Во время вызова функции, для передачи массива элементов отдельными аргументами
const test1 = [18, 14, 12, 21, 17, 29];
const minTest1 = Math.min(test1);
console.log(minTest1); // NaN

const test2 = [18, 14, 12, 21, 17, 29];
const minTest2 = Math.min(...test2);
console.log(minTest2); // 12

// ... - spread (распыление массивов) - альтернатива slice() - копирование массива
// В литерале массива, при создании нового массив
const marvelHeroes = [
  "Captain Marvel",
  "Thanos",
  "Black Panter",
  "Goose the Cat",
  "Black Widow",
  "Captain America"
];
const copyOfMarvelHeroes = [...marvelHeroes];

// const copyOfMarvelHeroes = marvelHeroes.slice(); // то же самое

console.log("marvelHeroes", marvelHeroes);
// ["Captain Marvel", "Thanos", "Black Panter", "Goose the Cat", "Black Widow", "Captain America"]

console.log("copyOfMarvelHeroes", copyOfMarvelHeroes);
// ["Captain Marvel", "Thanos", "Black Panter", "Goose the Cat", "Black Widow", "Captain America"]

console.log(
  "marvelHeroes === copyOfMarvelHeroes",
  marvelHeroes === copyOfMarvelHeroes
); // false - разные ссылки

// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ РАСПЫЛЕНИИ
// const copyOfMarvelHeroes = [...marvelHeroes, "Hulk", "Spider-Man"];
// // можно добавить элементы при кописаровании
// console.log("copyOfMarvelHeroes", copyOfMarvelHeroes);
// // ["Captain Marvel", "Thanos", "Black Panter", "Goose the Cat", "Black Widow", "Captain America", "Hulk", "Spider-Man"]

// КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПЫЛЕНИИ полностью
const firstNum = [1, 2, 3];
const secondNum = [4, 5, 6];

const allNums = [...firstNum, ...secondNum];
// const allNums = firstNum.concat(secondNum); // альтернатива concat()

console.log(allNums); // [1, 2, 3, 4, 5, 6]

// КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПЫЛЕНИИ частично
const notAllNums = [...firstNum.slice(0, 1), ...secondNum.slice(-1)];
console.log(notAllNums); // [1, 6]

// КОНКАТЕНАЦИЯ МАССИВОВ ПРИ РАСПЫЛЕНИИ с добавлением элемента извне
const updatedNums = [
  ...firstNum.slice(0, 2),
  "Js is the best",
  ...secondNum.slice(-2)
];
console.log(updatedNums); // [1, 2, "Js is the best", 5, 6]

// ... - spread (распыление объеков) как альтернатива Object.assign()
// В литерале объекта, при создании нового объекта
const mod_1 = { test: 2, hw: 3 };
const mod_2 = { test: 4, hw: 6, addit: 2 };

// const mod_3 = Object.assign({}, mod_1, mod_2);
// console.log("mod_3", mod_3); // {test: 4, hw: 6, addit: 2}

// ... - spread
const mod_3 = { ...mod_1, ...mod_2 };
console.log("mod_3", mod_3); // {test: 4, hw: 6, addit: 2}

// !!! ВНИМАТЕЛЬНО !!! если свойства (ключи) перед распылением совпадают
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
const c = { x: 5, j: 10, ...a, z: 15, ...b };
console.log(c); // {x: 0, j: 10, y: 2, z: 3}

// ... - REST (сбор аргументов) - немного затронули в функциях (модуль 2)
const add1 = function(...args) {
  console.log("add1 args", args); // массив всех аргументов
};

add1(1, 2, 3);
add1(1, 2, 3, 4, 5);

const add2 = function(value, ...args) {
  console.log("add2 value", value); // первый аргумент
  console.log("add2 args", args); // массив всех остальных аргументов
};

add2(10, 1, 2, 3);
add2(15, 1, 2, 3, 4, 5);

// Д Е С Т Р У К Т У Р И З А Ц И Я объектов {object}

// Если имя переменной и ключ объекта совпадают, то происходит присваивание.
// Если для переменной не нашлось подходящего ключа то будет присвоен undefined.

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100
};

// Объявим переменные и присвоим им значения из объекта
const { name, stars, status } = hotel;

console.log(name, stars, status); // "Resort Hotel", 5, undefined

// == Присвоения undefined можно избежать, задав переменным значения по умолчанию,
// в случае если такого свойства в объекте нет.
const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100
};

const { name = "hotel", stars = 3, status = "empty" } = hotel;

console.log(name, stars, status); // "Resort Hotel", 5, "empty"

// == можно переопределить имена в процессе присвоения.
// Сначала пишем имя свойства из которого мы хотим получить значение,
// после чего ставим двоеточие и пишем имя переменной в которую хотим поместить
// значение этого свойства.

const hotel3 = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100
};

const { name: hotelName, stars, status: hotelStatus = "empty" } = hotel3;

console.log(hotelName, stars, hotelStatus); // "Resort Hotel", 5, "empty"

// == можно делать частичную деструктуризацию, взяв из объекта необходимые поля,
// а остальное собрать в переменную под именем rest (имя переменной произвольное),
// это будет объект с теми полями, которые мы явно не деструктуризировали
// в переменные.
const hotel4 = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100
};

const { name, ...rest } = hotel4;

console.log(name); // "Resort Hotel"
console.log(rest); // {stars: 5, capacity: 100}

// Д Е С Т Р У К Т У Р И З А Ц И Я массивов [array]

// В результате такой записи будут созданы 3 переменные и в них будут помещены
// элементы в нумерованом порядке, от 0 до конца массива.

const rgb = [200, 255, 100];

const [red, green, blue] = rgb;

console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// Red: 200, Green: 255, Blue: 100

// При деструктуризации массивов переменной может быть присвоено значение
// отдельно от ее объявления.
const rgb = [200, 255, 100];
let red, green, blue;

[red, green, blue] = rgb;

console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// Red: 200, Green: 255, Blue: 100

// Если переменных больше чем элементов массива, им будет присвоено undefined,
// поэтому можно указывать значения по умолчанию.
const rgb = [200, 100, 255];

const [red, green, blue, alfa = 0.3] = rgb;

console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa: ${alfa}`);
// Red: 200, Green: 100, Blue: 255, Alfa: 0.3

// можно распаковать и присвоить оставшуюся часть элементов массива переменной
const rgb = [200, 255, 100];

const [red, ...colors] = rgb;

console.log(`Red: ${red}, Colors: ${colors}`);
// Red: 200, Colors: [255, 100]

// Элементы можно пропускать. Допустим из массива rgb необходимо взять только последнее значение.
// Используется это крайне редко.
const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`); // Blue: 255
