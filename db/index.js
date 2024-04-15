// @ts-check

const mongoose = require("mongoose");
const { urlDB } = require(`../env/env.${process.env.NODE_ENV}`);

mongoose
  .connect(urlDB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED !");
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
