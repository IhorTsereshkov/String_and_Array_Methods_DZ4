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

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];
// let arr = [];
// const unique = (strings) => {
//   for (let elements of strings) {
//     if (!arr.includes(elements)) {
//       arr.push(elements);
//     }
//   }
//   return arr;
// };
// console.log(unique(strings));

// Задание 13
// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
// Тестовые данные:
// 1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
// В задании необходимо использовать методы массивов: forEach, slice, concat

// const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
// const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

// const verifyCats = (catsJane) => {
//   catsJane.pop();
//   catsJane.shift();
//   const cats = catsJane.concat(catsJulia);
//   cats.forEach(function (elements, index) {
//     if (elements >= 2) {
//       console.log(`Кошка № ${index + 1} взрослая, ей ${elements} лет`);
//     } else {
//       console.log(`Кошка № ${index + 1} ещё котёнок`);
//     }
//   });
//   return "";
// };
// console.log(verifyCats(catsJane));

// Задание 14
// Решить 4 задание из прошлой темы, используя метод filter
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// numbers.filter((elements, index) => {
//   console.log(`Индексу ${index} соответствует число ${elements}`);
// });

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

// let arr = [5, 4, 3, 8, 0];
// function getArr(arr, a) {
//   const newArr = arr.filter((elements) => {
//     if (elements >= a) {
//       return elements;
//     }
//   });
//   return newArr;
// }
// console.log(getArr(arr, 5));

// Задание 15
// Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов. Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].

// const word = ["yes", "hello", "no", "easycode", "what"];
// const newWord = (arr, a) => {
//   const newArr = arr.filter((elements) => {
//     return elements.length > a;
//   });
//   return newArr;
// };
// console.log(newWord(word, 3));

// const numb = [1, -12, -30, 20, 3];
// const numsSorted = numb.sort((a, b) => {
//   return b - a;
// });
// console.log(numsSorted);

// Задание 16
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
// ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры которой a и b - это элементы массива. В данной задаче элементы массива, то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.

// const arr = [[14, 45], [1], ["a", "c", "d"]];
// const arrSorted = arr.sort((a, b) => {
//   if (a.length > b.length) {
//     return 1;
//   } else if (a.length < b.length) {
//     return -1;
//   }
//   return a - b;
// });
// console.log(arrSorted);

// Задание 17
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:
// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)
// 2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)
// 3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)
// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]
// В задании необходимо использовать методы массивов: map, filter, reduce

// const catAges = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
// const catAges1 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
// const teenagers = 18;
// const getAverageHumanAge = (arr) => {
//   catAgesPeople = arr.map((elements) => {
//     if (elements <= 2) {
//       return elements * 10;
//     } else {
//       return elements * 7;
//     }
//   });
//   catAgesTeenagers = catAgesPeople.filter((elements) => {
//     return elements >= teenagers;
//   });
//   catAgesMiddle = catAgesTeenagers.reduce((acc, elements) => {
//     return acc + elements;
//   }, 0);
//   return catAgesMiddle / catAgesTeenagers.length;
// };
// console.log(getAverageHumanAge(catAges));
// console.log(getAverageHumanAge(catAges1));

// Задание 1
// Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
// Math.round(x)
// Math.ceil(x)
// Math.floor(x)
// В комментариях к каждой строке напишите, как работают эти округления.

const a = 5.4;
const b = 5.5;
const c = 5.6;

// console.log(Math.round(a)); //округляет к ближайшему целому числу
// console.log(Math.round(b)); //округляет к ближайшему целому числу
// console.log(Math.round(c)); //округляет к ближайшему целому числу

// console.log(Math.ceil(a)); // округляет к большему числу
// console.log(Math.ceil(b)); // округляет к большему числу
// console.log(Math.ceil(c)); // округляет к большему числу

// console.log(Math.floor(a)); //округляет к меньшему числу
// console.log(Math.floor(b)); //округляет к меньшему числу
// console.log(Math.floor(c)); //округляет к меньшему числу

// const arr = [a, b, c];
// const newArr = arr.map((elements) => {
//   return Math.round(elements);
// });
// console.log(newArr);

// const newArr1 = arr.map((elements) => {
//   return Math.ceil(elements);
// });
// console.log(newArr1);

// const newArr2 = arr.map((elements) => {
//   return Math.floor(elements);
// });
// console.log(newArr2);

// const now = new Date();
// let options = {
//   era: "short",
//   year: "numeric",
//   month: "long",
//   weekday: "long",
//   timezone: "UTC",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// };

// console.log(now.toLocaleString("ru-RU", options));
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());
// let minute = now.getMinutes();
// console.log(minute);

// console.log(now.toLocaleString("en-US"));

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// Например:
let date = new Date(2014, 0, 5);
const options = {
  weekday: "short",
};
function getWeekDay(date) {
  return date.toLocaleString("be-BY", options);
}
console.log(getWeekDay(date).toUpperCase());

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// let date = new Date(2014, 0, 3);
// const options = {
//   day: "numeric",
// };
// function getLocalDay(date) {
//   return date.getDay();
// }
// console.log(getLocalDay(date));
