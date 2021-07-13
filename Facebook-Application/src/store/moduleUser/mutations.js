import  Vue from 'vue';

export default{
    SET_USER_BYID(state,data){
        // console.log('mu SET_USER_BYID data = ',data);
        // console.log('state.users lúc này = ',state.users);
        Vue.set(state.users , data.USERID , data);
        // console.log('state.users lúc sau = ',state.users);
    },
    SET_LOGIN_INFO(state, {user = null, token = ''}){
        localStorage.setItem('ACCESS_TOKEN',token)
        state.currentUser = user;
        state.ACCESS_TOKEN = token
    },
    LOG_OUT(state){
        state.currentUser = null;
        state.ACCESS_TOKEN = '';
        localStorage.removeItem('ACCESS_TOKEN')
    }
}