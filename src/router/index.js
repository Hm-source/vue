import { createWebHistory, createRouter } from "vue-router"

import Home from "../components/HomePage.vue"
import About from "../components/AboutPage.vue"
import TodoApp from "../components/Todo/TodoApp.vue"
import DiaryApp from "../components/Diary/DiaryApp.vue"
import DiaryList from "../components/Diary/DiaryList.vue"
import DiaryDetail from "../components/Diary/DiaryDetail.vue"
import DiaryInput from "../components/Diary/DiaryInput.vue"
const routes = [
  //config
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/todos",
    name: "todos",
    component: TodoApp,
  },
  {
    path: "/diaries",
    name: "diaries",
    component: DiaryApp,
    children: [
      {
        path: "write",
        name: "diaryWrite",
        component: DiaryInput,
      },
      {
        path: "list",
        name: "diaryList",
        component: DiaryList,
      },
      {
        path: "detail/:id",
        name: "diaryDetail",
        component: DiaryDetail,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
