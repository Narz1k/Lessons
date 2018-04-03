let str = 'урок-3-был слишком легким';

let newStr = str.replace(/-/g, ' '); // заменяем знак "-" на " "
newStr = newStr.replace(/у/g, 'У'); // заменяем "у" на "У"

console.log(newStr); // выводим в консоль

newStr = newStr.replace(/ слишком/g, ''); // удаляем слово "слишком"

newStr = newStr.slice(0,-2); // убираем из слова легким последние 2 буквы

newStr = newStr.replace(/был легк/g, 'было легко'); // заменяем "был легк" на "было легко"

alert(newStr); // выводим результат на модальное окно


let arr = [20, 33, 1, 'Человек', 2, 3];

arr.splice(3, 1); // удаляем с 3 элемента массива 1 элемен "Человек"

let result = arr.reduce(function(sum, current) { // Складываем элементы массива
	return sum + current;
}, 0);


Math.sqrt(result); // Получаем квадратный корень суммы чисел массива "arr"

console.log(result); // Выводим в консоль результат