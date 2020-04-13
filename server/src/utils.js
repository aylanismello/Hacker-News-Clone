const { Sequelize, DataTypes, Model } = require("sequelize");
const pg = require("pg");

module.exports.createStore = async () => {
  const sequelize = new Sequelize("postgresql://localhost/aylan");

  const Link = sequelize.define("link", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  await Link.sync();
  console.log(Link);

  return { Link };
};


