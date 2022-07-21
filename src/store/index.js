import { createStore } from "vuex"
import todo from "./todo"
import diary from "./diary"

const store = createStore({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    todo,
    diary,
  },
})

export default store
