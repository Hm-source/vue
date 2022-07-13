<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TodoHeader />
  <TodoInput />
  <TodoList />
  <TodoFoot />
  <TodoApp />
</template>

<script>
import TodoApp from "./components/TodoApp.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoHeader from "./components/TodoHeader.vue"
import TodoFoot from "./components/TodoFooter.vue"
import TodoList from "./components/TodoList.vue"

export default {
  name: "App",
  components: {
    TodoApp,
    TodoHeader,
    TodoInput,
    TodoFoot,
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
