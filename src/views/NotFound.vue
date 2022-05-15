<template>
<div>
  <h2>404</h2>
  <h3>Sorry, the page is you're looking for is not here.</h3>
  <router-link class="homepage-router" :to="{name: 'EventList'}">
    Back to the home page
  </router-link>
</div>
</template>

<script setup>

</script>

<style scoped>
.homepage-router {
  color: #42b983;
  font-size: 18px;
  font-weight: bolder;
}
</style>