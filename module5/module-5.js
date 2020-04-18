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

// Функции - конструкторы (оператор new), кроме стрелочных
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
