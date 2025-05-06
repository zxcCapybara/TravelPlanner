import { createRouter, createWebHistory, type NavigationGuard, type RouteLocationNormalized, } from "vue-router";


const checkAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuard,
) => {
  let isAuth = false

  
}

const routes = [
  {
    path: "/",
    name: "TripList",
    component: () => import("../views/PageTripList.vue"),
  },
  {
    path: "/trip",
    name: "TripCreate",
    component: () => import("../views/PageTripCreate.vue"),
  },
  {
    path: "/trip/:id/edit",
    name: "TripEdit",
    component: () => import("../views/PageTripEdit.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/PageAuth.vue"),
  },
];

const router = createRouter({
  linkActiveClass: 'text-blue-700',
  history: createWebHistory(),
  routes,
});

export default router;
