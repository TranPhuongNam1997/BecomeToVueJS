import Vue from 'vue'
import App from './App.vue'
import './plugin' // Tự động tìm đến file index.js


new Vue({
  el: '#app',
  render: h => h(App)
})
