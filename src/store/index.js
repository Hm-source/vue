import { createStore } from "vuex"
import todoApp from "./todoApp"

const store = createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    todoApp,
  },
})

export default store
