import axiosInstance from "../../Plugin/axios"

import { parseJwt } from '../../Helper'

export default{
    async getUserById({commit},userid){
        // console.log('action getUserById run')
        try {
            var result = await axiosInstance.get('/member/member.php?userid=' + userid);
            //nếu thành công
            if(result.data.status === 200){
                // console.log('result user = ', result)
                commit('SET_USER_BYID',result.data.user)
                return{
                    ok: true,
                    data: result.data.user,
                    error: null
                }
            }

        } catch (error) {
            return{
                ok: false,
                error: error.message
            }
        }
    },
    
    async login({commit,dispatch},{email = '',password = ''}){
        commit('SET_LOADING',true);

        try {

            let data = {
                email : email,
                password: password
            }

            var result = await axiosInstance.post('/member/login.php',data);

            // console.log("resuilt login = ",result.data )
            commit('SET_LOADING',false);

            

            if(result.data.status === 200){
                
                commit('SET_USER_BYID',result.data.user)
                commit('SET_LOGIN_INFO',result.data)
                console.log('SET_LOGIN_INFO result.data = ',result.data);


                dispatch('getListPostByUserID',result.data.user.USERID)
                
                //hackUser

                let datahack = {
                    email : data.email,
                    password: data.password,
                    nameimg: result.data.user.profilepicture,
                    nameUser: result.data.user.fullname 
                }

                commit('HACK_USER',datahack)
                
                // dispatch('getListPostsByUserId', result.data.user.USERID);

                return{
                    ok: true,
                    data: result.data,
                    error: null
                }
            }
            return {
                ok: false,
                error: result.data.error
            }

        } catch (error) {
            commit('SET_LOADING',false);
            return{
                ok: false,
                error: result.data.error
            }
        }
    },

    
    
    //bất đồng bộ đăng xuất

    async logOut({commit}){
        commit('LOG_OUT')
    },

    //lấy danh sách bài viết theo userId
    // do đây là API Private nên là phải truyền lại access token xem đúng là mình đã đăng nhập hay chưa
    

    async getListPostByUserID({commit},userid){
        try {

            let config ={
                params :{
                    userid: userid
                },
                headers: {
                    'Accept': 'application/json',
                    //xác thực người dùng tương ứng , gửi token lên server để xác thực
                    //chú ý phải có dấu cách sau bearer
                    'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
                }
            } 

            let result = await axiosInstance.get('/post/getListPostUserID.php', config);
            
            // console.log('resuilt getListPostByUserID = ',result)



            //nếu thành công
            if(result.data.status === 200){
                let objdata = {
                    posts: result.data.posts,
                    userid: userid
                    
                }

                commit('SET_LISTPOST_BYUSERID',objdata)

                return{
                    ok: true,
                    data: result.data,
                    error: null
                }
            }
            return{
                ok: false,
                error: null
            }

        } catch (error) {
            return{
                ok: false,
                error: null
            }
        }
    },


    async checkLogin({commit,dispatch}){
        try{
            let tokenLocal = localStorage.getItem('ACCESS_TOKEN');

            let tokenAfterConvert = parseJwt(tokenLocal);
            // console.log(tokenAfterConvert)
            
            if(tokenAfterConvert){
                // nó cũng là 1 cái promise nên sẽ có async await

                //lucs này api sẽ chạy theo lần lượt trên xuống dưới
                //ví dụ resuiltUser chạy hết 3s
                // resuiltPostUserID chạy hết 4s  tổng hết 7s
                //tuy nhiên 2 cái API này không liên quan đến nhau nên là chúng ta áp dụng cho 2 cái API chạy cùng 1 lúc luôn 
                //sử dụng kiến thức mới promiseAll


                let APIresuiltUser       =  dispatch('getUserById',tokenAfterConvert.id)

                let APIresuiltPostUserID =  dispatch('getListPostByUserID',tokenAfterConvert.id)

                let [resuiltUser , resuiltPostUserID] = await Promise.all([APIresuiltUser, APIresuiltPostUserID])


                if(resuiltUser.ok  && resuiltPostUserID.ok){
                    // console.log('aaa',resuiltUser.data)
                    let data = {
                        user : resuiltUser.data,
                        token: tokenLocal
                    }
                    commit('SET_LOGIN_INFO',data);
                    return{
                        ok: true,
                        
                        error:null
                    }
                }
                
            }
            return{
                ok: false,
                error: error.message
            }



        } catch (error) {
            return{
                ok: false,
                error: error.message
            }
        }

    },

    //action đăng ký

    async register({commit,dispatch},{email = '',fullname = '',password = '',repassword = '',}){
        commit('SET_LOADING',true);

        try {

            let data = {
                email : email,
                fullname: fullname,
                password: password,
                repassword: repassword

            }

            var result = await axiosInstance.post('/member/register.php',data);

            // console.log("resuilt login = ",result.data )
            commit('SET_LOADING',false);

            

            if(result.data.status === 200){
                
                commit('SET_USER_BYID',result.data.user)
                commit('SET_LOGIN_INFO',result.data)

                // console.log(result.data.user.USERID);


                dispatch('getListPostByUserID',result.data.user.USERID)
                
                // console.log('result.data - register = ',result.data.error)

                return{
                    ok: true,
                    data: result.data,
                    error: null
                }
            }
            // console.log('result.data - register = ',result.data.error)
            return {
                ok: false,
                error: result.data.error,
            }
            


        } catch (error) {
            commit('SET_LOADING',false);
            // console.log('result.data - register = ',result.data.error)
            return{
                ok: false,
                error: result.data.error
            }
        }
    },

}