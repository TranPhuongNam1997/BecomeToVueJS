import Vue from 'vue'
import App from './App.vue'
// import store from './store';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  }
})

new Vue({
  el: '#app',
  // để kết nối store với vue
  store,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue