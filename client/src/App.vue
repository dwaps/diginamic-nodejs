<template>
  <div>
    <h2>Liste de tâches</h2>
    <TodoList />
  </div>
</template>

<script>
import { TodoList } from "@/components";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style></style>
