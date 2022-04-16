<template>
<div class="app">
  <div class="nav">
    <router-link class="nav__link" :to="{name: 'EventList'}">Events</router-link> | 
    <router-link class="nav__link" :to="{name: 'About'}">About</router-link>
  </div>
  <router-view />
</div>
</template>

<style>
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .nav {
    padding: 30px;
  }

  .nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  .nav a.router-link-exact-active {
    color: #42b983;
  }

  .nav__link {
    margin: 0 10px;
    font-size: 20px;
  }
  
  h4 {
    font-size: 20px;
  }
</style>
