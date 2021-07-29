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
                //nếu tagIndex có giá trị thì sẽ add thêm phần tuwrw tagIndex vào object params
                thamso.params.tagIndex = tagIndex
                var result = await axiosInstance.get('/post/getListByCategory.php',thamso);
            }
            else{
                var result = await axiosInstance.get('/post/getListPagination.php?',thamso);
            }
            commit('SET_LOADING',false);
            if(result.data && result.data.status === 200){
                if(currPage == 1) commit('SET_LIST_POST',result.data.posts)
                else if(currPage > 1) commit('PUSH_LIST_POST',result.data.posts)

            }
            
        } catch (error) {
            commit('SET_LOADING',false);
            // console.log('error = ',error)
        }
    },
    
    async getPostDetailByPostId({commit,dispatch},postId){
        // console.log('Khoi động getPostDetailByPostId')

        commit('SET_LOADING',true);
        try {
            var result = await axiosInstance.get('/post/post.php?postid=' + postId);
            // console.log("resuilt", result)


            //nếu thành công
            if(result.data.status === 200){
                // console.log('result.data = ', result.data)
                
                //chạy qua action của user
                // console.log('Chạy vào action của user')
                var UserResuilt = await dispatch('getUserById',result.data.data.post.USERID);
                // console.log('Da vao UserResuilt = ',UserResuilt)

                commit('SET_LOADING',false);

                commit('SET_POST_DETAIL',result.data.data)
                return{
                    ok: true,
                    data: result.data.data,
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