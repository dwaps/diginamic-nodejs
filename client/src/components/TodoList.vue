<template>
  <form @submit.prevent="addTodo">
    <input autofocus type="text" v-model="newTodo.title" placeholder="Titre" />
    <input
      type="text"
      v-model="newTodo.description"
      placeholder="Description"
    />
    <button type="submit">Ajouter Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }} - {{ todo.description }}
      <button @click="deleteTodo(todo._id)">Supprimer</button>
    </li>
  </ul>
</template>

<script>
import TodoService from "@/services/TodoService";

export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
      newTodo: {},
    };
  },
  mounted() {
    this.findAll();
  },
  methods: {
    async findAll() {
      try {
        this.todos = await TodoService.findAll();
      } catch (error) {
        console.error(error);
      }
    },
    async addTodo() {
      try {
        await TodoService.create(this.newTodo);
        this.findAll();
        this.newTodo = {};
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>
