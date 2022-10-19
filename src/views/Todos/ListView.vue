<script setup>
import { ref } from "vue";
import axios from "axios";
import { Icon } from "@iconify/vue";

const todos = ref("");

async function getTodos() {
  try {
    const resp = await axios.get("/todo/list/");
    console.log(resp.data);
    todos.value = resp.data;
  } catch (error) {
    console.log("getTodos", error);
  }
}
</script>

<template>
  <h1>ListView <Icon icon="ic:baseline-person" /></h1>
  <h1>Todos</h1>
  <div v-for="todo in todos">
    <h1>
      {{ todo.title }}
    </h1>
  </div>
  <button @click="getTodos">Get todos</button>
</template>

<style scoped></style>
