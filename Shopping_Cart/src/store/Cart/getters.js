export default{
    thongtinfooter: state =>{

        let {dsgiohang} = state;
        
        let inittongso = { tongso : 0, tongtien : 0};

        return dsgiohang.reduce(function(a,b){

            let tongso = a.tongso + b.soluong;
            let tongtien = a.tongtien + b.sanpham.gia * b.soluong;

            return {
                tongso,
                tongtien,
            }

        },inittongso);
    }
}