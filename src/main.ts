import "./style.css";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import { initializeApp } from "firebase/app";

import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";

const firebaseConfig = {
  apiKey: "AIzaSyBjMUyKYJc1f9zGTTDlsaG7VMYYNkVL5Bc",
  authDomain: "travelplanner-5f38c.firebaseapp.com",
  projectId: "travelplanner-5f38c",
  storageBucket: "travelplanner-5f38c.firebasestorage.app",
  messagingSenderId: "91341225988",
  appId: "1:91341225988:web:8d453e77b1ad085b577551",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
