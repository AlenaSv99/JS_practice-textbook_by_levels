// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

let num = prompt('Введите число');
let firstDigit = num[0];
let lastDigit = num[num.length - 1];
let sumDigits = Number(firstDigit) + Number(lastDigit);
console.log('Сумма первой и последней цифры числа ' + num + ' = ' + String(sumDigits));

// или

let num1 = 678;
let numString = String(num1);
let sumOfDigits = Number(numString[0]) + Number(numString[numString.length - 1]);
console.log('Последняя цифра числа ' + numString + ' = ' + sumOfDigits); // выведет 14