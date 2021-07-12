import axiosInstance from "../../Plugin/axios"

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

            // commit('SET_LOADING',false);
            //nếu thất bại
            
            return{
                ok: false,
                error: error.message
            }

            
        }
    }
}