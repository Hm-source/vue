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
      this.$emit("addItem", this.newTodoItem) // addTodo 메소드가 실행되며 사용자 생성 이벤트 'addItem'을 실행시켜 인자로 newTodoItem을 전달한다.
      // App.vue에서는 'addOneItem' 메소드를 실행시키며 localStorage와 todoItems 데이터를 동시에 갱신시킨다.
      this.clearInput()
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
