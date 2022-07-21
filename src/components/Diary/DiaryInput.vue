<template>
  <div class="inputBox shadow">
    title :
    <input type="text" v-model="newDiary.title" @keyup.enter="addDiary" />
    <div class="inputBox shadow">
      content :
      <input type="text" v-model="newDiary.item" @keyup.enter="addDiary" />
    </div>
    <div>
      <span class="addContainer" @click="addDiary">
        <i class="far fa-plus-square addBtn"></i>
      </span>
    </div>
    <button @click="pushList">diary list</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newDiary: {},
    }
  },
  methods: {
    addDiary() {
      this.$store.commit("diary/addDiary", this.newDiary)
      this.clearInput()
    },
    clearInput() {
      this.newDiary = {}
    },
    pushList() {
      this.$router.push({ name: "diaryList" })
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
