const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  win: {
    type: String,
    default: "",
  },
  lose: {
    type: String,
    default: "",
  },
  tie: {
    type: Number,
    default: 0,
  },
  userScore: {
    type: Number,
    default: 0,
  },
  serverScore: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Game", GameSchema);
