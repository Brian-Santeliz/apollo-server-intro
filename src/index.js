const { ApolloServer } = require("apollo-server");
const typeDefs = require("./types");
const users = require("./data");
const resolvers = require("./resolver");
const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen()
  .then(({ url }) => console.log(`Server en el puerto ${url}`))
  .catch(console.log);
