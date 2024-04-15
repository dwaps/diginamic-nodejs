// @ts-check

const { Schema, model, default: mongoose } = require("mongoose");

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  doneAt: {
    type: Date,
    default: null,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Todo", TodoSchema);
