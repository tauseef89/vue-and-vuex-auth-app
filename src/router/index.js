import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/Login.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/components/Register.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/components/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next("/login");
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next("/dashboard");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
