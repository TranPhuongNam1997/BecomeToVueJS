import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import router from './router'

import './plugins'

Vue.use(Vuex)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
