// const c = function (a, b) {
//   return a + b;
// };

// console.log(c(4, 19));

// const d = (a, b) => {
//   a += 4;
//   b += 4;
//   return a + b;
// };
// console.log(d(19, 17));

//Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

// const sum = (a, b) => {
//   if (typeof a == "number" && typeof b == "number") {
//     return a + b;
//   } else if (typeof a == "undefined" || typeof b == "undefined") {
//     return "введите два параметра";
//   } else {
//     return " введенные данные не являются числами";
//   }
// };

// console.log(sum(11));

//Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"
// function square(a) {
//   console.log(a * a)
// }
// square(10) // 100
// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// function square(a) {
//   if (typeof a === "undefined") {
//     console.error(
//       'Uncaught Error: Функция "square" не может быть вызвана без аргумента'
//     );
//   } else {
//     console.log(a * a);
//   }
// }
// square(10);
// square();

//Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const guessNumber = (n) => {
//   const b = getRandomInteger(1, 10);
//   if (b === n) {
//     return "Вы выиграли";
//   } else {
//     return `Вы не угадали, ваше число -  ${n},  а выпало число ${b}`;
//   }
// };
// console.log(guessNumber(6));

//Задание 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

// const arr = [1, "Tom", 18, 19, "Mat"];
// const copyArr = arr.map(function (elements) {
//   return elements;
// });
// console.log(copyArr);

// Задание 5
// Напишите функцию, которая принимает массив имен и возвращает новый массив, в котором каждое имя будет иметь приставку "Hello, "

// const arr = ["John", "Tom", "Maria", "Maks", "Mat"];
// const newArr = arr.map((elements) => "Hello, " + elements);
// console.log(newArr);

// Задание 6
// Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив, содержащий только их имена.

// const arrObj = [
//   { name: "John", age: 20, city: "Minsk" },
//   { name: "Tom", age: 23, city: "Grodno" },
//   { name: "Maria", age: 22, city: "Brest" },
// ];
// const newArrobj = [];
// arrObj.forEach((elements) => {
//   newArrobj.push(elements["name"]);
// });
// console.log(newArrobj);

// Задание 7
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: "string",
//   d: 12,
// };
// const sumObjectValues = (objectWithNumbers) => {
//   let sum = 0;
//   for (const key in objectWithNumbers) {
//     if (typeof objectWithNumbers[key] === "number") {
//       sum += objectWithNumbers[key];
//     }
//   }
//   return sum;
// };
// console.log(sumObjectValues(objectWithNumbers));

// const arr = [1, 3, 4, 5, 10];
// const string = "Toyota";
// // console.log(string.length);
// // console.log(string[3]);
// // console.log(arr.indexOf(3));
// // console.log(string.toUpperCase());
// // console.log(string.toLowerCase());
// console.log(string.slice(0, 3));
// console.log(arr.slice(1, 3));

// Задание 8
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

// const str = "hello";
// const ucFirst = (str) => {
//   let string = str[0].toUpperCase() + str.slice(1);
//   return string;
// };
// console.log(ucFirst(str));

// Задание 9
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// const str = "world XXX";
// const checkSpam = (str) => {
//   const string = str.toLowerCase();
//   if (string.includes("badword") || string.includes("xxx")) {
//     return "true";
//   } else {
//     return "false";
//   }
// };
// console.log(checkSpam(str));

// Задание 10
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп»
// Обратите внимание: метод reverse существует только у массивов.

// const str = "привет, Женя";
// const arr = (str) => {
//   const arrow = str.split("");
//   arrow.reverse();
//   const string = arrow.join("");
//   return string;
// };
// console.log(arr(str));

// Задание 11
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком.
// let stations = [
// 'MAN675847583748sjt567654;Manchester Piccadilly',
// 'GNF576746573fhdg4737dh4;Greenfield',
// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
// 'SYB4f65hf75f736463;Stalybridge',
// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
// ];
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

// let stations = [
//   "MAN675847583748sjt567654;Manchester Piccadilly",
//   "GNF576746573fhdg4737dh4;Greenfield",
//   "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
//   "SYB4f65hf75f736463;Stalybridge",
//   "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
// ];
// stations.forEach((elements) => {
//   let code = elements.slice(0, 3);
//   let name = elements.indexOf(";") + 1;
//   let string = `${code}: ${elements.slice(name)}`;
//   console.log(string);
// });

// Задание 12
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];
const arr = [];
const unique = (string) => {};
