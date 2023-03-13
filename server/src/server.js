require("graphql-import-node");

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { createApplication } = require("graphql-modules");
const CurrentBalanceModule = require("./modules/CurrentBalance");
const ObligationModule = require("./modules/Obligation");
const OutcomeModule = require("./modules/Outcome");
 
const application = createApplication({
  modules: [CurrentBalanceModule, ObligationModule, OutcomeModule]
})
 
const app = express();
 
app.use(
  "/graphql",
  graphqlHTTP({
    schema: application.schema,
    customExecuteFn: application.createExecution(),
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000/`)
});