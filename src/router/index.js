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
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/account/Profile"),
  },
  {
    path: "/result",
    name: "Result",
    component: () =>
      import(/* webpackChunkName: "result" */ "../views/result/result"),
  },
  {
    path: "/payments",
    name: "payments",
    component: () =>
      import(/* webpackChunkName: "payments" */ "../views/payments/history"),
  },
  {
    path: "/recourse",
    name: "recourse",
    component: () =>
      import(/* webpackChunkName: "recourse" */ "../views/registration/recourse"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () =>
      import(/* webpackChunkName: "registration" */ "../views/registration/registration"),
  },
  {
    path: "/online-payment",
    name: "online-payment",
    component: () =>
      import(/* webpackChunkName: "OnlinePayment" */ "../views/payments/OnlinePayment"),
  }
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
  window.scrollTo(0, 0);
  setTimeout(() => NProgress.done(), 100);
});

export default router;
