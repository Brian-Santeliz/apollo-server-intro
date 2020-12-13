const { gql } = require("apollo-server");

module.exports = typesDef = gql`
  type User {
    name: String
    lastname: String
  }
  type Query {
    users: [User]
  }
`;
