"use strict";

// // ======================= 1 ==========================

// // Напиши функцию-конструктор Account, которая создает объект
// // со свойствами login и email. В prototype функции-конструктора
// // добавь метод getInfo(), который выводит в консоль
// // значения полей login и email объекта который его вызвал.

// // ========== MINE ================
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   return console.log(`email: ${this.email}, login: ${this.login} `);
// };
// // ========== MINE ================

// console.log(Account.prototype.getInfo); // function

// const mango = new Account("Mangozedog", "mango@dog.woof");

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account("Poly", "poly@mail.com");

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// // ======================= 2 ==========================
// // Напиши класс User для создания пользователя со следующим свойствами:

// // name - строка
// // age - число
// // followers - число
// // Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
// // ========== MINE ================
// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }
// }
// // ========== MINE ================
// const mango1 = new User("Mango", 2, 20);

// mango1.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly1 = new User("Poly", 3, 17);

// poly1.getInfo(); // User Poly is 3 years old and has 17 followers

// // ======================= 3 ==========================
// // Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент -
// // начальный массив товаров, и записывать его в свойство items.
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   // Добавь методы класса:

//   // getItems() - возвращает массив текущих товаров
//   // addItem(item) - получает новый товар и добавляет его к текущим
//   // removeItem(item) - получет товар и, если он есть, удаляет его из текущих
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//     return this.items;
//   }
//   removeItem(item) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       if (this.items[i] === item) {
//         this.items.splice(i, 1);
//       }
//     }
//     return this.items;
//   }
// }

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);
// // console.log(storage);

// const items = storage.getItems();
// console.table("getItems", items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table("addItem", storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table("removeItem", storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// // ======================= 4 ==========================
// // Напиши класс StringBuilder. На вход он получает один параметр - строку,
// // которую записывает в свойство _value.

// // Добавь классу следующий функционал:

// // Геттер value - возвращает текущее значение поля _value
// // Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// // Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// // Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// class StringBuilder {
//   constructor(str) {
//     this._value = str;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     console.log(typeof str);
//     this._value += str;
//     return this._value;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//     return this._value;
//   }
//   pad(str) {
//     this._value = str + this._value + str;
//     return this._value;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.value);

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// ======================= 5 ==========================
// Напиши класс Car с указанными свойствами и методами.

class Car {
  // Добавь статический метод `getSpecs(car)`,
  // который принимает объект-машину как параметр и выводит
  // в консоль значения свойств maxSpeed, speed, isOn, distance и price.
  static getSpecs(car) {
    return console.log(
      "static: ",
      "maxSpeed",
      car.maxSpeed,
      "speed",
      car.speed,
      "isOn",
      car.isOn,
      "distance",
      car.distance,
      "_price",
      car._price
    );
  }
  //    Конструктор получает объект настроек.
  //    Добавь свойства будущеего экземпляра класса:
  //    speed - текущая скорость, изначально 0
  //    price - цена автомобиля
  //    maxSpeed - максимальная скорость
  //    isOn - заведен ли автомобиль, значения true или false. Изначально false
  //    distance - общий киллометраж, изначально 0

  constructor(maxSpeed, price) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.isOn = false;
    this.distance = 0;
  }
  //    Добавь геттер и сеттер для свойства price,
  //    который будет работать с свойством цены автомобиля.
  set price(price) {
    return (this._price = price);
  }
  get price() {
    return this._price;
  }
  // Добавь код для того чтобы завести автомобиль
  // Записывает в свойство isOn значение true

  turnOn() {
    return (this.isOn = true);
  }

  // Добавь код для того чтобы заглушить автомобиль
  // Записывает в свойство isOn значение false,
  // и сбрасывает текущую скорость в 0

  turnOff() {
    return (this.isOn = false), (this.speed = 0);
  }

  // Добавялет к свойству speed полученное значение,
  // при условии что результирующая скорость
  // не больше чем значение свойства maxSpeed

  accelerate(value) {
    if (this.speed <= this.maxSpeed) {
      return (this.speed += value);
    }
  }

  // Отнимает от свойства speed полученное значение,
  // при условии что результирующая скорость не меньше нуля

  decelerate(value) {
    if (this.speed >= 0) {
      return (this.speed -= value);
    }
  }

  // Добавляет в поле distance киллометраж (hours * speed),
  // но только в том случае если машина заведена!
  drive(hours) {
    if (this.isOn === true) {
      return (this.distance = hours * this.speed);
    }
  }
}

const mustang = new Car(200, 2000);
console.log("mustang", mustang);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, _price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, _price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
