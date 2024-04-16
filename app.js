// @ts-check

const express = require("express");
const router = require("./routing");
const app = express();

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
