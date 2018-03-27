

/* конструкция if */
// var num = 59;

// if ( num < 49) {
// 	console.log('неверно');
// } else if ( num > 100 ) {
// 	console.log('Неверно');
// 	} else {
// 		console.log('верно');
// 	} 

/* Тернарный оператор */
// (num == 59)? console.log('верно') : console.log('Неверно');

/* конструкция switch */
// switch (num) {
// 	case 49:
// 		console.log('Мало');
// 		break;
// 	case 100:
// 		console.log('Много');
// 		break;
// 	case 80:
// 		console.log('Все еще много');
// 		break;
// 	case 59:
// 		console.log('В точку!');
// 		break;
// 	default:
// 		console.log('Не в этот раз!');
// 		break;
// }

/* Циклы while и do while */
// сначала происходит проверка, затем выполняется действие
// while (num < 65) {
// 	console.log(num);
// 	num++;
// }
// сначала происходит дейсвие, а затем проверка
// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 63);

/* конструкция for */
// for (let i = 0; i < 8; i++) {
// 	console.log(i);
// }

/* домашнее задание первого урока */
let money = prompt('ваш бюджет?', '');
let name = prompt('название вашего магазина', '');
let time = 23;

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

// mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?', '');
// mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?', '');
// mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?', '');

// заменяем 3 строки кода на цикл
for (let i = 0; i < 3; i++) {
	let a = prompt('Какой тип товаров будем продавать?', '');
	// mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} // заносим нашу переменную в typeof и сравниваем ее со строкой
}

/* первый способ замены цикла for */
// let i = 0;
// while (i < 3) {
// 	mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?', '');
// 	i++;
// }

/* второй способ замены цикла for */
// let i = 0;
// switch (i) {
// 	case 0:
// 		mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?', '');
// 		i++;
// 	case 1:
// 		mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?', '');
// 		i++;
// 	case 2:
// 		mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?', '');
// 		i++;
// 		break;
// }

if (time < 0) {
	console.log('Такого просто не может быть!');
} else if (time > 8 && time < 20) {
	console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
		};

alert(mainList.budget / 30);

console.log(mainList);