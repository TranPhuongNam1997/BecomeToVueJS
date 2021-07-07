import axiosInstance from "../../Plugin/axios"
import { PAGE_SIZE, CURREN_PAGE } from '../../Constant'
export default{
    //gộp 2 api thành 1
    async getListPostHasPaging({commit},{pagesize = PAGE_SIZE ,currPage = CURREN_PAGE,tagIndex = null}){
        commit('SET_LOADING',true);
        try {
            var thamso = {
                params :{
                    pagesize,
                    currPage
                }
            }
            // nếu null || NaN || undefind || 0 đều trả về là false
            if(tagIndex){
                thamso.params.tagIndex = tagIndex
                var result = await axiosInstance.get('/post/getListByCategory.php',thamso);
            }
            else{
                var result = await axiosInstance.get('/post/getListPagination.php?',thamso);
            }
            commit('SET_LOADING',false);
            if(result.data && result.data.status == 200){
                if(currPage == 1) commit('SET_LIST_POST',result.data.posts)
                else if(currPage > 1) commit('PUSH_LIST_POST',result.data.posts)

            }
            
        } catch (error) {
            console.log('error = ',error)
        }
    },

}