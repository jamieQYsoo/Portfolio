import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
import NotFound from "../pages/NotFound.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/projects/:slug",
      name: "project",
      component: ProjectDetail,
      props: true,
    },
    { path: "/:pathMatch(.*)*", name: "notfound", component: NotFound },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
