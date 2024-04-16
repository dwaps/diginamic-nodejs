// @ts-check

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL ?? "")
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => {
    console.error(err);
  });
