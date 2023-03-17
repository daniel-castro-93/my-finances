const Obligation = require("../models/Obligation");

function obligation(root, { id }) {
  return Obligation.find(id);
}

function obligations() {
  return Obligation.list();
}

function createObligation(root, props) {
  return new Obligation(props.input);
}

module.exports = {
  Query: {
    obligation,
    obligations
  },
  Mutation: {
    createObligation
  }
};