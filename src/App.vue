<template>
  <div>
    <router-link to="/" class="to-home"> <i class="fa fa-home" aria-hidden="true"></i></router-link>
    <router-view to="/todos"></router-view>
  </div>
</template>

<style lang="scss">
@import "scss/style";
.to-home.router-link-exact-active {
  display: none;
}
</style>
