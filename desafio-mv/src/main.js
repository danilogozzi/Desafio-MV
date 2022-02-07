import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'animate.css';
import vueaxios from 'vue-axios'

Vue.config.productionTip = false
new Vue({
  mounted () {
    this.$store.dispatch('getUsers')
},
  vueaxios,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
