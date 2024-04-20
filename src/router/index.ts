import { createRouter, createWebHistory } from "vue-router";
import First from "../views/First.vue";
import Second from "../views/Second.vue";

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", redirect: { name: "first" }},
		{ path: "/first", name: "first", component: First },
		{ path: "/second", name: "second", component: Second }
	]
});
