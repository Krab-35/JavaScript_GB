/*
Задание 02.
Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть
только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

const bueyrBox = {
    'product name': ['bread', 'milk', 'potato', 'apple', 'cheese'], //по данному массиву проверятеся наполнение корзины
    'product count': [1, 2, 3.5, 1.8, 0.5],
    'price per one unit': [50, 60, 30, 60, 1000],

    containerElement: null,

    run() {
        this.init();
    },

    init() {
        this.containerElement = document.getElementById('basket');
        this.outputMessage();
    },

    outputMessage() {
        this.containerElement.innerHTML = '';
        const showMessage = document.createElement('h3');
        this.containerElement.style.marginTop = '20px';

        if (this["product name"].length === 0) {
            showMessage.innerHTML = 'Корзина пуста';
        }
        else {
            showMessage.innerHTML = 'В корзине: ' + this["product name"].length + ' товаров на сумму '
                + this.countBasketPrice() + ' руб.'
        }
        this.containerElement.appendChild(showMessage);
    },

    countBasketPrice() {
        let boxSum = 0;
        for (let unit = 0; unit < this["product name"].length; unit++) {
            boxSum += Math.floor((this["product count"][unit] * this["price per one unit"][unit]) * 100) / 100;
        }
        return boxSum;
    },
};

bueyrBox.run();