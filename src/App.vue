<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoHeader />
    <TodoInput @addItem="addOneItem"></TodoInput>
    <TodoList :propsdata="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem"></TodoList>
    <TodoFooter @clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue"
import TodoHeader from "./components/TodoHeader.vue"
import TodoFooter from "./components/TodoFooter.vue"
import TodoList from "./components/TodoList.vue"

export default {
  data() {
    return { todoItems: [] }
  },
  methods: {
    addOneItem(todoItem) {
      var obj = { completed: false, item: todoItem }
      localStorage.setItem(todoItem, JSON.stringify(obj))
      console.log(obj)
      this.todoItems.push(obj)
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItems() {
      this.todoItems = []
      localStorage.clear()
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoFooter,
    TodoList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
