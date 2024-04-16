// @ts-check

const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
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

TodoSchema.pre("save", function (next) {
  if ("image" in this && typeof this.image === "string") {
    this.image = "/" + this.image.replace("public", "static");
  }
  next();
});

module.exports = model("Todo", TodoSchema);
