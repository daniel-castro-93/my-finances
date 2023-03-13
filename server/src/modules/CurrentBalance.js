const { createModule } = require("graphql-modules");
const CurrentBalanceTypes = require("../types/CurrentBalance.graphql");
const CurrentBalanceResolvers = require("../resolvers/CurrentBalance");
 
const CurrentBalanceModule = createModule({
  id: 'current-balance',
  dirname: __dirname,
  typeDefs: CurrentBalanceTypes,
  resolvers: CurrentBalanceResolvers
});

module.exports = CurrentBalanceModule;