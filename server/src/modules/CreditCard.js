const { createModule } = require("graphql-modules");
const CreditCardTypes = require("../types/CreditCard.graphql");
const CreditCardResolvers = require("../resolvers/CreditCard");
 
const CreditCardModule = createModule({
  id: 'credit-card',
  dirname: __dirname,
  typeDefs: CreditCardTypes,
  resolvers: CreditCardResolvers
});

module.exports = CreditCardModule;