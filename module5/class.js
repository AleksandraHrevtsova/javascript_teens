"use strict";
// ОБЪЯВЛЕНИЕ ES6 класса
class Hero_1 {
  constructor(name, xp) {
    // constructor вместо function
    this.name = name;
    this.xp = xp;
  }
}

const newHero_1 = new Hero_1("Sonia", 1000);
console.log(newHero_1);

console.log(
  "сравнение прототипа экземпляра и объекта функции-конструктора: ",
  newHero_1.__proto__ === Hero_1.prototype
);

// МЕТОДЫ КЛАССА - альтернатива методов конструктора через prototype
class Hero_2 {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  gainXp() {
    console.log(`Hero ${this.name}, xp ${this.xp}`);
  } // то же самое, что и Hero.prototype.gainXp в ES5
}

const newHero_2 = new Hero_2("Sonia", 1000);
console.log(newHero_2);

// СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ - не идут в prototype
// не работает в браузерах, кроме Хрома (от 74 версии)
class Hero_3 {
  //доступны только конструктору
  static staticProp = "abc";
  static staticMethod() {}
  //доступны только конструктору
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  gainXp() {
    // этот метод запишется в свойство prototype
    console.log(`Hero ${this.name}, xp ${this.xp}`);
  } // то же самое, что и Hero.prototype.gainXp в ES5
}
console.log(Hero_3.staticProp); // abc
console.log(Hero_3.staticMethod()); // undefined

const newHero_3 = new Hero_3("Sonia", 1000);
console.log(newHero_3);

// ГЕТТЕРЫ И СЕТТЕРЫ - применяются для внешнего доступа к методам объекта
// имя одно для гета и сета, не должно совпадать со именами св-в экземляров
// применяются в разработке, когда имена свойств могут меняться, согласно изменений спецификации
// а имена геттеров и сеттеро останутся неизменными
class Hero_4 {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  // записывает

  set qwe(newName) {
    this.name = newName;
    console.log(this.name);
  }

  //   changeName(name) {
  //     this.name = name;
  //   }

  // читает

  get qwe() {
    return console.log(this.name);
  }
  //   getName() {
  //     return console.log(this.name);
  //   }
}

const newHero_4 = new Hero_4("Sonia", 1000);
console.log(newHero_4);

newHero_4.qwe = "Drago"; // сеттер
// newHero_4.changeName("Alf"); // обычный метод класса

newHero_4.qwe; // геттер
// newHero_4.getName(); // обычный метод класса

// ПУБЛИЧНЫЕ СВОЙСТВА И МЕТОДЫ (public class fields)
class Hero_5 {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }
  // на экземпляр, не в prototype, не нужно привязывать контекст
  a = 5;
  gainXp = (amount) => {
    this.xp += amount;
    console.log(this.xp);
  };
  // на экземпляр, не в prototype, не нужно привязывать контекст

  //   gainXp(amount) {
  //     this.xp += amount;
  //     console.log(this.xp);
  //   }
}

const newHero_5 = new Hero_5("Sonia", 1000);
console.log(newHero_5);

const fn = function (callback) {
  callback(100);
};
fn(newHero_5.gainXp); // вызов публичного метода не нуждается в привязке контекста
// fn(newHero_5.gainXp.bind(newHero_5));

// НАСЛЕДОВАНИЕ
class Heroes {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    this.xp += amount;
    console.log(`${this.name} gained ${amount} experience points`);
  }
}
class Warwar extends Heroes {
  // связка прототипов
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} attacks with ${this.weapon}`);
    // вызов родительского метода
    // super.gainXp(10); === Heroes.prototype.gainXp.call(this)
  }
}
const warwar = new Warwar("John", 10, "axe");
console.log(warwar);

warwar.gainXp(1000);
console.log(warwar);

warwar.attack();

class Berserk extends Warwar {
  constructor() {
    super();
    this.roar = roar;
  }
}
