import 'bootstrap/dist/css/bootstrap.min.css';

import Board from './board';
import Ball from './ball';

const board = new Board(new Ball(10, 10));

window.ball = (() => {
    // add board name
    document.querySelector('.card-title').innerHTML = ` BALL `;

    // list board accounts
    const card = document.querySelector('.card-body');

    for (let account of board.ball) {
        const paragraph = document.createElement('p');
        const paragraphText = document.createTextNode(`Account Number: ${account.number}, Balance: `);

        paragraph.appendChild(paragraphText);

        const span = document.createElement('span');
        span.id = 'account' + account.number;
        span.innerText = account.balance;

        paragraph.appendChild(span);

        card.appendChild(paragraph);
    }

    return {
        withdrawMoney: function () {
            const number = +document.querySelector('#number').value;
            const amount = +document.querySelector('#amount').value;

            const event = new CustomEvent('myEvent', {
                detail: {showProgress: true},
                bubbles: true
            });

            button.disabled = true;
            button.dispatchEvent(event);

            if (number && amount) {
                event.detail.showProgress = false;

                board.withdraw(number, amount).then(() => {
                    document.querySelector(`span#account${number}`).innerHTML = +document.querySelector(`span#account${number}`).innerHTML - amount;

                    button.dispatchEvent(event);
                    button.disabled = false;

                }).catch((reason) => {
                    console.warn(reason);
                    button.dispatchEvent(event);
                    button.disabled = false;
                });
            }
        },
        onInputChange: function () {
            const number = +document.querySelector('#number').value;
            const amount = +document.querySelector('#amount').value;

            if (number > 0 && amount > 0) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        }
    }
})();
