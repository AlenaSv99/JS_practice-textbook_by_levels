// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

let num = Number(prompt('Введите число'));

if (num < 0) {
    console.log('Число ' + String(num) + ' отрицательное');
} else {
    console.log('Число ' + String(num) + ' положительное');
}