const Transaction = require("../models/Transaction");

function transaction(root, { id }) {
  return Transaction.find(id);
}

function transactions() {
  return Transaction.list();
}

function createTransaction(root, props) {
  return Transaction.create(props.input);
}

module.exports = {
  Query: {
    transaction,
    transactions
  },
  Mutation: {
    createTransaction
  }
};