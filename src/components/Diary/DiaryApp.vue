<template>
  <div>
    <h1>My Diary</h1>
    <div class="date">{{ time }}</div>
    <router-view></router-view>
    <br />
    <div>
      <br />
      <br />
      <br />
      <nav class="nav">
        <router-link :to="{ name: 'diaryList' }">다이어리 리스트</router-link>
        &nbsp;&nbsp;
        <router-link :to="{ name: 'diaryWrite' }">다이어리 작성</router-link>
      </nav>
    </div>
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
.nav {
  padding: 30px;
}
</style>
