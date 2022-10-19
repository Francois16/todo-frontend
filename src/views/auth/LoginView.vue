<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/useAuth.js";
import { Icon } from "@iconify/vue";

import axios from "axios";

const auth = useAuthStore();
const router = useRouter();

const errors = ref(null);
const email = ref("");
const password = ref("");

async function login() {
  try {
    const resp = await axios.post("/auth/jwt/create/", {
      email: email.value,
      password: password.value,
    });

    // Extract access token from response
    const token = resp.data.access;

    // Set token in local storage
    localStorage.setItem("token", token);

    // Authenticate the user on the frontend
    auth.setUserAuthenticationStatus();

    // Redirect to /
    router.push("/");
  } catch (error) {
    errors.value = error.response.data.detail;
    auth.logout();
  }
}

async function demoLogin() {
  email.value = "demo@user.com";
  password.value = "demouser123";
  login();
}
</script>

<template>
  <main class="bg-light min-h-screen relative">
    <div
      class="container transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute max-w-lg"
    >
      <form
        v-auto-animate
        class="bg-white rounded-lg flex flex-col shadow-lg p-4 gap-4"
        @submit.prevent="login"
      >
        <div class="font-extrabold text-center text-5xl my-5 font-display">
          Login
        </div>
        <p class="text-center text-red-600" v-if="errors">{{ errors }}</p>
        <input
          class="rounded"
          v-model="email"
          type="email"
          placeholder="Email"
        />
        <input
          class="rounded"
          v-model="password"
          type="password"
          placeholder="Password"
        />

        <button
          class="rounded font-semibold bg-sky-500 text-white py-3 duration-200 hover:(bg-sky-600)"
          type="submit"
        >
          Login
        </button>
        <p class="text-center">-- or --</p>
        <button
          @click="demoLogin"
          class="rounded font-semibold bg-violet-500 text-white py-3 duration-200 hover:(bg-violet-600)"
        >
          login as Demo User
        </button>
      </form>
    </div>
  </main>
</template>
