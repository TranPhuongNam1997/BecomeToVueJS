import Vue from 'vue'
import Vuex from 'vuex'
import listblock from '../MockData/list-post'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    listblock
  },
  mutations: {
    
  }
})

export default store