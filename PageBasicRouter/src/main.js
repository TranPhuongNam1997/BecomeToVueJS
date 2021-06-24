import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './Store'

Vue.use(Vuex)


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
