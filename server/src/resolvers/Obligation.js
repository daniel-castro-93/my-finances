const Obligation = require("../models/Obligation");

function obligation(root, { id }) {
  return Obligation.find(id);
}

function obligations() {
  return Obligation.list();
}

function createObligation(root, props) {
  return Obligation.create(props.input);
}

function payObligation(root, props) {
  const obligation = Obligation.find(props.input.id);

  obligation.pay(props.input.value);

  return obligation;
}

module.exports = {
  Query: {
    obligation,
    obligations
  },
  Mutation: {
    createObligation,
    payObligation
  }
};