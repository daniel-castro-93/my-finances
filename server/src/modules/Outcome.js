const { createModule } = require("graphql-modules");
const OutcomeTypes = require("../types/Outcome.graphql");
const OutcomeResolvers = require("../resolvers/Outcome");
 
const OutcomeModule = createModule({
  id: 'outcome',
  dirname: __dirname,
  typeDefs: OutcomeTypes,
  resolvers: OutcomeResolvers
});

module.exports = OutcomeModule;