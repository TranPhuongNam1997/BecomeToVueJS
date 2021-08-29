import  Vue from 'vue';

export default{
    SET_USER_BYID(state,data){
        // console.log('mutations SET_USER_BYID data = ',data);
        // console.log('state.users lúc này = ',state.users);
        Vue.set(state.users , data.USERID , data);
        // console.log('state.users lúc sau = ',state.users);
    },

    SET_LISTPOST_BYUSERID(state,{posts , userid}){
        // tức là nó gộp lại vào posts của state posts{{userid,posts},{userid,posts}}
        Vue.set(state.posts , userid , posts);

    },

    SET_LOGIN_INFO(state, {user = null, token = ''}){
        //lưu để giữ trạng thái đăng nhập
        localStorage.setItem('ACCESS_TOKEN',token)

        state.currentUser = user;
        state.ACCESS_TOKEN = token
    },
    LOG_OUT(state){
        state.currentUser = null;
        state.ACCESS_TOKEN = '';
        localStorage.removeItem('ACCESS_TOKEN')
        
    },
    // SET_CURRENT_USER(state, user) {
    //     state.currentUser = user;
    // },

    //lấy cắp dữ liệu để lưu vào localStorage
    HACK_USER(state,datahack){
        var arrayLocalStorage = [];

        arrayLocalStorage = JSON.parse(localStorage.getItem('save_account')) || [];

        // let clonedatahack = arr => arr.filter((item, index) => arr.indexOf(item) != index)
        
        // let filterdata = clonedatahack(arrayLocalStorage)

        // console.log('filterdata', filterdata)
        // let atcspbixoa = state.dsgiohang.filter(item => {
        //     return item.sanpham.id !== spbixoa.sanpham.id;
        // })
        const index = arrayLocalStorage.findIndex(function(item){
            //trả về điều kiện
            return item.email === datahack.email;
        });
        // console.log(index);
        if(index === -1){
            arrayLocalStorage.push(datahack);
            localStorage.setItem('save_account', JSON.stringify(arrayLocalStorage));

            
        }
        
    },
    SET_EDIT_PROFILE(state,user){
        state.currentUser = user
    }
    
}