<template>
  <div></div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters("diary", ["getDiaries"]),
  },
}
</script>
<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
.date {
  color: #2f3b52;
  font-weight: 300;
  font-size: 20px;
  margin: 2.5rem 0 1.5rem;
}
</style>
