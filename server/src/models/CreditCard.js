const { createPayCreditCardObligation } = require("../utils/classes");

const creditCards = [];

class CreditCard {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.number = props.number;
  }

  static create(props) {
    const id = creditCards.length;
    const propsWithId = { id, ...props };
    const creditCard = new CreditCard(propsWithId);

    creditCards.push(propsWithId);
    createPayCreditCardObligation(creditCard);

    return creditCard;
  }

  static find(id) {
    return new CreditCard(creditCards[Number(id)]);
  }

  static list() {
    return creditCards;
  }
}

module.exports = CreditCard;