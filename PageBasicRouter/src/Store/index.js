import Vue from 'vue'
import Vuex from 'vuex'
import listblock from '../MockData/list-post'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    listblock,
    isLogin: false
  },
  actions:{
    atcchecklogin({commit},{email,password}){
      if(email === 'admin@gmail.com' && password ==='123456'){
        commit('SET_LOGIN',true);
        return true
      }
      else{
        commit('SET_LOGIN',false);
        return false
      }
    },
    atclogout({commit}){
      commit('SET_LOGIN',false);
    }
  },
  mutations: {
    SET_LOGIN(state,isLogin = false){
      state.isLogin = isLogin
    }
  }
})

export default store