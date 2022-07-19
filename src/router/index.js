import { createWebHistory, createRouter } from "vue-router"

import HomePage from "../components/HomePage.vue"
import About from "../components/AboutPage.vue"
import TodoApp from "../components/TodoApp.vue"

const routes = [
  //config
  {
    path: "/",
    component: [HomePage, To],
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/todos",
    component: TodoApp,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
