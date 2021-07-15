export default{
    //lấy danh sách bài viết
    getterGetList: state =>{
        return state.listPost;
    },
    // lấy dữ liệu chi tiết bài viết 
    //Kiến thức mới them rootState - nơi tổng hợp gốc của các State trong các module
    //getter là để tính toán lại thông qua dữ liêu có sẵn
    getPostDetail(state,getters,rootState){
        if (state.postDetail){
            var userid = state.postDetail.post.USERID;
            var user = rootState.user.users[userid];


            // console.log("user = ",user)
            var data = {
                post:{
                    ...state.postDetail.post,
                    fullname : user.fullname,
                    profilepicture: user.profilepicture
                    
                },
                categories: state.postDetail.categories
            }
            // console.log("state.posdetail = ",state.postDetail)
            // console.log("data = ", data);

            return data;

        }

        // console.log("state = ",state)
        // console.log("getters = ",getters)
        // console.log("rootState = ",rootState)
        // return state.postDetail + rootState.user
    },

}
