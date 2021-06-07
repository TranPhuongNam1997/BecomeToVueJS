import Vue from 'vue'
import App from './App.vue'
//mặc định nối vào index trong store
import store from './store'

// import store from './store';



new Vue({
  el: '#app',
  // để kết nối store với vue
  store,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue