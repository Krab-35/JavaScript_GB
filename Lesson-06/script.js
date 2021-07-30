/*
Задание 01.
Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
*/

const bueyrBox = {
    'product name': [],

    containerElement: null,

    run() {
        this.containerElement = document.createElement('div');
        document.body.appendChild(this.containerElement);
        this.outputMessage();
    },

    inputProduct(elem1, elem2, elem3) {
        let checkFlag = false;
        for (const elem in this["product name"]) {
            if (this["product name"][elem][0] === elem1) {
                this["product name"][elem][1] = + elem2
                checkFlag = true;
                break;
            }
        }
        if (!checkFlag) {
            this["product name"].push([elem1, elem2, elem3]);
        }
        this.run();
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
        for (const unit in this["product name"]) {
            boxSum += Math.floor((this["product name"][unit][1] * this["product name"][unit][2]) * 100) / 100;

        }
        return boxSum;
    },
};

const productCatalog = {
    'product': [
        ['bread', 1, 50],
        ['milk', 1, 60],
        ['potato', 0.1, 30],
        ['apple', 0.1, 60],
        ['cheese', 0.1, 1000],
    ],

    showProductCatalot() {
        const listCatalog = document.createElement('div');
        listCatalog.classList.add('productCatalog');
        for (const elem in this.product) {
            const catalogElement = document.createElement('p');
            catalogElement.classList.add('product');
            catalogElement.setAttribute('data-product', this.product[elem][0]);
            catalogElement.setAttribute('data-count', this.product[elem][1]);
            catalogElement.setAttribute('data-price', this.product[elem][2]);
            catalogElement.innerHTML += this.product[elem][0] + '<br>'
                + '<br>цена: ' + this.product[elem][2] + '<br>' + 'Купить';
            catalogElement.style.padding = '10px';
            listCatalog.appendChild(catalogElement);

        }
        document.body.appendChild(listCatalog);
    },

    init() {
        this.showProductCatalot();
        document.querySelector('.productCatalog').addEventListener('click', (event) => {
            this.containerClickHandler(event);
        });
    },

    containerClickHandler(event) {
        if (event.target.tagName !== 'P') return;
        console.log(event.target.dataset.product, event.target.dataset.count, event.target.dataset.price);
        this.buyProduct(event.target.dataset.product, event.target.dataset.count, event.target.dataset.price);
    },

    buyProduct(elem1, elem2, elem3) {
        bueyrBox.inputProduct(elem1, elem2, elem3);
    },

};

productCatalog.init();