// @ts-check

const { findAll, findById, create, remove, update } = require("../db/queries");

module.exports.homePage = async (req, res) => {
  res.redirect("/todos");
};

module.exports.todosPage = async (req, res) => {
  if (req.method.toLowerCase() === "post") {
    const todo = req.body;

    if (req?.file?.destination && req?.file?.filename) {
      todo.image = req.file.destination + req.file.filename;
    }

    if (todo.title && todo.description) {
      try {
        await create(todo);
        req.setFlashMessage("success", "La tâche a été créé avec succès.");
      } catch (e) {
        req.setFlashMessage("error", "La tâche n'a pas pu être créé.");
      }
    } else {
      req.setFlashMessage("error", "Le formulaire est invalide.");
    }
    res.redirect("/todos");
  } else {
    try {
      const todos = await findAll();
      const fm = req.getFlashMessage();
      res.render("base", { todos, fm });
    } catch (error) {
      res.render("base", { todos: [] });
    }
  }
};
