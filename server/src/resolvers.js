module.exports = {
  Query: {
    launches: (_, { id }, { dataSources }) => {
      return dataSources.linkAPI.getAllLinks();
    },
    searchLaunches: (_, { query }, { dataSources }) => {
      return dataSources.linkAPI.findLinks({ query });
    }
  },
  Mutation: {
    addLink: async (_, { title, url }, { dataSources }) => {
      const newLink = await dataSources.linkAPI.createLink({ title, url });
      if (newLink.err) {
        return newLink.err;
      } else {
        return newLink;
      }
    },
  },
};