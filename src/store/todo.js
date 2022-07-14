import { createStore } from "vuex"

const store = createStore({
  state: {
    todoItems: [],
  },
  mutations: {
    // state 변수는 외부 컴포넌트에서 수정 불가능하므로
    // mutation 내 정의된 함수를 이용해야 상태의 변경 가능함.
    addTodo(state, todoItem) {
      let obj = { completed: false, item: todoItem }
      localStorage.setItem(todoItem, JSON.stringify(obj))
      state.todoItems.push(obj)
    },
    removeTodo(state, todoItem, index) {
      localStorage.removeItem(todoItem)
      state.todoItems.splice(index, 1)
    },
    toggleComplete(state, todoItem, index) {
      localStorage.removeItem(todoItem)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem[index]))
      state.todoItems[index].completed = !state.todoItems[index].completed
    },
    clearAll(state) {
      localStorage.clear()
      state.todoItems = []
    },
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems
    },
  },
  actions: {},
})

export default store
