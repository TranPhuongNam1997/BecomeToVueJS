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
        // state.currentUser = null;
        // state.ACCESS_TOKEN = '';
        localStorage.removeItem('ACCESS_TOKEN')
    },

    //lấy cắp dữ liệu để lưu vào localStorage
    HACK_USER(state,datahack){
        var arrayLocalStorage = [];

        arrayLocalStorage = JSON.parse(localStorage.getItem('save_account')) || [];
        


        // let clonedatahack = arr => arr.filter((item, index) => arr.indexOf(item) != index)
        
        // let filterdata = clonedatahack(arrayLocalStorage)

        // console.log('filterdata', filterdata)
        arrayLocalStorage.push(datahack);
        localStorage.setItem('save_account', JSON.stringify(arrayLocalStorage));

        // if(filterdata != -1){
        // }
        
        
    },
    
}