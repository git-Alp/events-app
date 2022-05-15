<template>
<h1>Events For Good</h1>
<div class="events">
  <EventCard v-for="event in events" :key="event.id" :event="event" />
</div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import router from '../router';
import store from '../store';
import EventCard from '../components/EventCard.vue'

let handleFetchEvents = () => {
  store.dispatch('fetchEvents')
    .catch(error => {
      console.log("EventList Error!", error);
      router.push({
        name: 'NotFoundEvent',
        params: { 
          resource: "",
          id: ""
        }
      })
    })
}

let events = computed(() => store.state.events);

onMounted(() => {
  handleFetchEvents()
});

</script>

<style>
.events {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
