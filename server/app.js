// @ts-check

const express = require("express");
const cookieParser = require("cookie-parser");
const { secret } = require(`./env/env.${process.env.NODE_ENV}`);
const cors = require("cors");
const session = require("express-session");
const flash = require("express-flash");
const router = require("./routing");
const app = express();
require("./db");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
app.set("view engine", "ejs");
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
