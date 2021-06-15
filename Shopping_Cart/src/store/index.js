import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import ModuleCart from './Cart'
import ModuleProducts from './Products'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: true,

    state,
    getters,
    actions,
    mutations,
    modules:{
        Cart: ModuleCart,
        Products: ModuleProducts
    }
})

store.commit('Products/increment')
// console.log(store.state.soluong);
export default store