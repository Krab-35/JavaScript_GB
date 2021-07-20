/*
Задание 01.
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

let number = 2;

while (number < 101) {
    let checkNumber = 2;
    let checkFlag = true;
    while (checkNumber < 101) {
        if (checkNumber == number) {
            checkNumber++;
            continue;
        }
        if (number % checkNumber == 0) {
            checkFlag = false;
            break;
        }
        checkNumber++;
    }
    if (checkFlag) console.log(number);
    number++;
}