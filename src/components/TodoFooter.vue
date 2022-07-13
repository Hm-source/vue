<template>
  <div class="clearAllTodos">
    <button @click="clearAll">clear all</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearAll() {
      localStorage.clear()
    },
  },
}
</script>
