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

console.log("task 1: ", getUserNames(users));
// [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Ross Vazquez",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
// ];

// ================ 2 ====================
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users.filter((user) => user.eyeColor === color);
};

console.log("task 2: ", getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ================ 3 ====================
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  // твой код
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

console.log("task 3: ", getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ================ 4 ====================
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = (users) => {
  // твой код
  return users.filter((user) => !user.isActive);
};

console.log("task 4: ", getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ================ 5 ====================
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  // твой код
  return users.find((user) => user.email === email);
};

console.log("task 5: ", getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log("task 5: ", getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// ================ 6 ====================
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  // твой код
  return users.filter((user) => user.age >= min && user.age <= max);
};

console.log("task 6: ", getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log("task 6: ", getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ================ 7 ====================
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = (users) => {
  // твой код
  return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log("task 7: ", calculateTotalBalance(users)); // 20916

// ================ 8 ====================
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  // твой код
  return users
    .filter((user) => user.friends.indexOf(friendName) !== -1)
    .map((user) => user.name);
};

console.log("task 8: ", getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log("task 8: ", getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// ================ 9 ====================
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) => {
  // твой код
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

console.log("task 9: ", getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ================ 10 ====================
// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны
// быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  // твой код
  return users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();
};

console.log("task 9: ", getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
