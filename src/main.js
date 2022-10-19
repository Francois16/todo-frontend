import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

import "virtual:windi.css";

const app = createApp(App);

axios.defaults.baseURL = "http://localhost:8000";

app.use(createPinia());
app.use(router);

app.mount("#app");
