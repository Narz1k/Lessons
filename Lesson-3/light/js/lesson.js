let money,
		name,
		time,
		price

//Функция по вводу бюджета
function start() {
	money = prompt('Ваш бюджет?', '');

	while(isNaN(money) || money == '' || money == null){
		money = prompt('Ваш бюджет?', '');
	}

	name = prompt('Название вашего магазина', '').toUpperCase();
	time = 23;
}

start(); // вызываем функцию start 

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {
		name: []
	},
	open: false,
	discount: false
};

/* Функция по скидкам */
function discountUser() {
	if (mainList.discount == true){
		price = Math.round(price/80) * 100;
	}
}
discountUser();

/* Функция по вводу продавцов */
function employee(){
	for (let i = 0; i < 4; i++) {
		let askName = prompt('Введите имя продавца', '');
		mainList.employers.name[i] = ( i + 1 ) + ' - ' + askName;
	}
}

employee();

/* Функция по выбору товаров */
function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let a = prompt('Какой тип товаров будем продавать?', '');
		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		}
	}
}
chooseGoods(); // вызываем функцию chooseGoods

/* Функция по времени работы магазина */
function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
			}
}

workTime(15);

alert(mainList.budget / 30);

console.log(mainList);