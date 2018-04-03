let str = 'урок-3-был слишком легким';
let arr = [20, 33, 1, 'Человек', 2, 3];

let newStr = str.replace(/-/g, ' ');
newStr = newStr.replace(/у/g, 'У');

console.log(newStr);

newStr = newStr.replace(/ слишком/g, '');

newStr = newStr.slice(0,-2);

newStr = newStr.replace(/был легк/g, 'было легко');

alert(newStr);


