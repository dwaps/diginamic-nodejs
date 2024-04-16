// Importer Axios
import axios from "axios";

export default class TodoService {
  static #_baseUrl = "http://localhost:3000/api/todos";

  static async findAll() {
    try {
      const response = await axios.get(TodoService.#_baseUrl);
      return response.data?.todos ?? [];
    } catch (error) {
      console.error("Les tâches n'ont pas pu être récupérées", error);
      throw error;
    }
  }

  static async create(todo) {
    try {
      await axios.post(TodoService.#_baseUrl, todo);
    } catch (error) {
      console.error("La tâche n'a pas pu être crée", error);
      throw error;
    }
  }
}
