import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import UserForm from "../views/UserForm.vue";
import PreviewPage from "../views/PreviewPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: UserForm },
  { path: "/preview", name: "preview", component: PreviewPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
