<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <main class="m-10">
    <RouterView />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

body {
  font-family: "Raleway", sans-serif;
}
</style>
