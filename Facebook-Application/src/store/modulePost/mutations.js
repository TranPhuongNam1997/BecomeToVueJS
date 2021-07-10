export default{
    SET_LIST_POST(state,data){
        //thay đổi dữ liệu gốc
        state.listPost = data;
    },

    // Để thực hiện chức năng loadmore thì đẩy thêm đẩy thêm dữ liêu vào
    //TH1  nếu currenpage = 1 thì thay thế array gốc
    // TH2 nếu currenpage = 2,3,4 thì đẩy thêm giữ liệu vào ( nối  array lại với nhau)
    PUSH_LIST_POST(state,data){
        state.listPost = [...state.listPost, ...data]
    },
    SET_POST_DETAIL(state,data){
        state.postDetail = data
    }
}