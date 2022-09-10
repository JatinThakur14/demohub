import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBolt, faSortDown } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";
import router from "./router";
import "@fontsource/ibm-plex-sans-condensed";
import "@/assets/main.css";

library.add(faBolt, faSortDown);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
