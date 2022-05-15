import {createStore} from 'vuex'
import router from '../router'
import firebase from '../services/firebase'

export default createStore({
  state: {
    user: 'Alperen Aslan',
    events: [],
    event: {}
  },

  mutations: {
    ADD_EVENT(state, value) {
      state.events.push(value)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },

  actions: {
    createEvent({commit}, event) {
      firebase.postEvent(event)
      commit('ADD_EVENT', event)
    },
    fetchEvents({commit}) {
      return firebase.getEvents()
        .then(response => {
          commit('SET_EVENTS', response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchEvent({commit, state}, id) {
      const existingEvent = state.events.find(event => event.id === id)
      if (existingEvent) {
        commit('SET_EVENT', existingEvent)
      } 
      else {
        return firebase.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response)
            if(!response) {
              router.push({
                name: 'NotFoundEvent',
                params: { 
                  resource: "event",
                  id: id 
                }
              })
            }
          })
      }
    }
  },

  modules: {}
})