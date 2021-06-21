import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
// import page
import Home from './Pages/Home.vue'
import AboutUs from './Pages/AboutUs.vue'

import './plugins'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/aboutus', component: AboutUs },
]
const router = new VueRouter({
  mode: 'history', // để không phải dùng /#/ nữa
  routes // short for `routes: routes`
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
