// @ts-check

const { findAll, findById, create, remove, update } = require("../db/queries");

module.exports.findAll = async (req, res) => {
  try {
    const todos = await findAll();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

module.exports.findById = async (req, res) => {
  try {
    const todo = await findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

module.exports.save = async (req, res) => {
  const todo = req.body;

  if (req?.file?.destination && req?.file?.filename) {
    todo.image = req.file.destination + req.file.filename;
  }

  if (todo.title && todo.description) {
    try {
      const todoSaved = await create(todo);
      res.status(200).json({ todoSaved });
    } catch (e) {
      res.status(500).json({ error: "server error" });
    }
  } else {
    res.status(403).json({ error: "La tâche est invalide" });
  }
};

module.exports.remove = async (req, res) => {
  try {
    const todo = await remove(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ todoDeleted: todo });
  } catch (e) {
    res.status(500).json({ error: "server error" });
  }
};

module.exports.update = async (req, res) => {
  try {
    const todo = await update(req.body.id);
    if (!todo) {
      return res.status(404).json({ error: "not found" });
    }
    res.status(200).json({ todoUpdated: todo });
  } catch (e) {
    res.status(500).json({ error: "server error" });
  }
};
