const obligations = [];

class Obligation {
  constructor(props) {
    const id = obligations.length;

    this.id = id;
    this.isShared = props.isShared;
    this.name = props.name;
    this.paymentDate = props.paymentDate;
    this.paymentMethod = props.paymentMethod;
    this.value = props.value;

    obligations.push({ id, ...props });
  }

  static find(id) {
    return obligations[id];
  }

  static list() {
    return obligations;
  }
}

module.exports = Obligation;