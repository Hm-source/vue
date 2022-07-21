<template>
  <div>
    <div class="box">
      <div><h2>title : {{ getDiaries[($route.params.id)-1].title}}</h2></div>
      <div class='content'>content:  {{ getDiaries[($route.params.id)-1].content}}</div>
      <br>
      <div>date: {{ getDiaries[($route.params.id)-1].date }}</div>
    </div>
    

  </div>
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
.box {
  display: flexbox;
  width: 30%;
  background-color: rgb(182, 238, 219);
  text-align: center;
  margin: auto;
  padding: 10px;
  border-radius: 20px;

}
.content {
  font-size: 23px;
}
</style>
