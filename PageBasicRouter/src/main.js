import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './Store'
import Notifications from 'vue-notification'

Vue.use(Vuex)
Vue.use(Notifications)


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

