
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

const store = new Vuex.Store({

  //start state
  state,

  //start getters

  // giống y như computed  -  xử lý dữ liệu trước khi trả về các component
  getters,

  //start mutations

  // mutations -> chứa các method dùng để thay đổi giá trị trong state --- nên viết theo kiểu như này để dự án dễ bảo trì dễ quản lý 
  mutations,

  //start action
  actions


})

export default store;