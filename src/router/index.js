import {createRouter, createWebHistory} from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/EventDetails.vue'
import EventCreate from '../views/EventCreate.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate,
  },
  {
    path: '/:resource/:id',
    name: 'NotFoundEvent',
    props: true,
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router