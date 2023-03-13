const Outcome = require("../models/Outcome");

function outcome(root, { id }) {
  return Outcome.getById(id);
}

function outcomes() {
  return Outcome.list();
}

function createOutcome(root, props) {
  return new Outcome(props.input);
}

module.exports = {
  Query: {
    outcome,
    outcomes
  },
  Mutation: {
    createOutcome
  }
};