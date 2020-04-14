const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Link {
    id: ID!
    title: String
    url: String
    createdAt: Date
  }

  type Query {
    links: [Link]
    searchLinks(query: String): [Link]
  }

  type Mutation {
    addLink(title: String, url: String): CreateLinkResponse
  }

  type CreateLinkResponse {
    success: Boolean!
    message: String
    link: Link
  }
`;

module.exports = typeDefs;
