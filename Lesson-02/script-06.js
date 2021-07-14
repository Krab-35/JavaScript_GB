/*
Задание 06.
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return dif(arg1, arg2);
        case '*':
            return mul(arg1, arg2);
        case '/':
            return div(arg1, arg2);
    }
}

console.log(mathOperation(1, 2, '+'));
console.log(mathOperation(1, 2, '-'));
console.log(mathOperation(1, 2, '*'));
console.log(mathOperation(1, 2, '/'));