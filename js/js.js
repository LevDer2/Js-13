const account = {
  balance: 0,
  transactions: [],
  countId: 1,
  createTransaction(amount, type) {
    const newTransactions = {
      amount: amount,
      type: type,
      id: this.countId,
    };
    this.countId += 1;
    return newTransactions;
  },
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, "deposit");
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів для зняття цієї суми.");
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, "withdraw");
    this.transactions.push(transaction);
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      if (transaction.id === id) {
        return transaction;
      }
    }
    return null;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
account.deposit(1000);
console.log("Ваш баланс після поповнення дорівнює:", account.getBalance());
account.withdraw(500);
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.withdraw(700);
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.deposit(10000);
console.log("Ваш баланс після поповнення дорівнює:", account.getBalance());
account.deposit(50000);
console.log("Ваш баланс після поповнення дорівнює:", account.getBalance());
account.withdraw(40000);
console.log("Ваш баланс після зняття дорівнює:", account.getBalance());
account.getTransactionTotal("deposit");
console.log(
  "Загальна сума поповнень дорівнює:",
  account.getTransactionTotal("deposit")
);
account.getTransactionTotal("withdraw");
console.log(
  "Загальна сума зняття дорівнює:",
  account.getTransactionTotal("withdraw")
);
account.getTransactionDetails(2);
console.log("Деталі транзакції:", account.getTransactionDetails(2));