// Дана строка. Выведите в консоль последний символ строки.

let str = prompt('Введите строку');

console.log('Последний символ строки "' + str + '" - ' + String(str[str.length - 1]));