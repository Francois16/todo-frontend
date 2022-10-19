import { createRouter, createWebHistory } from "vue-router";
import TodoListView from "../views/Todos/ListView.vue";
import LoginView from "../views/auth/LoginView.vue";
import RegisterView from "../views/auth/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // Instantly redirect to todo listview on page load
      redirect: "todos",
    },
    {
      path: "/todos",
      name: "todos",
      component: TodoListView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // const publicPages = ["login/", "register/"];
  return next();
});

export default router;
