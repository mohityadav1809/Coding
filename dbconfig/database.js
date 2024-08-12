// config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("users", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
