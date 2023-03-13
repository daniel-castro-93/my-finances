const CurrentBalance = require("./CurrentBalance");

const outcomes = [];

class Outcome {
  constructor(props) {
    const { isShared, name, obligationId, paymentDate, paymentMethod, value } = props;
    const id = outcomes.length;

    this.id = id;
    this.isShared = isShared;
    this.name = name;
    this.obligationId = obligationId
    this.paymentDate = paymentDate;
    this.paymentMethod = paymentMethod;
    this.value = value;

    outcomes.push({ id, ...props });
    
    if (paymentMethod === "CASH") CurrentBalance.update(value);
  }

  static getById(id) {
    return outcomes[id];
  }

  static list() {
    return outcomes;
  }
}

module.exports = Outcome;