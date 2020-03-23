"use strict";

// // Ad-Task_1 =======================================================================

// // Что выведет код ниже?

// alert(1 && null && 2); // null, это же ложное значение

// alert(null || (2 && 3) || 4); // 3, из выражения (2 && 3)
// // вернется 3, а в основном выражении, первое значение ложное,
// // а наша 3 - первое трушное значение в общем выражении

// // Ad-Task_2 =======================================================================

// // Какие из перечисленных ниже alert выполнятся?
// // Какие конкретно значения будут результатами выражений в условиях if(...)?

// if (-1 || 0) alert("first"); // Выполнится, потому что - 1 это true,
// // оператор || возвращает первое трушное значение
// // console.log(Boolean(-1)); // true

// if (-1 && 0) alert("second"); // Не выполнится, ведь 0 это false,
// // а оператор && всегда возвращает false если он есть

// if (null || (-1 && 1)) alert("third"); // Выполнится, потому что && выполнится
// // первым по приоритетности перед || и вернет трушную 1, а null || 1 вернет 1

// // Ad-Task_3 =======================================================================

// // Решите задачу:
// // Напишите условие if для проверки, что переменная age находится в диапазоне
// // между 14 и 90 включительно.«Включительно» означает,
// // что значение переменной age может быть равно 14 или 90.
// if (age >= 14 && age <= 90);

// // Напишите условие if для проверки, что значение переменной age НЕ находится
// // в диапазоне 14 и 90 включительно.Напишите два варианта:
// // первый с использованием оператора НЕ !, второй – без этого оператора.
// if (!(age >= 14 && age <= 90)); // 1й вариант
// if (age < 14 && age > 90); // 2й вариант

// // Ad-Task_4 =======================================================================

// // Сократите код ветвления switch, согласно допускаемых правил

// let day = prompt("Enter today day please");
// let weekday;

// // switch (day) {
// //   case "Monday":
// //     weekday = "the worst workday at week";
// //     break;

// //   case "Tuesday":
// //     weekday = "a bit better workday";
// //     break;

// //   case "Wednesday":
// //     weekday = "a workday and so it`s a small Friday)";
// //     break;

// //   case "Thursday":
// //     weekday = "a strange workday";
// //     break;

// //   case "Friday":
// //     weekday = "the best workday";
// //     break;

// //   case "Saturday":
// //     weekday = "holiday";
// //     break;

// //   case "Sunday":
// //     weekday = "holiday";
// //     break;

// //   default:
// //     alert("Invalid entered data");
// //     weekday = "invalid data";
// // }

// switch (day) {
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//       weekday = "the best workday";
//       break;

//     case "Saturday":
//     case "Sunday":
//       weekday = "holiday";
//       break;

//     default:
//       alert("Invalid entered data");
//       weekday = "invalid data";
//   }

// console.log(`${day} is ${weekday}`);

// Ad-Task_5 =======================================================================

