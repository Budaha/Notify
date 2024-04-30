// default
import { createRouter, createWebHistory } from "vue-router";

// pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Notify from "@/pages/NotifyPage.vue";

// routering
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/notify",
    name: "notify",
    component: Notify,
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
