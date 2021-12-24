import { createApp } from "vue";

import App from "./vue/App.vue";
import router from "./router";

//We specify the root file is App.vue and will be loaded in #app.
//We specify we want to use the router in our app
createApp(App).use(router).mount("#app");
