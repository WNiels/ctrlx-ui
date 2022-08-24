import Vue from "vue";
import VueRouter from "vue-router";

// Pages
import Home from "./components/Home.vue";
import Diagnostics from "./components/diagnostics.vue";
import Commissioning from "./components/commissioning.vue";
import Settings from "./components/settings.vue";
// import Page4a from "./components/Page4a.vue";
// import Page4b from "./components/Page4b.vue";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "ctrlxui",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/diagnostics",
      component: Diagnostics,
    },
    {
      path: "/commissioning",
      component: Commissioning,
    },
    {
      path: "/settings",
      component: Settings,
    },
    // {
    //   path: "/page4a",
    //   component: Page4a,
    // },
    // {
    //   path: "/page4b",
    //   component: Page4b,
    // },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

export default router;
