<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearAll">Clear</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll() {
      this.$emit("clearAll") //이벤트 명을 전달해주어야 한다.
    },
  },
}
</script>
<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
