const CurrentBalance = require("./CurrentBalance");

const transactions = [];

class Transaction {
  constructor(props) {
    const { isShared, name, obligationId, paymentDate, paymentMethod, value } = props;
    const id = transactions.length;

    this.id = id;
    this.isShared = isShared;
    this.name = name;
    this.obligationId = obligationId
    this.paymentDate = paymentDate;
    this.paymentMethod = paymentMethod;
    this.value = value;

    transactions.push({ id, ...props });
  }

  static getById(id) {
    return transactions[id];
  }

  static list() {
    return transactions;
  }
}

module.exports = Transaction;