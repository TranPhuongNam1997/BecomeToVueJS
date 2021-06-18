export default{
    //Sử dụng trong trường hợp cộng dồn
    // nếu không có giá trị truyền vào thì mặc định giá trị của isreplace = false
    CHECK_MUAHANG: (state ,{index ,soluong,isreplace = false}) => {
        console.log(index,soluong,isreplace);

        if(isreplace == true){
            state.dsgiohang[index].soluong = soluong;
        }
        else{
            state.dsgiohang[index].soluong += soluong;
        }
    },
    NUT_MUAHANG: (state,data) =>{
        //unshift nó giống như push nhưng nó lại đẩy vào đầu mảng
        state.dsgiohang.push(data);
    },
    XOA_GIOHANG: (state,spbixoa) =>{
        state.dsgiohang = spbixoa
    }
}

