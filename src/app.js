import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Optionally install the vue-json-pretty components
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
Vue.component("VueJsonPretty", VueJsonPretty);

import { Uib, uibuilder } from "./../../../node_modules/node-red-contrib-uibuilder/front-end/uibuilder.esm.js";
// window.uibuilder = uibuilder;
// uibuilder.logLevel = 5
// uibuilder.start({ ioNamespace: "https://192.168.0.7:1880/ctrlxui", loadStylesheet: false });
uibuilder.start("https://192.168.0.7:1880/ctrlxui");
// uibuilder.debug(false)

// Enable Vue Devtools
Vue.config.devtools = true;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
