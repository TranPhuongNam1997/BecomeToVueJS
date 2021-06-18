<template>
    <tr>
        <td scope="row" class="text-center fw-bold">{{index+1}}</td>
        <td>{{sanpham1.tensanpham}}</td>
        <td>{{xetdonvitien}}</td>
        <td class="text-center">
            <input class="w-100px" type="number" 
                :value="danhsachtronggionghang.soluong"
                @blur="thaydoisoluong"
            >
        </td>
        <td>{{totalxetdonvitien}}</td>
        <td class="text-center">
            <button class="btn btn-primary">Cập nhật</button>
            <button class="btn btn-danger" @click="xoaitemgiohang">Xóa</button>
        </td>
    </tr>
</template>
<script>
import {mapActions} from 'vuex'
import { xoaspthanhcong, capnhatthanhcong, capnhatthatbai } from "../Constants/config";

import { donvitien, validatesoluong } from "../Helper";

export default {
    name: 'tablebody',
    data() {
        return{

        }
    },
    props:{
        danhsachtronggionghang:{
            type: Object,
            default: {}
        },
        index:{
            type: Number
        }
    },
    methods:{
        ...mapActions({
            'atcxoagiohang':'xoagiohang',
            'setloading' : 'setloading',
            'atccapnhatslgiohang' : 'atccapnhatslgiohang'
        }),
        xoaitemgiohang(){
            this.atcxoagiohang(this.danhsachtronggionghang);
            this.$notify(xoaspthanhcong);
            
        },
        thaydoisoluong(e){

            this.setloading(true);


            // khi dùng settimeout phải dùng theo kiểu arrow function thì nó mới ràng buộc cho ta cái biến this vào
            // lúc đầu nó là của window

            setTimeout( () => {
                // Đặt logic vào vị trí này
                let soluong = e.target.value;

                let check = validatesoluong(soluong);

                if (check == true) {
                    let data = {
                        giohangupdate : this.danhsachtronggionghang , 
                        soluong: parseInt(soluong)
                    }
                    this.atccapnhatslgiohang(data);

                    console.log('Dữ liệu mà tablebody truyền sang',data);
                    this.$notify(capnhatthanhcong);
                    
                } else {
                    //nếu nhập sai thì chuyển về giá trị cũ của nó
                    e.target.value = this.danhsachtronggionghang.soluong
                    this.$notify(capnhatthatbai);
                }

                this.setloading(false);
            }, 500);
        }
    },
    computed:{
        sanpham1(){
            return this.danhsachtronggionghang.sanpham;
        },
        xetdonvitien() {
            return donvitien(this.sanpham1.gia, "VND", "phai");
        },
        totalxetdonvitien(){
            return donvitien(this.sanpham1.gia * this.danhsachtronggionghang.soluong, "VND", "phai");
        }
        
    }
}
</script>
