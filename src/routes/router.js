import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../views/components/Home.vue";
import Anime from "./../views/components/Anime.vue";
import About from "./../views/components/About.vue";
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/anime",
      name: "anime",
      component: Anime,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});