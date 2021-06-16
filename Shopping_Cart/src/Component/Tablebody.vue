<template>
    <tr>
        <td scope="row" class="text-center fw-bold">{{index+1}}</td>
        <td>{{sanpham1.tensanpham}}</td>
        <td>{{xetdonvitien}}</td>
        <td class="text-center">
            <input class="w-100px" type="number" v-model="danhsachtronggionghang.soluong" min="1">
            </td>
        <td>{{totalxetdonvitien}}</td>
        <td class="text-center">
            <button class="btn btn-primary">Cập nhật</button>
            <button class="btn btn-danger">Xóa</button>
        </td>
    </tr>
</template>
<script>
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
