"use strict";
// это импорт данных из файла users.js
//(файл users.js нужно создать и скопировать в него массив, который указан в конце, после заданий)

import * as allUsers from "/users.js";
let users = allUsers.default;

console.log("массив объектов пользователей", users);
// ================ 1 ====================

// Получить массив имен всех пользователей (поле name).

const getUserNames = (users) => {
  // твой код
  return users.map((user) => user.name);
};

console.log(getUserNames(users));
[
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
];

// ================ 2 ====================
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ================ 3 ====================
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  // твой код
  users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }
  });
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ================ 4 ====================
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = (users) => {
  // твой код
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ================ 5 ====================
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  // твой код
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// ================ 6 ====================
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  // твой код
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ================ 7 ====================
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = (users) => {
  // твой код
};

console.log(calculateTotalBalance(users)); // 20916

// ================ 8 ====================
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  // твой код
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// ================ 9 ====================
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) => {
  // твой код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ================ 10 ====================
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  // твой код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
