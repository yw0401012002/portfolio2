import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/import.css";

// drawer
import "./assets/jquery/drawer/drawer.css";

// slick
import "./assets/jquery/slick/slick-theme.css";
import "./assets/jquery/slick/slick.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).use(VueRouter).mount("#app");
