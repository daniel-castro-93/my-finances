const Transaction = require("./Transaction");

const obligations = [];

class Obligation {
  constructor(props) {
    this.id = props.id;
    this.approximateValue = props.approximateValue;
    this.creditCardId = props.creditCardId;
    this.isShared = props.isShared;
    this.name = props.name;
    this.paymentDate = props.paymentDate;
  }

  static create(props) {
    const id = obligations.length;
    const propsWithId = { ...props, id };

    obligations.push(propsWithId);

    return new Obligation(propsWithId);
  }

  static find(id) {
    return new Obligation(obligations[Number(id)]);
  }

  static list() {
    return obligations;
  }

  pay(newValue) {
    const { creditCardId, isShared, name } = this;
    const paymentDate = (new Date()).getTime();
    const value = this.approximateValue || newValue;

    Transaction.create({ creditCardId, isShared, name, obligationId: this.id, paymentDate, value });

    return this;
  }
}

module.exports = Obligation;