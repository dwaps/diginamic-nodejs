// @ts-check

const express = require("express");
const router = require("./routing");
const app = express();
const db = require("./db");

db.sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
