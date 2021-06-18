export default{
    nutmuahang({commit, state}, data){

        const index = state.dsgiohang.findIndex(function(cart){
            //trả về điều kiện
            return cart.sanpham.id === data.sanpham.id; 
        });
        if(index === -1){
            commit('NUT_MUAHANG', data);
        }
        else{
            //nếu bị trùng
            let soluong = data.soluong;
            commit('CHECK_MUAHANG',{index,soluong});
        }
    },

    xoagiohang({commit,state},spbixoa){
        console.log(spbixoa);
        let atcspbixoa = state.dsgiohang.filter(item => {
            return item.sanpham.id !== spbixoa.sanpham.id;
        })
        commit('XOA_GIOHANG',atcspbixoa)
    },

    atccapnhatslgiohang({commit,state},{giohangupdate , soluong}){
        //b1 tìm ra vị trí - index của phần tử mới được thay đổi
        let index = state.dsgiohang.findIndex(function(cart){
            //trả về điều kiện
            console.log(cart);
            return cart.sanpham.id === giohangupdate.sanpham.id;
        });
        console.log('Vị trí được xác định',index)
        if(index !== -1){
            let data ={
                index,
                soluong,
                isreplace: true,
            }
            commit('CHECK_MUAHANG',data)
        }

    }


}