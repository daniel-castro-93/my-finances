const CreditCard = require("../models/CreditCard");

function creditCard(root, { id }) {
  return CreditCard.find(id);
}

function creditCards() {
  return CreditCard.list();
}

function createCreditCard(root, props) {
  return CreditCard.create(props.input);
}

module.exports = {
  Query: {
    creditCard,
    creditCards
  },
  Mutation: {
    createCreditCard
  }
};