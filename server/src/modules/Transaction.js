const { createModule } = require("graphql-modules");
const TransactionTypes = require("../types/Transaction.graphql");
const TransactionResolvers = require("../resolvers/Transaction");
 
const TransactionModule = createModule({
  id: 'transaction',
  dirname: __dirname,
  typeDefs: TransactionTypes,
  resolvers: TransactionResolvers
});

module.exports = TransactionModule;