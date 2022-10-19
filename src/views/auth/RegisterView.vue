<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("test@email.com");
const first_name = ref("test");
const surname = ref("test");
const password = ref("testpass123");
const errors = ref([]);

async function register() {
  try {
    const resp = await axios.post("/auth/users/", {
      email: email.value,
      first_name: first_name.value,
      surname: surname.value,
      password: password.value,
    });

    router.push("/login");
  } catch (error) {
    errors.value = error.response.data;
  }
}
</script>

<template>
  <main class="bg-light min-h-screen relative">
    <div
      class="container transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
    >
      <form
        v-auto-animate
        class="bg-white rounded-lg flex flex-col shadow-lg p-4 gap-4"
        @submit.prevent="register"
      >
        <div class="font-extrabold text-center text-5xl my-5 font-display">
          Register
        </div>
        <p class="text-center text-red-600" v-for="error in errors">
          {{ error[0] }}
        </p>
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="email">Email</label>
          <input class="rounded" v-model="email" type="email" required />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="first_name">First Name</label>
          <input class="rounded" v-model="first_name" type="text" required />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="surname">Surname</label>
          <input class="rounded" v-model="surname" type="text" required />
        </div>

        <div class="flex flex-col gap-1">
          <label for="password" class="text-sm">Password</label>
          <input class="rounded" v-model="password" type="password" required />
        </div>

        <button
          class="rounded font-semibold bg-sky-500 text-white py-3 duration-200 hover:(bg-sky-600)"
          type="submit"
        >
          Register
        </button>

        <span class="text-sm self-end"
          >Already a user?
          <RouterLink class="text-sky-400 underline" to="/login"
            >Login</RouterLink
          ></span
        >
      </form>
    </div>
  </main>
</template>
