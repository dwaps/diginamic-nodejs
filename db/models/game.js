const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  win: {
    type: String,
    required: true,
  },
  lose: {
    type: String,
    required: true,
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
