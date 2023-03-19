const Obligation = require("../models/Obligation");
const { PAYMENT_METHODS } = require("./constants");

function createPayCreditCardObligation(creditCard) {
  Obligation.create({
    approximateValue: 0,
    creditCardId: creditCard.id,
    name: creditCard.name,
    paymentMethod: PAYMENT_METHODS.CASH
  });
}

module.exports = {
  createPayCreditCardObligation
};