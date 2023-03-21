const Transaction = require("./Transaction");
const { PAYMENT_METHODS } = require("../utils/constants");

const obligations = [];

class Obligation {
  constructor(props) {
    this.id = props.id;
    this.approximateValue = props.approximateValue;
    this.creditCardId = props.creditCardId;
    this.isShared = props.isShared;
    this.name = props.name;
    this.paymentDate = props.paymentDate;
    this.paymentMethod = props.paymentMethod;
    this.value = this.getCurrentValue();
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

  getCurrentValue() {
    if (this.paymentMethod === PAYMENT_METHODS.CASH && this.creditCardId) {
      return 100;
    }

    // TODO: Date
    const transaction = Transaction.findBy({ obligationId: this.id });
    
    return transaction?.value || this.approximateValue;
  }

  pay(newValue) {
    const { creditCardId, isShared, name } = this;
    const paymentDate = (new Date()).getTime();
    const value = newValue || this.approximateValue;

    this.value = value;

    Transaction.create({ creditCardId, isShared, name, obligationId: this.id, paymentDate, value });

    return this;
  }
}

module.exports = Obligation;