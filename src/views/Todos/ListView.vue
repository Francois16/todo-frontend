<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import { Icon } from "@iconify/vue";

const todos = ref("");

async function getTodos() {
  try {
    const resp = await axios.get("/todo/list/");
    todos.value = resp.data;
  } catch (error) {
    console.log("getTodos", error);
  }
}

async function deleteTodo(id) {
  try {
    // const resp = await axios.delete(`/todo/delete/${id}`);

    const index = todos.value.findIndex((todo) => todo.id == id);
    todos.value.splice(index, 1);
  } catch (error) {
    console.log("[ERROR]", error);
  }
}

onBeforeMount(() => {
  getTodos();
});
</script>

<template>
  <div class="bg-light min-h-screen pt-20">
    <div class="container max-w-3xl">
      <div class="p-8 bg-white rounded shadow-xl">
        <Navbar />
        <main class="mt-10">
          <div
            class="flex flex-row justify-between items-center w-full border-b pb-4 mb-6"
          >
            <p class="text-3xl font-display">Tasks</p>
            <Icon
              icon="material-symbols:playlist-add"
              width="30"
              class="hover:(text-emerald-600) duration-200 cursor-pointer"
            />
          </div>

          <div v-auto-animate class="flex flex-col gap-4 text-white">
            <div
              v-for="todo in todos"
              :key="todo.id"
              class="flex items-center justify-between p-4 rounded bg-dark-grey"
            >
              <div>
                <p class="text-lg font-semibold">{{ todo.title }}</p>
                <p class="text-xs">{{ todo.description }}</p>
              </div>
              <div class="flex flex-row items-center gap-2">
                <Icon
                  icon="ic:sharp-edit-note"
                  width="30"
                  class="duration-200 hover:(text-sky-600) cursor-pointer"
                />
                <Icon
                  @click="deleteTodo(todo.id)"
                  icon="fluent:delete-28-filled"
                  width="25"
                  class="duration-200 hover:(text-red-600) cursor-pointer"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
th,
td {
  @apply p-4 border-r;
}
</style>
