<template>
    <tr>
        <td colspan="4">Có <span class="fw-bold">{{thongtinfooter.tongso}}</span>  sản phẩm trong giỏ hàng</td>
        <td colspan="2">{{xetdonvitien}}</td>
    </tr>
</template>
<script>

import { donvitien, validatesoluong } from "../Helper";
import {mapGetters } from 'vuex'

export default {
    name: 'tablefoot',
    data() {
        return{
            
        }
    },
    computed:{
        ...mapGetters({'thongtinfooter': 'thongtinfooter'}),
        xetdonvitien(){
            return donvitien(this.thongtinfooter.tongtien, "VND", "phai");
        }
    },
    methods:{

    }
}
</script>
