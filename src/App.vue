<script setup>
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/useAuth.js";

onBeforeMount(() => {
  const auth = useAuthStore();
  auth.setUserAuthenticationStatus();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
