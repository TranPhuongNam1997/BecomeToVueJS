import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
// import page
import HomePage from './Pages/HomePage.vue'
import Home from './Pages/Home.vue'
import AboutUs from './Pages/AboutUs.vue'
import Login from './Pages/Login.vue'
import ListUser from './Pages/ListUser.vue'
import NotFound from './Pages/Notfound.vue'


import './plugins'
import { LayoutPlugin } from 'bootstrap-vue'

Vue.use(Vuex)
Vue.use(VueRouter)


let islogin = true;

const routes = [
  { 
    path: '/', 
    component: HomePage,

    children:[
      {
        path: '', 
        component: Home,
      },
      {
        path: 'aboutus', 
        component: AboutUs,
      }
    ]
  },
  {
    path: '/login',component: Login
  },
  
  {
    // khi mà để dấu hỏi thì vue sẽ tự hiểu là không cần id cũng được
    path: '/user/:id?',
    component: ListUser,
    beforeEnter: (to, from, next) => {
      // nếu đăng nhập rồi thì chạy tiếp
      if(islogin){
        next();
      }

      //nếu chưa đăng nhập thì chạy về login
      else{
        next({
          path: '/login',
          // cái query này có tác dụng thể hiện phân biệt so với login     /login?ridirect=user
          query: { ridirect:'user'}
        })
      }
    }
  },

  //nếu như đường dẫn không thuộc bất cứ đường dẫn nào trong những cái trên thì sẽ vào cái * này 404

  {
    path: '*',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history', // để không phải dùng /#/ nữa
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach to',to)
  console.log('beforeEach from',from)
  console.log('beforeEach next',next);
  next();
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
