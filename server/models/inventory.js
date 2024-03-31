const Sequelize = require("sequelize");
const sequelize = require("../utils/database.js");

const Inventory = sequelize.define("inventory", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  item_name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  qtn: Sequelize.INTEGER,
});

module.exports = Inventory;
