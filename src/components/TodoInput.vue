<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <span class="addContainer" @click="addTodo">
      <i class="far fa-plus-square addBtn"></i>
    </span>
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
        var obj = { completed: false, item: this.newTodoItem }
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj))
        this.clearInput()
      }
    },
    clearInput() {
      this.newTodoItem = ""
    },
  },
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 3px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #62eac6, #32cee6);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: yellow;
  vertical-align: middle;
}
</style>
