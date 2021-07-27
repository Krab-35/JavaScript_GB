/*
Задание 02.
Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const bueyrBox = {
    'product name': ['bread', 'milk', 'potato', 'apple', 'cheese'],
    'product count': [1, 2, 3.5, 1.8, 0.5],
    'price per one unit': [50, 60, 30, 60, 1000],
    countBasketPrice() {
        let boxSum = 0;
        for (let unit = 0; unit < this["product name"].length; unit++) {
            boxSum += Math.floor((this["product count"][unit] * this["price per one unit"][unit]) * 100) / 100;
        }
        return boxSum;
    },
};

console.log(bueyrBox.countBasketPrice());