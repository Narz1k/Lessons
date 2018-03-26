var budget = +prompt('Какой у вас бюджет?', ''); // создаем переменную бюджет
var storeName = prompt('Введите название магазина', ''); // создаем переменную название магазина

var arr = [];
for (var i = 0; i < 3; i++) {
	arr[i] = prompt('Введите наименование товара.', ''); // Заполняем массив
	if (arr[i] === null) // если нажимает отмена
		alert('Отмена');
} if (arr[i] === '') { // если товар не введен
	alert('Вы не указали товар!');
	arr[i] = prompt('Введите любой товар.');
}

var mainList = {
	userBudget: budget, // подставляем переменную budget
	store: storeName, // подставляем переменную storeName
	shopGoods: [arr], // подставляем массив arr
	employers: {
		employeeName: ['John', 'Mark', 'Olivia'], // создаем массив с сотрудниками
	},
	open: confirm('Магазин открыт?') // создаем переменную с логическим значением true, false
};


console.log(mainList.shopGoods); // выводим в консоль массив с товаром
alert('Бюджет на 1 день составляет: ' + budget / 30 + ' руб.'); // выводим модальное окно с бюджетом на 1 день