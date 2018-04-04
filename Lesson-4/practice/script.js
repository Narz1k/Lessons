                         /* Объекты, массивы, псевдомассивы. Основы ООП */
// let options = {
// 	name: 'text',
// 	width: 1024,
// 	height: 1024
// }

// /* Задаем новое свойство объекта дополняя другим кодом */
// options.bool = false;

// /* Задаем новый объект в объекте */
// options.color = {
// 	border: 'black',
// 	background: 'red'
// }

// /* Удаляем свойство из объекта */
// delete options.bool;

// // console.log(options);

// /* Перебираем свойства объекта */
// for ( let key in options ) {
// 	console.log('Свойство ' + key + ' имеет значение ' + options[key])
// }

// /* Узнаем количество свойств в объекте */
// // Выводим в консоль(тип данных объект.указываем что нам нужны его свойства(имя объекта).свойства длинны)
// console.log(Object.keys(options).length);

                        /* Массивы */
// let first = [1,2,3,4,5]

// // // Удаляем последний элемент
// // arr.pop();

// // // Добавляем элемент в конец массива
// // arr.push(6);

// // // Удаляем первый элемент массива
// // arr.shift();

// // // Добавляем элемкен в начало массива
// // arr.unshift(0);

// // console.log(arr);

// // // Перебираем наш массив
// // for (var i = 0; i < arr.length; i++) {
// // 	alert(arr[i]);
// // }

// // Добавляем массив в определенное место
// first[99] = 99;

// first.forEach( function(item, i, arr) {
// 	console.log(i + ': ' + item + '(массив: ' + arr + ')');
// });

// // Трансформируем строку пользователя в массив, метод split
// let trans = [];
// let i = prompt('', '');
// trans  = i.split(',');

// console.log(trans);

// // Отравляем массив одной строкой, метод join
// let trans = ["qq", "qqqw", "eee", "rrr"];
// let i = trans.join(',');

// console.log(i);

// // Сортировка массива от А до Я, метод sort, не работает с числами
// let trans = ["qq", "qqqw", "eee", "rrr"];
// let i = trans.sort();

// console.log(i);

// // Сортировка чисел
// let trans = [2, 20, 4, 11];

// function sortNumbers(a, b) {
// 	return a - b;
// }

// let i = trans.sort(sortNumbers);

// console.log(i);