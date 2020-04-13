module.exports = {
  Query: {
    launches: (_, { id }, { dataSources }) => {
      return dataSources.linkAPI.getAllLinks();
    }
  }
};