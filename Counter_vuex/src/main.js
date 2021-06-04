import Vue from 'vue'
import App from './App.vue'
// import store from './store';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10,
    value: 1000,
  },
  // mutations -> chứa các method dùng để thay đổi giá trị trong state --- nên viết theo kiểu như này để dự án dễ bảo trì dễ quản lý 
  mutations:{
    //              payload
    increment(state,number){
      console.log('mutation increment',state)
      state.count += number;
    },
    //              payload

    decrement(state,number){
      console.log('mutation decrement',state)

      state.count -=number;
    }
  },
  // giống y như computed  -  xử lý dữ liệu trước khi trả về các component
  getters:{
    count: state =>{
      return state.count;
    },

    value: state =>{
      return state.value;
    },
    
    countDouble: state =>{
      return state.count*2;
    },

  }

})

new Vue({
  el: '#app',
  // để kết nối store với vue
  store,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue