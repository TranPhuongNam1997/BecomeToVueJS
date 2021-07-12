import  Vue from 'vue';

export default{
    SET_USER_BYID(state,data){
        console.log('mu SET_USER_BYID data = ',data);
        console.log('state.users lúc này = ',state.users);
        Vue.set(state.users , data.USERID , data);
        console.log('state.users lúc sau = ',state.users);
    }
}