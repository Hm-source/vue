<template>
  <section class="home">
    <div>
      <h1>Hyomin's page</h1>
      <router-link to="/about"
        ><slot><h2>About</h2></slot></router-link
      >
      <router-link to="/todos"
        ><slot><h2>Todo</h2></slot></router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  methods: {},
}
</script>

<style></style>
