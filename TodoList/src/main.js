import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './plugin' // Tự động tìm đến file index.js


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
