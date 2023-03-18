const creditCards = [];

class CreditCard {
  constructor(props) {
    this.name = props.name;
    this.number = props.number;
  }

  static create(props) {
    const id = creditCards.length;
    const propsWithId = { id, ...props };

    creditCards.push(propsWithId);

    return new CreditCard(propsWithId);
  }

  static find(id) {
    return new CreditCard(creditCards[Number(id)]);
  }

  static list() {
    return creditCards;
  }
}

module.exports = CreditCard;