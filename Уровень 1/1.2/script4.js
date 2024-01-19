// Дано число. Выведите количество цифр в этом числе.

let num = prompt('Введите число');
console.log('Количество цифр числа ' + num + ' = ' + String(num.length));

// или

let num1 = 678;
let numString = String(num1);
console.log('Количество цифр числа ' + numString + ' = ' + String(numString.length)); // выведет 14