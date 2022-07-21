<template>
  <div>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <TodoHeader />
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue"
import TodoHeader from "./TodoHeader.vue"
import TodoFooter from "./TodoFooter.vue"
import TodoList from "./TodoList.vue"

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
