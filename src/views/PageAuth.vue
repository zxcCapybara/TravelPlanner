<script setup lang="ts">
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "vue-router";

import { computed, ref } from "vue";


const email = ref<string>("");
const password = ref<string>("");

const isLogin = ref<boolean>(true);
const isLoading = ref<boolean>(false);

const subtitleText = computed<string>(() => {
  return isLogin.value ? "Аккаунта еще нет?" : "Уже есть аккаунт?";
});

const linkAccountText = computed<string>(() => {
  return isLogin.value ? "Создайте сейчас" : "Войдите в него";
});

const submitButtonText = computed<string>(() => {
  return isLogin.value ? "Вход" : "Регистрация";
});

const toggleAuth = () => (isLogin.value = !isLogin.value);

const submitForm = () => {

}
</script>

<template>
  <main class="mt-20">
    <div
      class="flex flex-col mx-auto items-center border-1 border-gray-100 rounded-xl sm:w-[30rem] shadow-lg"
    >
      <div class="flex flex-col items-center pb-6">
        <p class="my-5 text-xl font-bold">Приветствую!</p>
        <div>
          <span class="mr-2 text-gray-500">{{ subtitleText }}</span>
          <span class="text-blue-400 cursor-pointer" @click="toggleAuth">{{
            linkAccountText
          }}</span>
        </div>
      </div>

      <form @submit.prevent="submitForm" class="flex flex-col w-full px-10">
        <label for="email1">Email</label>
        <input
          v-model="email"
          type="text"
          id="email1"
          class="border-1 border-gray-300 p-2 outline-none rounded-md mb-5"
        />

        <label for="password1">Пароль</label>
        <input
          v-model="password"
          type="password"
          id="password1"
          class="border-1 border-gray-300 p-2 outline-none rounded-md mb-5"
        />

        <div
          class="flex items-center justify-between bg-blue-500 text-white py-1 px-3 rounded-md mb-5 cursor-pointer hover:bg-blue-600"
        >
          <span class="pi pi-user"></span>
          <div v-if="isLoading">
            <AuthLoader />
          </div>
          <button v-else type="submit">{{ submitButtonText }}</button>
          <span></span>
        </div>
      </form>
    </div>
  </main>
</template>

