import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App).use(router);
app.use(VueAxios, { $request: axios });
app.mount("#app");
