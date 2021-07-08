import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'

import './Plugin'

// import './assets/css/bootstrap.min.css'
import './assets/css/all.css'
import './assets/css/animate.css'
import './assets/scss/main.min.css'

// import './assets/js/jquery.min.js'
// import './assets/js/bootstrap.min.js'
// import './assets/js/popper.min.js'
// import './assets/js/script.js'

Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
