import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import ModuleCart from './Cart'
import ModuleProducts from './Products'

Vue.use(Vuex)

// const localstorage = store =>{
//     store.subcribe((mutations,state) =>{
//         // mỗi khi dữ liệu thay đổi thì nó sẽ lưu vào đây
//         console.log('subcribe',state);
//     })
// }

const localStorage = store => {
    store.subscribe((mutation, state) => {
        // mỗi khi dữ liệu thay đổi thì nó sẽ lưu vào đây

        window.localStorage.setItem('giohang', JSON.stringify(state.Cart));
        console.log('subcribe',state.Cart);
    })
}

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    state,
    getters,
    actions,
    mutations,
    modules:{
        Cart: ModuleCart,
        Products: ModuleProducts
    },
    plugins: [localStorage]
})

store.commit('Products/increment')
// console.log(store.state.soluong);
export default store