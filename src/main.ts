import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth } from "vuefire";

import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./firebase";

import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./firebase";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(VueFire, { firebaseApp });
app.use(createPinia());
app.use(vuetify);
app.use(router);

app.mount("#app");
