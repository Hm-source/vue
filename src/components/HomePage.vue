<template>
  <section class="home">
    <div>
      <i class="fa fa-user-circle" aria-hidden="true"></i>
      <h1>Hyomin's page</h1>
      <router-link to="/about"
        ><slot><h2>About</h2></slot></router-link
      >
      <router-link to="/todos"
        ><slot><h2>Todo</h2></slot></router-link
      >
      <router-link to="/diaries/list"
        ><slot><h2>Diary</h2></slot></router-link
      >
    </div>
  </section>
</template>


