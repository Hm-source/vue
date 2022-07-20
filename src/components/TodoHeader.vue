<template>
  <div>
    <h1>My Todo List</h1>
    <div class="date">{{ time }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return { now: "" }
  },
  computed: {
    time() {
      let date = new Date()
      return date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
    },
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
