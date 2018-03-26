// var num = 33721;
// var length = num.length;
// var temp = 1;
// var result = 0;

// for (var i = 0; i < length; i++) { 
// 	temp = num % 10;
// 	result += temp;
// 	num = parseInt(num / 10);
// }

// console.log(result);

var num = 33721;
var mult = 1;

while (num > 0) {
		mult *= num % 10;
		num = Math.floor(num/10);
	}

console.log(Math.pow(mult, 3));
alert("Произведение цифр числа 33722 в третьей степени равняется: " + Math.pow(mult, 3));