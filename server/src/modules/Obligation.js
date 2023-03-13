const { createModule } = require("graphql-modules");
const ObligationTypes = require("../types/Obligation.graphql");
const ObligationResolvers = require("../resolvers/Obligation");
 
const ObligationModule = createModule({
  id: 'obligation',
  dirname: __dirname,
  typeDefs: ObligationTypes,
  resolvers: ObligationResolvers
});

module.exports = ObligationModule;