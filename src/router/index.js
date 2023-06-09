import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/create",
        name: "create",
        component: () => import("../views/CreateUser.vue"),
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: () => import("../views/EditUser.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
