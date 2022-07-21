<template>
  <div>
    <ul>
      <li v-for="(diary, index) in getDiaries" :key="index">
        <span>
          <router-link :to="`/diaries/detail/${index + 1}`">title : {{ diary.title }}</router-link>
        </span>
        &nbsp;&nbsp;
        <span class="date">{{ "date :" + diary.date }}</span>
      </li>
    </ul>
    <button @click="pushWrite">write diary</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters("diary", ["getDiaries"]),
  },
  methods: {
    pushWrite() {
      this.$router.push({ name: "diaryWrite" })
    },
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
  background: rgb(167, 217, 236);
  border-radius: 5px;
  color: rgb(0, 0, 0);
}
.date {
  font-size: 12px;
  color: black;
  padding: 0 1rem;
}
</style>
