const { gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    id: ID!
    title: String
    url: String
  }

  type Query {
    link(title: String!): Link
    launches: [Link]
  }
`;

module.exports = typeDefs;
