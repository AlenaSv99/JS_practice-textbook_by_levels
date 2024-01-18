// Дано число. Проверьте, четное оно или нет.

let num = Number(prompt('Введите число'));

if (num % 2 == 0) {
    console.log('Число ' + String(num) + ' чётное');
} else {
    console.log('Число ' + String(num) + ' нечётное');
}