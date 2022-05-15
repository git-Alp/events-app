<template>
<div class="event-details" v-if="event">
  <h1>{{event.title}}</h1>
  <p>{{event.time}} on {{event.date}} @ {{event.location}}</p>
  <p>{{event.description}}</p>
</div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import store from '../store';

const props = defineProps(['id']);

let event = computed(() => store.state.event);

let handleFetchEvent = () => {
  store.dispatch('fetchEvent', props.id)
}

onMounted(() => {handleFetchEvent()})

</script>