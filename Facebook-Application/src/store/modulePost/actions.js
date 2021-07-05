import axiosInstance from "../../Plugin/axios"
export default{
    async getListPostHasPaging({commit},{pagesize = 6 ,currPage = 1}){
        console.log('getListPostHasPaging run')
        try {
            var thamso = {
                params :{
                    pagesize,
                    currPage
                }
            }
            var result = await axiosInstance.get('/post/getListPagination.php?pagesize',thamso);
            if(result.data && result.data.status == 200){
                commit('SET_LIST_POST',result.data.posts)
            }
            else{
                console.log('error', result.data.error)
            }
        } catch (error) {
            console.log('error = ',error)
        }
    }
}