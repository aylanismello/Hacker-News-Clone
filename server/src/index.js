const { ApolloServer } = require("apollo-server");
const { createStore } = require("./utils");
const typeDefs = require('./schema');
const LinkAPI = require("./datasources/link");
const resolvers = require("./resolvers");


const initServer = async () => {
  const store = await createStore();
  const linkAPI = new LinkAPI({ store });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      linkAPI: new LinkAPI({ store }),
    }),
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

initServer();

