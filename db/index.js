// @ts-check

const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "db/data.sqlite",
});

module.exports = db;
