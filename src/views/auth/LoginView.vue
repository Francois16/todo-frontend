<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/useAuth.js";
import axios from "axios";

const auth = useAuthStore();
const router = useRouter();

const errors = ref([]);
const email = ref("admin@email.com");
const password = ref("admin");

async function login() {
  try {
    const resp = await axios.post("/auth/jwt/create/", {
      email: email.value,
      password: password.value,
    });
    const token = resp.data.access;

    // Set token in local storage
    localStorage.setItem("token", token);

    // Authenticate the user
    auth.setUserAuthenticationStatus();
    router.push("/");
  } catch (error) {
    errors.value = error.response.data.detail;
    auth.logout();
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="login">
      <p>{{ errors }}</p>
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />

      <button type="submit">Login</button>
    </form>
    {{ auth.isAuthenticated }}
    {{ auth.user }}
    <button @click="auth.logout">Logout</button>
  </main>
</template>
