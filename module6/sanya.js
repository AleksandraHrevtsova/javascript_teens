"use strict";

// ==== 1 ====
// Write a function that converts the argument values.
// If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.

const convert = function (...args) {
  console.log("elements", args);
  let newArr = [];
  for (let el of args) {
    console.log("el", el);
    if (isNaN(el)) {
      newArr.push(+el);
      console.log(newArr);
    }
  }
};
convert("1", 2, 3, "4"); // [1, '2', '3', 4]

// 2. Write function, which iterates over array and executes
// function on each element.

function executeforEach(array, callback) {
  for (let element of array) {
    callback(element);
  }
}

executeforEach([1, 2, 3], function (el) {
  console.log(el * 2);
}); // 2 4 6

// 3. Write function, which returns transformed array based on function,
// which passed as a second parameter (callback). If array contains a number
// as string, it should convert it and return as number.
// You’re allowed to change a body of that callback function if you need.
// Reuse function from task 2.

function mapArray(arr, callback) {
  const mapArr = [];

  function fn(el) {
    mapArr.push(callback(+el));
  }
  executeforEach(arr, fn);
  console.log(mapArr);
}

mapArray([2, "5", 8], function (el) {
  return el + 3;
}); // returns [5, 8, 11]
// mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]

// 4. Write function, which returns filtered array based on function,
// which passed as a parameter. Reuse function from task 2.
const filterArray = function (arr, callback) {
  const fArr = [];
  function fn(el) {
    if (callback(el)) {
      fArr.push(el);
    }
  }
  executeforEach(arr, fn);
  return console.log(fArr);
};

filterArray([2, 5, 8], function (el) {
  return el % 2 === 0;
});
// returns [2, 8]

// // 5. Write a function that checks is array contains a passed as a parameter value and return true in this case. Reuse function from task 2.
// // const containsValue = function (arr, val) {
// //   const fn = function () {
// //     if (el === val) {
// //     }
// //     return console.log(true);
// //   };
// //   executeforEach(arr, fn);
// //   return console.log(false);
// //   //   for (let el of arr) {
// //   //   }
// // };

// const containsValue = function (arr, number) {
//   executeforEach(arr, (el) =>
//     el === number ? console.log(true) : console.log(false)
//   );
// };

// containsValue([2, 5, 8], 2); // returns true
// containsValue([12, 4, 6], 5); // returns false
// // containsValue([2, 5, 8], 2)  // returns true
// // containsValue([12, 4, 6], 5)  // returns false

// // 6. Write a function that reverses the string value passed into it

// function flipOver(str) {
//   let strArr = [...str];
//   console.log(strArr);
//   let reversedArr = "";

//   for (let i = strArr.length - 1; i >= 0; i--) {
//     console.log(strArr[i]);
//     // reversedArr.push(strArr[i]);
//     reversedArr += strArr[i];
//   }
//   //   console.log(reversedArr);
//   //   reversedArr =
//   return reversedArr;
// }

// flipOver("hey world"); // 'dlrow yeh'
// // flipOver('hey world') // 'dlrow yeh'

// // 7. Write a function which creates an array from the given range of numbers

// // makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]

// // 8. Write a function that accepts an array of object and returns new array of values by passed key name.
// // That function should not change the original array. Reuse function from task 2.

// // const fruits = [
// //   { name: ‘apple’, weight: 0.5 },
// //   { name: ‘pineapple’, weight: 2 }
// // ];

// // getArrayOfKeys(fruits, ‘name’);
// // // returns [‘apple’, ‘pineapple’]

// // 9. Write function substitute() that accepts an array of numbers and manages to replace all numbers lower than 20 and greater than 10 with '*'. It should return a new array with numbers and '*' instead of these numbers. Reuse function from task 3.

// // substitute([58, 14, 48, 12, 31, 19, 10]);
// // // returns [58, '*', 48, '*', 31, '*', 10]

// // 10. Write a function which returns a day number that was some amount of days ago from the passed date.
// // It should not change the given source date.

// // const date = new Date(2020, 0, 2);
// // getPastDay(date, 1); // 1, (1 Jan 2020)
// // getPastDay(date, 2); // 31, (31 Dec 2019)
// // getPastDay(date, 365); // 2, (2 Jan 2019)

// // 11. Write a function that formats a date in such format "YYYY/MM/DD HH:mm".

// // formatDate(new Date('6/15/2019 09:15:00')) // "2018/06/15 09:15"
// // formatDate(new Date()) // "2020/04/07 12:56" // gets current local time
