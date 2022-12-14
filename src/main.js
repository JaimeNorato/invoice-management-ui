import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

store.dispatch("getUser");
createApp(App).use(store).use(router).mount("#app");
