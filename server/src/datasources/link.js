const { DataSource } = require("apollo-datasource");
const { Op } = require('sequelize');

class LinkAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  linkReducer({ link = {}, success = true, message = '' }) { 
    return {
      success,
      message,
      link
    }
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
      return this.linkReducer({ link: newLink });
    } catch (err) {
      return this.linkReducer({ message: err.message, success: false });
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
