// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

if (num1[0] == num2[0]) {
    console.log('Первые цифры чисел ' + num1 + ' и ' + num2 + ' совпадают');
} else {
    console.log('Первые цифры чисел ' + num1 + ' и ' + num2 + ' не совпадают');
}

// или

let num3 = 345;
let num4 = 641;
if (String(num3)[0] == String(num4)[0]) {
    console.log('Первые цифры чисел ' + String(num3) + ' и ' + String(num4) + ' совпадают');
} else {
    console.log('Первые цифры чисел ' + String(num3) + ' и ' + String(num4) + ' не совпадают'); // сработает это
}