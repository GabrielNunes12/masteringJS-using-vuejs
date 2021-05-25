import Vue from 'vue'
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import Home from './views/components/Home.vue';
import Anime from './views/components/Anime.vue';
import About from './views/components/About.vue';
import axios from 'axios';


Vue.use(axios);
Vue.use(BootstrapVue);
Vue.use(VueRouter);


const router = new VueRouter({
  routes: [
    {
      path: '/', 
      name: 'home',
      component: Home
    },
    {
      path: '/anime', 
      name: 'anime',
      component: Anime
    },
    {
      path: '/about', 
      name: 'about',
      component: About
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
