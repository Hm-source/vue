<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearAll">Clear</span>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  methods: {
    ...mapActions("todoApp", ["clearAll"]),
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
