// @ts-check

const express = require("express");
const router = require("./routing");
const app = express();
require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
