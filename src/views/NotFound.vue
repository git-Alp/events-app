<template>
<div>
  <h1>404</h1>
  <h2>Sorry, the {{resource}} is you're looking for is not here.</h2>
  <router-link class="homepage-router" :to="{name: 'EventList'}">
    Back to the home page
  </router-link>
</div>
</template>

<script setup>
const props = defineProps({
  resource: {
    type: String,
    default: 'page'
  }
});

</script>

<style>
.homepage-router {
  color: #42b983;
  font-size: 18px;
  font-weight: bolder;
}
</style>