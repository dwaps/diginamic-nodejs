// @ts-check

const express = require("express");
const router = require("./routing");
const app = express();
require("./db");

app.set("DB_URL", process.env.DB_URL);
app.set("PORT", process.env.PORT);

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
