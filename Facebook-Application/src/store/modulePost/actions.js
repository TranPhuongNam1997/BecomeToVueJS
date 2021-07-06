import axiosInstance from "../../Plugin/axios"
import { PAGE_SIZE, CURREN_PAGE } from '../../Constant'
export default{
    //gộp 2 api thành 1
    async getListPostHasPaging({commit},{pagesize = PAGE_SIZE ,currPage = CURREN_PAGE,tagIndex = null}){
        // console.log('getListPostHasPaging run')
        commit('SET_LOADING',true);
        try {
            var thamso = {
                params :{
                    pagesize,
                    currPage
                }
            }
            if(tagIndex){
                thamso.params.tagIndex = tagIndex
                var result = await axiosInstance.get('/post/getListByCategory.php',thamso);
            }
            else{
                var result = await axiosInstance.get('/post/getListPagination.php?',thamso);
            }
            commit('SET_LOADING',false);
            if(result.data && result.data.status == 200){
                commit('SET_LIST_POST',result.data.posts)
            }
            
        } catch (error) {
            console.log('error = ',error)
        }
    },
    
    // async getListPostByCategory({commit},{pagesize = 6 ,currPage = 1,tagIndex}){
    //     console.log('getListPostHasPaging run')
    //     try {
    //         var thamso = {
    //             params :{
    //                 pagesize,
    //                 currPage,
    //                 tagIndex
    //             }
    //         }
    //         var result = await axiosInstance.get('/post/getListByCategory.php',thamso);
    //         if(result.data && result.data.status == 200){
    //             commit('SET_LIST_POST',result.data.posts)
    //         }
    //         else{
    //             console.log('error', result.data.error)
    //         }
    //     } catch (error) {
    //         console.log('error = ',error)
    //     }
    // },

}