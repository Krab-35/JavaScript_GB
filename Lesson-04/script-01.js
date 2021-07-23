/*
Задание 01.
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе
объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны
получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
оответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function numberObjectConverter(inputNum) {
    const outNumber = {
        units: '',
        tens: '',
        hundreds: '',
    };
    if (!inputNum) return outNumber;
    else {
        outNumber.units = inputNum % 10;
        outNumber.tens = parseInt(inputNum / 10) % 10;
        outNumber.hundreds = parseInt(inputNum / 100);
        return outNumber;
    }
}

function inputString(inputNumber) {
    if (isNaN(inputNumber) || (Number(inputNumber) < 0 || Number(inputNumber) >= 1000)) {
        console.log('Необходимо было ввести число от 0 до 999');
        return console.log(numberObjectConverter(false));
    }
    else {
        console.log('Преобразование числа ' + inputNumber + ' в объект:');
        return console.log(numberObjectConverter(inputNumber));
    }

}
inputString(prompt('Введите число от 0 до 999:'));