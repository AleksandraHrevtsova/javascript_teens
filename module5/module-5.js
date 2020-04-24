"use strict";
// Процедурный (не связанный) код
const test1 = 16;
// ==========================
const test2 = 22;
// ==========================
const test3 = 23;
// ==========================
const score = (test1, test2, test3) => {
  // с указаниями параметров
  return console.log(test1 + test2 + test3);
};

score(test1, test2, test3);

// Объектно-ориентированное программирование (ООП)
const totalScore = {
  test1: 16,
  test2: 22,
  test3: 23,
  toGetSum() {
    // без указания параметров
    return this.test1 + this.test2 + this.test3;
  },
};
console.log(totalScore.toGetSum());

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

const movi = new Movie("Hero", 9, 100);
console.log(movi);

movi.greet("ALeks");
movi.addUser(40);
movi.removeUser(30);

// 2
const salesManager_1 = {
  name: "Olena",
  sales: 5,
  sell(product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}`;
  },
};

console.log(salesManager_1.sales);
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
console.log(salesManager_2.sales); // 7

// 3
const Manager = function (name = "manager", sales = 0) {
  this.name = name;
  this.sales = sales;

  this.sell = function (product) {
    this.sales += 1;
    return `Manager ${this.name} sold ${product}`;
  };
};

const manager_1 = new Manager("Sasha", 5);
console.log(manager_1.sales);
console.log(manager_1.sell("Club card"));
console.log(manager_1.sell("Training card"));
console.log(manager_1.sales);

const manager_2 = new Manager("Sasha", 5);
console.log(manager_2.sales);
console.log(manager_2.sell("Club card"));
console.log(manager_2.sell("Training card"));
console.log(manager_2.sales);

// ПРОТОТИПЫ, прототипное наследование свойство [[Prototype]]
// в консоли - __proto__

const parent = { lang_1: "HTML" };
const child = { lang_2: "CSS" };

child.__proto__ = parent; // parent- prototypefor child

console.log(child.lang_1); // HTML
console.log(child.lang_2); // CSS
// ====
// свойство наследуется от прототипа, только если такого нет в потомке,
// если есть, то используется без обращения к такому же свойству родителя
const child2 = { lang_1: "Js", lang_2: "CSS" };

child2.__proto__ = parent; // parent- prototypefor child

console.log(child2.lang_1); // Js
console.log(child2.lang_2); // CSS

// __proto__ изменять нельзя, но методы для этого существуют)

// prototype chain - цепочка прототипов
// Object: hasOwnProperty, toString
const animal = { eats: true }; // __proto__ от Object

// задание прототипа при создании нового объекта
const cat = Object.create(animal); // __proto__ от animal и от Object
cat.barks = true;

console.log(cat.barks); // true
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

const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};
console.log(Guest.prototype);

fvahdfvaehfawgfkhwfkwq;
