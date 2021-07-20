/*
Задание 05.
Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5.
*/

let pyramids = '*';

for (let elem = 0; elem < 20; elem++) {
    console.log(pyramids);
    pyramids += '*';
}