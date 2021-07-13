import axiosInstance from "../../Plugin/axios"

import { parseJwt } from '../../Helper'

export default{
    async getUserById({commit},userid){
        console.log('action getUserById run')
        try {
            var result = await axiosInstance.get('/member/member.php?userid=' + userid);
            //nếu thành công
            if(result.data.status === 200){
                console.log('result user = ', result)
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
    
    async login({commit},{email = '',password = ''}){
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

                // dispatch('getListPostsByUserId', result.data.user.USERID);

                return{
                    ok: true,
                    data: result.data,
                    error: null
                }
            }
            return {
                ok: false,
                error: error.message
            }

        } catch (error) {
            commit('SET_LOADING',false);
            return{
                ok: false,
                error: error.message
            }
        }
    },

    async checkLogin({commit,dispatch}){
        try{
            let tokenLocal = localStorage.getItem('ACCESS_TOKEN');

            let tokenAfterConvert = parseJwt(tokenLocal);
            
            console.log('tokenAfterConvert' ,tokenAfterConvert)

            if(tokenAfterConvert){
                // nó cũng là 1 cái promise nên sẽ có async await
                let resuiltUser = await dispatch('getUserById',tokenAfterConvert.id)
                console.log('resuiltUser = ' ,resuiltUser)

                if(resuiltUser.ok){
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
            }



        } catch (error) {
            return{
                ok: false,
                error: error.message
            }
        }

    },
    
    async logOut({commit}){
        commit('LOG_OUT')
    }

}