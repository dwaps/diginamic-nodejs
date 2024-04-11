// @ts-check

// TODO Utiliser le modèle !!!

const { urlApi } = require(`../env/env.${process.env.NODE_ENV}`);
const axios = require("axios");

module.exports = class TodoService {
  #_baseUrl = urlApi + "/todos";

  static instance;

  constructor() {
    if (!TodoService.instance) {
      TodoService.instance = this;
    }
    return TodoService.instance;
  }

  findAll() {
    // @ts-ignore
    return axios.get(`${this.#_baseUrl}`).then((res) => res.data);
  }

  findById(id = "") {
    // @ts-ignore
    return axios.get(`${this.#_baseUrl}/${id}`).then((res) => res.data);
  }

  save(todo = null) {
    return todo
      ? // @ts-ignore
        axios.post(`${this.#_baseUrl}`, todo).then((res) => res.data)
      : null;
  }

  remove(id = "") {
    // @ts-ignore
    return axios.delete(`${this.#_baseUrl}/${id}`).then((res) => res.data);
  }

  update(todo = null) {
    return todo
      ? axios
          // @ts-ignore
          .patch(`${this.#_baseUrl}/${todo.id}`)
          .then((res) => res.data)
      : null;
  }
};
