class CurrentBalance {
  static value = 20000000;

  static update(charge) {
    this.value += charge;
  }
}

module.exports = CurrentBalance;