import { createStore } from "vuex"

const storage = {
  fetch() {
    const arr = []
    // 로컬 스토리지의 아이템 목록 뿌리기
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    return arr
  },
}

const store = createStore({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    // state 변수는 외부 컴포넌트에서 수정 불가능하므로
    // mutation 내 정의된 함수를 이용해야 상태의 변경 가능함.
    addTodo(state, todoItem) {
      if (todoItem !== "") {
        let obj = { completed: false, item: todoItem }
        localStorage.setItem(todoItem, JSON.stringify(obj))
        state.todoItems.push(obj)
        console.log(todoItem)
      } else {
        alert("내용 입력하세요.")
      }
    },
    removeOneItem(state, todoItem) {
      const index = state.todoItems.findIndex((todo) => todo === todoItem)
      state.todoItems.splice(index, 1)
    },
    toggleComplete(state, todoItem) {
      const index = state.todoItems.findIndex((todo) => todo === todoItem)
      state.todoItems[index].completed = !state.todoItems[index].completed
      console.log(index)
      // localStorage.removeItem(todoItem)
      // localStorage.setItem(todoItem.item, JSON.stringify(todoItem[index]))
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
