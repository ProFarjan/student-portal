import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import(/* webpackChunkName: "forgot" */ "../views/Forgot"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/dashboard/index"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  NProgress.set(0.1);

  const publicPages = ["/", "/forgot"];
  const authRequired = publicPages.includes(to.path);
  if (!authRequired && !store.state.auth.authorized) {
    localStorage.clear();
    return next({ path: "/" });
  }
  if (authRequired && store.state.auth.authorized) {
    localStorage.clear();
    store.state.auth.authorized = false;
  }
  return next();
});

router.afterEach(() => {
  setTimeout(() => NProgress.done(), 100);
});

export default router;
