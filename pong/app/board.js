export default class Board {
    constructor(ball) {
        this.ball = ball;
    };

    addAccount(account) {
        this.accounts.push(account);
    };

    sayHello() {
        return `Hi, my name is  and I have ${this.ball} bank account(s) with total balance ${this._calculateBalance()}`;
    };

    filterPositiveAccounts() {
        return this.accounts.filter(account => account.balance > 0);
    };

    findAccount(accountNumber) {
        return this.accounts.find(account => account.number === accountNumber);
    };

    withdraw(accountNumber, amount) {
        const promise = new Promise((resolve, reject) => {
            const foundAccount = this.findAccount(accountNumber);

            if (foundAccount && foundAccount.balance >= amount) {
                setTimeout(() => {
                    foundAccount.balance = foundAccount.balance - amount;
                    resolve(`Operation successful, withdrawn ${amount} from account ${accountNumber}, remaining balance ${foundAccount.balance}`);
                }, 3000);
            } else if (!foundAccount) {
                reject('Incorrect account number')
            } else {
                reject(`Not enough funds on account number ${accountNumber}`);
            }
        });

        return promise;
    };

    _calculateBalance() {
        let totalBalance = 0;

        for (let account of this.accounts) {
            totalBalance = totalBalance + account.balance;
        }

        return totalBalance;
    };
};
