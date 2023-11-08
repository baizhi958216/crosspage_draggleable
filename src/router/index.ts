import { createRouter, createWebHashHistory } from "vue-router";
import PageA from "../views/PageA.vue";
import PageB from "../views/PageB.vue";

const routes = [
  {
    path: "/a",
    component: PageA,
  },
  {
    path: "/b",
    component: PageB,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
