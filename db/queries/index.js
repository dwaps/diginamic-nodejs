const Todo = require("../models/todo");

module.exports.findAll = async (todo) => {
  return await Todo.find();
};

module.exports.findById = async (todoId) => {
  return await Todo.findById(todoId);
};

module.exports.create = async (todo) => {
  return await new Todo(todo).save();
};

module.exports.update = async (todo) => {
  return await Todo.findByIdAndUpdate(todo.id, todo, { new: true });
};

module.exports.remove = async (todoId) => {
  return await Todo.findByIdAndDelete(todoId);
};
