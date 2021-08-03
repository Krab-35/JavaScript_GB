/*
Задание 01.
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны
нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
(использовать createElement / appendChild)
*/

const settings = {
    rowCount: 10,
    colCount: 10,
};

const chess = {
    settings,
    containerElement: null,

    run() {
        this.init();
    },

    init() {
        this.containerElement = document.getElementById('table');
        this.initCells();

    },

    initCells() {
        this.containerElement.innerHTML = '';
        let counter = 0;

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);
            let unicodNumb = 64;

            for (let col = 0; col < this.settings.colCount; col++) {
                const td = document.createElement('td');
                if ((col > 0 && col < 9) && (row > 0 && row < 9) && (counter) % 2 > 0) {
                    td.style.backgroundColor = 'black';
                }

                if ((col > 0 && col < 9) && (row === 0 || row === 9)) {
                    td.innerHTML = String.fromCharCode(unicodNumb);
                    td.style.textAlign = 'center';

                }
                if ((col === 0 || col === 9) && (row > 0 && row < 9)) {
                    td.innerHTML = 9 - row;
                    td.style.textAlign = 'center';
                }

                if (row === 0) td.style.transform = 'rotate(180deg)';
                if (col === 9) td.style.transform = 'rotate(180deg)';

                trElem.appendChild(td);
                counter++;
                unicodNumb++;

            }
            counter++;

        }

    },

};

chess.run();
