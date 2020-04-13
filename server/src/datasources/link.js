const { DataSource } = require("apollo-datasource");
const { Op } = require('sequelize');

class LinkAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  async getAllLinks() {
    console.log('get them links');
    const links = await this.store.Link.findAll();
    return links;
  }

  async createLink({ title, url }) {
    try {
      const newLink = await this.store.Link.create({
        title,
        url,
      });
      return newLink;
    } catch (err) {
      return err.message;
    }
  }

  async findLinks({ query }) {
    // console.log(query);
    const results = await this.store.Link.findAll({
      where: {
        title: {
          [Op.iRegexp]: query,
        },
      },
    });

    return Array.isArray(results) ? results : [];
  }
}

module.exports = LinkAPI;
