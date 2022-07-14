<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoHeader />
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue"
import TodoHeader from "./components/TodoHeader.vue"
import TodoFooter from "./components/TodoFooter.vue"
import TodoList from "./components/TodoList.vue"

export default {
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
