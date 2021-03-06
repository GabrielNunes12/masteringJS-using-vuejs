import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import router from './routes/router';
import firebaseVue from './firebase';

import axios from "axios";
import { i18n } from "./i18n";
import store from './store'

Vue.use(axios);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(firebaseVue);

export const eventBus = new Vue({
  methods: {
    addAnime(newestAnime) {
      this.$emit('addAnime', newestAnime);
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
