import axiosInstance from "../../Plugin/axios"

export default{
    async getUserById({commit},userid){
        commit('SET_LOADING',true);
        try {
            var result = await axiosInstance.get('/member/member.php?userid=' + userid);
            commit('SET_LOADING',false);

            //nếu thành công
            if(result.data.status === 200){
                console.log('result.data user = ', result.data.user)
                // console.log()
                commit('SET_USER_BYID',result.data.user)
                return{
                    ok: true,
                    data: result.data.user,
                    error: null

                }
            }

        } catch (error) {

            commit('SET_LOADING',false);
            //nếu thất bại
            
            return{
                ok: false,
                error: error.message
            }

            
        }
    }
}