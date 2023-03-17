const Transaction = require("../models/Transaction");

function transaction(root, { id }) {
  return Transaction.getById(id);
}

function transactions() {
  return Transaction.list();
}

function createTransaction(root, props) {
  return new Transaction(props.input);
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