/*
Задание 05
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/

function sum(a, b) {
    return a + b;
}
function dif(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b !== 0) return a / b;
    else return 'Деление на ноль';
}

console.log(sum(10, 9));
console.log(dif(10, 9));
console.log(mul(10, 9));
console.log(div(10, 9));
console.log(div(10, 0));