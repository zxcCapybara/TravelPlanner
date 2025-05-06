<script setup lang="ts">
import { useUserStore } from "../stores/user.ts";
import { computed, type ComputedRef, ref } from "vue";

const userStore = useUserStore();

interface IMenuItem {
  label: string;
  icon: string;
  path: string;
  show: ComputedRef<boolean>;
  class?: string;
  action?: () => Promise<void>;
}

const signOutMethod = async () => {
 
};

const items = ref<IMenuItem[]>([
  {
    label: "Авторизация",
    icon: "pi pi-user",
    path: "/auth",
    class: "absolute right-10 top-5",
    show: computed((): boolean => !userStore.userId.length),
  },
  {
    label: "Все путешествия",
    icon: "pi pi-list",
    path: "/",
    show: computed((): boolean => !!userStore.userId),
  },
  {
    label: "Создание",
    icon: "pi pi-list",
    path: "/trip",
    show: computed((): boolean => !!userStore.userId),
  },
  {
    label: "Редактирование",
    icon: "pi pi-list",
    path: "/trip/:id/edit",
    show: computed((): boolean => !!userStore.userId),
  },
  {
    label: "Выйти",
    icon: "pi pi-sign-out",
    path: "",
    show: computed((): boolean => !!userStore.userId),
    class: "absolute right-10 text-black",
    action: signOutMethod,
  },
]);
</script>

<template>
  <header class="flex items-center p-5 bg-gray-100 rounded-lg shadow-xs">
    <h1 class="pr-10"><span class="text-blue-500">Travel</span>Planner</h1>
    <ul class="flex gap-5">
      <li v-for="(item, i) in items" :key="i">
        <div v-if="item.show" class="hover:text-blue-500">
          <router-link :to="item.path">
            <p :class="item.class">{{ item.label }}</p>
          </router-link>
        </div>
      </li>
    </ul>
    <p></p>
  </header>
</template>

<style scoped></style>
