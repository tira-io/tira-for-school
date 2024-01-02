import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "StudentPage",
      component: () => import("../views/StudentPageView.vue"),
    },
  ],
});

export default router;
