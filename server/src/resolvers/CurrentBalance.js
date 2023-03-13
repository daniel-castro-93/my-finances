const CurrentBalance = require("../models/CurrentBalance");

function currentBalance() {
  return CurrentBalance;
}

module.exports = {
  Query: {
    currentBalance
  }
};