<template>
  <div>
    <input type="text" v-model="newTodoItem" />
    <button @click="addTodo" @keyup.enter="addTodo">add todo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem === "") {
        alert("내용을 입력하세요.")
      } else {
        console.log(this.newTodoItem)
        localStorage.setItem(this.newTodoItem, this.newTodoItem)
        this.newTodoItem = ""
      }
    },
  },
}
</script>
