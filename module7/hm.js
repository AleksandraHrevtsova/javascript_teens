"use strict";
// ======================= 1 ==========================

const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  return console.log(`email: ${this.email}, login: ${this.login} `);
};

console.log(Account.prototype.getInfo);
const mango = new Account("Mangozedog", "mango@dog.woof");
mango.getInfo();
const poly = new Account("Poly", "poly@mail.com");
poly.getInfo();

// ======================= 2 ==========================

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(item) {
    return this.items.push(item);
  }
  removeItem(item) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i] === item) {
        return this.items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table("getItems", items);

storage.addItem("Дроид");
console.table("addItem", storage.items);

storage.removeItem("Пролонгер");
console.table("removeItem", storage.items);

// ======================= 3 ==========================

class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  append(str) {
    console.log(typeof str);
    this._value += str;
    return this._value;
  }
  prepend(str) {
    this._value = str + this._value;
    return this._value;
  }
  pad(str) {
    this._value = str + this._value + str;
    return this._value;
  }
}
const builder = new StringBuilder(".");
console.log(builder.value);

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);

// ======================= 4 ==========================

class Car {
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

  constructor(maxSpeed, price) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.isOn = false;
    this.distance = 0;
  }

  set price(price) {
    return (this._price = price);
  }
  get price() {
    return this._price;
  }

  turnOn() {
    return (this.isOn = true);
  }

  turnOff() {
    return (this.isOn = false), (this.speed = 0);
  }

  accelerate(value) {
    if (this.speed <= this.maxSpeed) {
      return (this.speed += value);
    }
  }

  decelerate(value) {
    if (this.speed >= 0) {
      return (this.speed -= value);
    }
  }

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

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
