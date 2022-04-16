<template>
<div class="event-details" v-if="event">
  <h1>{{event.title}}</h1>
  <p>{{event.time}} on {{event.date}} @ {{event.location}}</p>
  <p>{{event.description}}</p>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import router from '../router';
import EventService from '../services/EventService';

const props = defineProps(['id']);

let event = ref(null)

let handleGetEvent = () => {
  EventService.getEvent(props.id)
  .then(response => {
    event.value = response.data
  })
  .catch(error => {
    router.push({ name: 'NotFound' })
    console.log(error);
  })
}

onMounted(() => {
  handleGetEvent()
})

</script>

<style>

</style>