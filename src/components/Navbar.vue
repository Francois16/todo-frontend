<script setup>
import { useAuthStore } from "../stores/useAuth.js";
import { useRouter } from "vue-router";

const router = useRouter();
const auth = useAuthStore();

function logout() {
  auth.logout();
  router.push("/login");
}
</script>

<template>
  <nav class="bg-transparent py-4 flex">
    <h1 class="font-display text-3xl">Todo</h1>

    <ul
      class="flex items-center justify-center ml-auto gap-4"
      v-if="!auth.isAuthenticated"
    >
      <li>
        <RouterLink class="py-2 px-4 rounded bg-sky-400" to="Login"
          >Login</RouterLink
        >
      </li>
      <li>
        <RouterLink class="py-2 px-4 rounded bg-violet-400" to="Register"
          >Regiser</RouterLink
        >
      </li>
    </ul>

    <!-- <ul class="flex items-center justify-center ml-auto gap-6" v-else=""> -->
    <button
      v-else
      @click="logout"
      class="ml-auto underline underline-offset-4 rounded px-4 hover:(text-red-600) duration-200"
    >
      Logout
    </button>
    <!-- </ul> -->
  </nav>
</template>
