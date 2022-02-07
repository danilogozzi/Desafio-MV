import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex,VueAxios, axios)

export default new Vuex.Store({
  
  state: {
    users:[
    ],
    user:Number
  },
  mutations: {
    SET_USERS(state, payload){
      state.users = payload
    },
    postUsers(state, payload){
      state.users.push(payload)
    },
    deleteUsers(state, payload){
      state.users.splice(payload, 1)
    },
    setUsers(state, payload){
      state.user = payload
    }
  },
  actions: {
    getUsers ({ commit }) {
      axios
          .get('https://api.mockaroo.com/api/83424750?count=10&key=7982f060')
          .then(response => response.data)
          .then(users => {
          commit('SET_USERS', users)
          })
  }
  },
  getters: {
    users: state => {
        return state.users;
    }
},
  modules: {
  }
  
})
