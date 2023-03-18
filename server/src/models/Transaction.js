const transactions = [];

class Transaction {
  constructor(props) {
    this.id = props.id;
    this.creditCardId = props.creditCardId;
    this.isShared = props.isShared;
    this.name = props.name;
    this.obligationId = props.obligationId;
    this.paymentDate = props.paymentDate;
    this.value = props.value;
  }

  static create(props) {
    const id = transactions.length;
    const propsWithId = { ...props, id };

    transactions.push(propsWithId);

    return new Transaction(propsWithId);
  }

  static find(id) {
    return new Transaction(transactions[Number(id)]);
  }

  static list() {
    return transactions;
  }
}

module.exports = Transaction;