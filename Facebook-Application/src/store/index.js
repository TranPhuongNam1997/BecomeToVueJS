import Vue from 'vue'
import Vuex from 'vuex'
import post from './modulePost'
import user from './moduleUser'

Vue.use(Vuex)

const store = new Vuex.Store({
    
    strict: process.env.NODE_ENV !== 'production',
    state:{
        isloading: false
    },
    actions:{
        setloading({commit},loading){
            commit('SET_LOADING',loading);
        }
    },
    mutations:{
        SET_LOADING : (state,loading) =>{
            state.isloading = loading;
        }
    },
    modules:{
        post,
        user,
    }
    
})

export default store