"use strict";
// ============== 1 ===============================================
// объяви три переменные с именами var1, var2 и var3 соответственно
// присвой им значения: 1, 0, true
// выведи в консоль результаты сравнения:
// var1 > var2
// var1 == var3
// var1 === var3
// var1 != var3
// var2 != var3
// var1 > var2 == var3
// var1 > var2 > var3
// напиши в комментарии после команды console.log, ответ из консоли
// объясни почему получаются такие ответы

// let var1 = 1;
// let var2 = 0;
// let var3 = true;

// console.log(var1 > var2); // true
// console.log(var1 == var3); // true
// console.log(var1 === var3); // false
// console.log(var1 != var3); // false
// console.log(var2 != var3); // true
// console.log(var1 > var2 == var3); // true
// console.log(var1 > var2 > var3); // false

// ============== 2 ===============================================
// объяви переменную val
// выведи ее в консоль
// присваивай ей следующие значения: "River", "Mountain", 232, true, null,
// проверь на число каждое присвоенное значение и узнай тип данных, укажи результат в комментарий после сonsole.log

// let val;
// console.log(val); // undefined
// console.log(typeof val); // undefined

// val = "River";
// console.log(isNaN(val)); // true
// console.log(typeof val); // string

// val = "Mountin";
// console.log(isNaN(val)); // true
// console.log(typeof val); // string

// val = 232;
// console.log(isNaN(val)); // false
// console.log(typeof val); // number

// val = true;
// console.log(isNaN(val)); // false
// console.log(typeof val); // boolean

// val = null;
// console.log(isNaN(val)); // false
// console.log(typeof val); // object

// ============== 3 ===============================================
// объяви две переменные alfa и beta со значениями 0.2 и 0.4
// запиши результат суммы этих переменных так, чтобы получилось 0.6 в переменную result
// выведи результат в консоль

// const alfa = 0.4;
// const beta = 0.2;

// let result = (alfa * 10 + beta * 10) / 10;
// console.log(result);
// ============== 4 ===============================================
// объяви переменную tetra
// присвой ей значения: 12px, 13.34em,
// выведи результат в консоль и укажи результат в комментарий после сonsole.log

// let tetra = "12px";
// console.log(tetra); // 12px
// tetra = "13.34em";
// console.log(tetra); // 13.34em

// ============== 5 ===============================================
// выведи в консоль наибольшее и наименьшее число из указанных (2, 34, 99, 3, 22, 36, 733, 18)
// console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18)); // 733
// console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18)); // 2

// ============== 6* ==============================================
// объяви переменную random
// пусть она принимает рандомное число от 3 до 19 включительно, с условием не больше 2х знаков после точки
// выведи результат в консоль
// let random = (Math.random() * (19 - 3) + 3).toFixed(2);
// let random = Math.random() * (19 - 3) + 3;
// console.log(random);

// let random = 19 - 3 + 1;
// console.log((Math.random() * random).toFixed(2));

// console.log("TUSK_3.6");
// let random = Math.random() * (19 - 3) + 3;
// random = random.toFixed(2);
// console.log(random);
