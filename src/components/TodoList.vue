<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in getTodoItems" :key="todoItem.index">
        <i
          class="checkBtn fas fa-check"
          aria-hidden="true"
          :class="{
            checkBtnCompleted: todoItem.completed,
          }"
          @click="toggle(todoItem, index)"
        ></i>
        <span :class="{ textCompleted: todoItem.completed }"> {{ todoItem.item }}</span>

        <span class="removeBtn" @click="removeOneItem(todoItem, index)">
          <span class="date">{{ todoItem.date }}</span>
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters("todoApp", ["getTodoItems"]),
  },
  methods: {
    ...mapActions("todoApp", ["toggle", "removeOneItem"]),
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.date {
  font-size: 5px;
  color: green;
  padding: 0 0.9rem;
}
</style>
