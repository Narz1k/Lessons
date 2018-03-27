
var num = 33721;
var mult = 1;

while (num > 0) {
		mult *= num % 10;
		num = Math.floor(num/10);
	}

console.log(Math.pow(mult, 3));
alert("Произведение цифр числа 33721 в третьей степени равняется: " + Math.pow(mult, 3));