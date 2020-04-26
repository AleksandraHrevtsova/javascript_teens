"use strict";
// // Процедурный (не связанный) код
// const test1 = 16;
// // ==========================
// const test2 = 22;
// // ==========================
// const test3 = 23;
// // ==========================
// const score = (test1, test2, test3) => {
//   // с указаниями параметров
//   return console.log(test1 + test2 + test3);
// };

// score(test1, test2, test3);

// // Объектно-ориентированное программирование (ООП)
// const totalScore = {
//   test1: 16,
//   test2: 22,
//   test3: 23,
//   toGetSum() {
//     // без указания параметров
//     return this.test1 + this.test2 + this.test3;
//   },
// };
// console.log(totalScore.toGetSum());

// КЛАССЫ - структура, описывающая состояние и поведение сущности

// ЭКЗЕМПЛЯРЫ - объекты-представители сущности

// ИНТЕРФЕЙС - набор свойств и методов класса

// ПАРАДИГМЫ: инкапсуляция, абстракция, наследование, полиморфизм

// ИНКАПСУЛЯЦИЯ - сокрытие деталей реализации от пользователя

// АБСТРАКЦИЯ - выделение значимых характеристик

// НАСЛЕДОВАНИЕ - создание новой сущности на базе существующей

// ПОЛИМОРФИЗМ - переопределение методов базового класса в наследниках

// КОНСТРУКТОРЫ
// Функции - конструкторы (оператор new), !кроме стрелочных!
// именуются с Заглавной буквы
// встроенные в Js конструкторы: Object, Array, Number, String, Boolean
// 1 ----
const Project = function (title, theme, clients) {
  this.title = title;
  this.theme = theme;
  this.clients = clients;
}; // объявление

// вызовы
const project = new Project("habit`s manager", "human", "all types");
console.log(project); // {title: "habit`s manager", theme: "human", clients: "all types"}
const project_fe = new Project("App", "to do list", "all types");
console.log(project_fe); // {title: "App", theme: "to do list", clients: "all types"}

// 2 ----
const Human = function (arms = null, legs = null, head = 1, body = 1) {
  this.arms = arms;
  this.legs = legs;
  this.head = head;
  this.body = body;
};
const Ilia = new Human(2, 2);
console.log(Ilia);

const Dima = new Human();
console.log(Dima);

// внутренние методы
// [[Call]] - при вызове функции без new, просто выполнится тело функции
// [[Construct]] - при вызове функции c new, создастся новый объект

// Добавление методов
const Movie = function (name, rate, category) {
  this.name = name;
  this.rate = rate;
  this.category = category;
  this.countUser = 0;

  this.greet = function (userName) {
    console.log(`Hello ${userName}, welcome to ${this.name}`);
  };

  this.addUser = function (newUser) {
    this.countUser += newUser;
    console.log(this.countUser);
  };

  this.removeUser = function (newUser) {
    this.countUser -= newUser;
    console.log(this.countUser);
  };
};

const movie = new Movie("Hero", 9, 100, 1);
console.log(movie);

movie.greet("ALeks");
movie.addUser(40);
movie.removeUser(30);

// ==== 2 ====
const House = function (a, b) {
  this.color = a; // если мне надо указать свое значение
  this.floors = b;
  this.windows = 20;
  this.doors = 2;
  this.walls = 2.8;
};

const myHouse = new House("red", 6); // момент создания нового объекта (экземпляра)
console.log("на момент создания", myHouse);

myHouse.windows = 15;
console.log("измененный", myHouse);

// 3
const salesManager_1 = {
  name: "Olena",
  sales: 5,
  sell(product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}`;
  },
};

console.log(salesManager_1.sales); // 5
console.log(salesManager_1.sell("Club Card"));
console.log(salesManager_1.sell("Training Card"));
console.log(salesManager_1.sales); // 7

const salesManager_2 = {
  name: "Kostya",
  sales: 10,
  sell(product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}`;
  },
};

console.log(salesManager_2.sales);
console.log(salesManager_2.sell("Club Card"));
console.log(salesManager_2.sell("Training Card"));
console.log(salesManager_2.sales); // 12

// 3
const Manager = function (name = "manager", sales = 0) {
  this.name = name;
  this.sales = sales;

  this.sell = function (product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}`;
  };
};

const manager_1 = new Manager("Sasha");
console.log(manager_1.name);
console.log(manager_1.sales); // 0

console.log(manager_1.sell("Club card"));
console.log(manager_1.sell("Training card"));

console.log(manager_1.sales); // 2

const manager_2 = new Manager("Sasha", 5);
console.log(manager_2.sales);

console.log(manager_2.sell("Club card"));
console.log(manager_2.sell("Training card"));

console.log(manager_2.sales); // 7

// ПРОТОТИПЫ, прототипное наследование свойство [[Prototype]]
// в консоли - __proto__
// Object
const teacher = { lang_1: "HTML" };

const child = { lang_2: "CSS" };

child.__proto__ = teacher; // parent- prototypefor child

console.log(child.lang_1); // HTML
console.log(child.lang_2); // CSS

// ====
// свойство наследуется от прототипа, только если такого нет в потомке,
// если есть, то используется без обращения к такому же свойству родителя
const child2 = { lang_1: "Js", lang_2: "CSS" };
console.log(child2.lang_1); // Js

child2.__proto__ = teacher; // teacher- prototype for child
console.log(child2.lang_1); // Js

// __proto__ изменять нельзя, но методы для этого существуют)

// // prototype chain - цепочка прототипов
const main_object = { key1: 1 };
console.log("main_object", main_object);
console.log("own prop", main_object.key1); // 3

console.log(main_object.key2); // undefined
console.log(main_object.key3); // undefined
console.log(main_object.key4); // undefined

const first_object = { key2: 2 };
first_object.__proto__ = main_object;
console.log("first_object", first_object);
console.log("own prop", first_object.key2); // 3

console.log(first_object.key1); // 1
console.log(first_object.key3); // undefined
console.log(first_object.key4); // undefined

const second_object = { key3: 3 };
second_object.__proto__ = first_object;
console.log("second_object", second_object);
console.log("own prop", second_object.key3); // 3

console.log(second_object.key1); // 1
console.log(second_object.key2); // 2
console.log(second_object.key4); // undefined

const third_object = {};
third_object.__proto__ = second_object;
console.log("third_object", third_object);
console.log("own prop", third_object.key4); // undefined

console.log(third_object.key1); // 1
console.log(third_object.key2); // 2
console.log(third_object.key3); // 3

for (const key in third_object) {
  console.log(key);
}
// Object: hasOwnProperty, toString
const animal = { eats: true }; // __proto__ от Object

// задание прототипа при создании нового объекта
const cat = Object.create(animal); // __proto__ от animal и от Object
console.log("initialise", cat);

cat.barks = true;
// cat.eats = false;
console.log("added prop", cat);

// console.log(cat.barks); // true
console.log(cat.eats); // true - dynamic dispatch || delegation
//                  динамическая диспетчеризация или делегация

// перебор личных (не наследуемых) свойств объекта
const parentProd = { color: "red", count: 7 };
const childProd = Object.create(parentProd);
childProd.price = 30;

for (const key in childProd) {
  console.log("__proto__ key: ", key); // вернет все унаследованные ключи
}

for (const key in childProd) {
  if (!childProd.hasOwnProperty(key)) continue; // вернет только личные ключи
  console.log("own property: ", key);
}

const childProdKeys = Object.keys(childProd); // вернет массив личных ключей объекта
console.log(childProdKeys);

// Свойство F.prototype - объект с методом constructor, в него можно записывать
// свойства и методы, кот удут доступны по ссылке в __proto__
const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};
console.log("объект с методом constructor", Guest.prototype);

const newGuest = new Guest("ALeks", 30);
console.log("newGuest", newGuest); // новый экземпляр

Guest.prototype.newMethod = function () {
  // добавляем метод в ф-к,
  // чтобы его могли использовать все экземпляры
  console.log(
    `метод функции-конструктора - name: ${this.name}, room: ${this.room}`
  );
};

newGuest.newMethod(); // применяем новый метод ф-к к потомку, он работает

// // НАСЛЕДОВАНИЕ И КОНСТРУКТОРЫ
const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

//  Теперь у нас есть конструктор базового класса героя,
//  добавим в prototype какой-то метод.

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero("Mango", 1000);
console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// // // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }

// // теперь создадим функцию-конструктор, привязанную к Hero.
// // для этого мы используем метод call(), вызвав
// // функцию-конструктор Hero и передав ей объект создающийся в Warrior
// // как контекст.
const Warrior = function (name, xp, weapon) {
  //  Во время выполнения функции Warrior вызываем функцию Hero
  //  в контексте объекта создающегося в Warrior, а так же передаем
  //  аргументы для инициализации полей this.name и this.xp

  // this это будущий экземпляр Warrior

  Hero.call(this, name, xp);

  // Тут добавляем новое свойство - оружие
  this.weapon = weapon;
};

// // Сразу добавим метод для атаки в prototype воина
Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior("Poly", 200, "sword");

console.log("poly", poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
poly.attack(); // Poly attacks with sword

// poly.gainXp(); // Uncaught TypeError: poly.gainXp is not a function
// не работает, надо явно привязать методы

// true
// const Hero1 = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero1.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior1 = function (name, xp, weapon) {
//   Hero1.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior1.prototype = Object.create(Hero1.prototype);
// Warrior1.prototype.constructor = Warrior1;

// Warrior1.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly1 = new Warrior1("Poly", 200, "sword");
// poly.attack(); // Poly attacks with sword

// // poly.gainXp();
