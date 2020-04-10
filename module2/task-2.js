// "use strict";

// // ============== 1 ===============================================
// // Создай массив authors с именами авторов:
// // William Shakespeare, Guy de Maupassant, Dante Alighieri, Mikhail Bulgakov, Albert Camus, Erich Maria Remarque
// // С помощью методов массива, добавь в конец массива authors три элемента со значениями:
// // Honore de Balzac, Miguel de Cervantes, Anton Chekhov
// // а в начало массива, три элемента со значениями:
// // Charles Dickens, Edgar Allan Poe, Gabriel Garcia Marquez
// // Выведи обновленный массив в консоль.
// // в комментарии после команды консоль укажи количесвто элементов измененного массива
// // ======== mine ==========================
// // const authors = [
// //   "William Shakespeare",
// //   "Guy de Maupassant",
// //   "Dante Alighieri",
// //   "Mikhail Bulgakov",
// //   "Albert Camus",
// //   "Erich Maria Remarque"
// // ];
// // authors.push("Honore de Balzac", "Miguel de Cervantes", "Anton Chekhov");
// // authors.unshift("Charles Dickens", "Edgar Allan Poe", "Gabriel Garcia Marquez");
// // console.log(authors); // 12
// // ======== mine ==========================

// // ============== 2 ===============================================
// // Создай массив scores с элементами:
// // 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42
// // с помощью методов массива shift() и pop(), удали первые два и последние три элемента
// // Выведи результат в консоль
// // ======== mine ==========================
// // const scores = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
// // scores.shift();
// // scores.shift();
// // scores.pop();
// // scores.pop();
// // scores.pop();
// // console.log(scores); // [15, 17, 3, 4, 98, 67, 532, 611]
// // ======== mine ==========================

// // ============== 3 ===============================================
// // Создай массив results с элементами:
// // 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42
// // с помощью метода splice(), удали первые два и последние три элемента, записав удаленные элементы
// // в отдельные массивы removeFromStart и removeFromEnd
// // Выведи в консоль все массивы
// // ======== mine ==========================
// // const results = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];

// // const removeFromStart = results.splice(0, 2);
// // const removeFromEnd = results.splice(-3);

// // console.log(removeFromStart); // [12, 32]
// // console.log(removeFromEnd); // [7, 100, 42]
// // console.log(results); // [15, 17, 3, 4, 98, 67, 532, 611]
// // ======== mine ==========================
// const things = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];

// const removeFromStart = things.splice(0, 2);
// const removeFromEnd = things.splice(8, 3);
// console.log(removeFromStart); //[12, 32]
// console.log(removeFromEnd); //[7, 100, 42]
// console.log(things); //[15, 17, 3, 4, 98, 67, 532, 611]

// // ============== 4 ===============================================
// // Создай массив partOfResults и скопируй в него элементы от 3 до 532 включительно
// // из измененного массива results из задания 3 (т.е. все задание 3 и массив results должны быть раскомментированы)
// // ======== mine ==========================
// // const partOfResults = results.slice(2, 7);
// // console.log("partOfResults", partOfResults); // [3, 4, 98, 67, 532]
// // ======== mine ==========================
// const partOfResults = things.slice(2, 7);
// console.log(partOfResults); //[3, 4, 98, 67, 532]

// // ============== 5 ===============================================
// // Создай массив doubleResults и скопируй в него все элементы
// // из измененного массива results из задания 3
// // ======== mine ==========================
// // const doubleResults = results.slice();
// // console.log("doubleResults", doubleResults); // [15, 17, 3, 4, 98, 67, 532, 611]
// // ======== mine ==========================
// const doubleResults = things.slice();
// console.log(doubleResults); //[15, 17, 3, 4, 98, 67, 532, 611]

// // ============== 6 ===============================================
// // Перебери массив doubleResults из задания 5
// // Четные числа из массива запиши в новый массив evenResults, а
// // Нечетные - в oddResults
// // В обратной последовательности в обоих случаях
// // Выведи в консоль массивы evenResults и oddResults
// // ======== mine ==========================
// // let oddResults = [];
// // let evenResults = [];
// // for (let i = 0; i < doubleResults.length; i += 1) {
// //   console.log(doubleResults[i]);
// //   // =========== 1 вариант ================
// //   //   //   if (doubleResults[i] % 2 != 0) {
// //   //   //     oddResults.unshift(doubleResults[i]);
// //   //   //   } else {
// //   //   //     evenResults.unshift(doubleResults[i]);
// //   //   //   }
// //   // =========== 2 вариант ================
// //   if (doubleResults[i] % 2 === 0) {
// //     evenResults.unshift(doubleResults[i]);
// //   } else {
// //     oddResults.unshift(doubleResults[i]);
// //   }
// // }
// // console.log("нечетные числа", oddResults); // [611, 67, 3, 17, 15]
// // console.log("четные числа", evenResults); // [532, 98, 4]
// // ======== mine ==========================
// // // ===========Felix===================
// // sort(doubleResults);

// // function sort(doubleResults) {
// //   let evens = [];
// //   let odds = [];
// //   window.evens1 = evens;
// //   window.odds1 = odds;

// //   for (let i = 0; i < doubleResults.length; i++) {
// //     if (doubleResults[i] % 2 === 0) {
// //       evens.unshift(doubleResults[i]);
// //     } else {
// //       odds.unshift(doubleResults[i]);
// //     }
// //   }
// //   console.log(evens);
// //   console.log(odds);
// // }
// // // ===========Felix===================
// // // ======== Dmytrenko Ilia ==========================
// // let evenResults = [];
// // let oddResults = [];
// // for (let i = 0; i < doubleResults.length; i += 1) {
// //   if (doubleResults[i] % 2 == 0) {
// //     evenResults.unshift(doubleResults[i]);
// //   } else {
// //     oddResults.unshift(doubleResults[i]);
// //   }
// // }
// // console.log(evenResults);
// // console.log(oddResults);
// // // ======== Dmytrenko Ilia ==========================

// // ============== 7 ===============================================
// // Объедините массивы oddResults и evenResults из задания 6, записав их в новый массив AllResults
// // Перебери новый массив AllResults и выбери только те элементы массива,
// // которые содержат 1 и запиши эти элементы в новый массив includesOne
// // "обрати внимание, что массив includesOne должен содержать элемента с типом number, а не string!
// // ======== mine ==========================
// // const AllResults = oddResults.concat(evenResults);
// // console.log("AllResults", AllResults); // [611, 67, 3, 17, 15, 532, 98, 4]

// // let includesOne = [];
// // for (let i = 0; i < AllResults.length; i += 1) {
// //   let item = AllResults[i] + "";
// //   console.log(item);
// //   if (item.includes(1)) {
// //     includesOne.push(+item);
// //   }
// // }
// // console.log("includesOne", includesOne); // [611, 17, 15]
// // ======== mine ==========================
// // const AllResults = oddResults.concat(evenResults);
// // console.log("AllResults", AllResults);
// // let includesOne = [];
// // for (let i = 0; i < AllResults.length; i += 1) {
// //   let item = AllResults[i] + "";
// //   console.log(item);
// //   if (item.includes(1)) {
// //     includesOne.push(+item);
// //   }
// // }
// // console.log("includesOne", includesOne);
// // // ======== Dmytrenko Ilia ==========================
// // let includesOne = [];
// // let AllResults = evenResults.concat(oddResults);

// // for (let k = 0; k < AllResults.length; k += 1) {
// //   let item = AllResults[k] + "";
// //   if (item.includes("1")) {
// //     includesOne.push(+item);
// //   }
// // }
// // console.log(includesOne);
// // // ======== Dmytrenko Ilia ==========================

// // // ===========Felix===================
// // let allResults = odds1.concat(evens1);
// // console.log(allResults);
// // let includesOne = [];

// // for (const elements of allResults) {
// //   if (elements.toString().indexOf(1) > -1) {
// //     console.log(elements.toString().indexOf(1));
// //     includesOne.push(elements);
// //   }
// // }
// // console.log(includesOne); // [611, 17, 15]
// // // ===========Felix===================
