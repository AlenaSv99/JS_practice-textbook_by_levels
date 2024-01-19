// Дано число. Выведите в консоль последнюю цифру этого числа.

let num = prompt('Введите число');
console.log('Последняя цифра числа ' + num + ' = ' + num[num.length - 1]);

// или

let num1 = 678;
let numString = String(num1);
console.log('Последняя цифра числа ' + numString + ' = ' + numString[numString.length - 1]); // выведет 8