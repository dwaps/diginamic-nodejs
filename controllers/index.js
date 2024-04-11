// @ts-check

const Todo = require("../db/models/todo");

module.exports.findAll = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
};

module.exports.findById = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    res.status(200).json({ todo });
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
};

module.exports.save = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(200).json({ todoSaved: todo });
  } catch (e) {
    res.status(500).json({ error: "server can't save this todo" });
  }
};

module.exports.remove = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "not found" });
    }
    await todo.destroy();
    res.status(200).json({ todoDeleted: todo });
  } catch (e) {
    res.status(404).json({ error: "not exists" });
  }
};

module.exports.update = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.body.id);
    if (!todo) {
      return res.status(404).json({ error: "not found" });
    }
    await todo.update(req.body);
    res.status(200).json({ todoUpdated: todo });
  } catch (e) {
    res.status(500).json({ error: "update canceled" });
  }
};
