import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import API from "@/config/Api";
import axios from "axios";
import "./plugins/bootstrap-vue";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Global from "@/config/Global";
import Notifications from "vue-notification";
import velocity from "velocity-animate";
import Notify from "@/plugins/notify";

// Install VeeValidate rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
localize("en", en);
// Install VeeValidate components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

import VueLadda from "vue-ladda";
Vue.component("vue-ladda", VueLadda);
Vue.use(Notifications, { velocity });

import "@/assets/css/themes/lite-purple.css";

Vue.config.productionTip = false;

axios.defaults.baseURL = API.URL;
Vue.http = Vue.prototype.$http = axios;
Vue.api = Vue.prototype.$api = API;
Vue.msg = Vue.prototype.$msg = Notify;

new Vue({
  mixins: [Global],
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
