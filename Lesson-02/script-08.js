/*
Задание 08
С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function power(val, pow, resultNumber = 1) {
    if (pow === 0) return resultNumber;
    else {
        resultNumber *= val;
        return power(val, --pow, resultNumber);
    }
}
console.log(power(2, 8));