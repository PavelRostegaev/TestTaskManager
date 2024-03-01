<template>
  <nav>
    <router-link to="/">Домашняя страница</router-link> |
    <router-link to="/about">Страница с задачами</router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
}

body {
  background: #F9FAFF;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252525e7;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(0, 218, 80);
}
</style>
