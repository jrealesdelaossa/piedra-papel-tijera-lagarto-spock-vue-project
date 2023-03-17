import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => {
      return import(/* webpackChunkName: "home" */ "../views/HomeView.vue");
    },
  },
  {
    path: "/game",
    name: "Game",
    component: () => {
      return import(/* webpackChunkName: "the-game" */ "../views/TheGame.vue");
    },
  },
  {
    path: "/rules",
    name: "Rules",
    component: () => {
      return import(
          /* webpackChunkName: "the-rules" */ "../views/TheRules.vue"
          );
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
