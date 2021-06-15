<template>
    <div class="item-pro row">
        <div class="col-md-3">
            <img :src="sanpham.tenanh" class="w-100" alt="anh">
        </div>
        <div class="col-md-6">
            <div class="name-product">{{sanpham.tensanpham}}</div>
            <div class="descript">{{sanpham.motasanpham}}</div>
        </div>
        <div class="col-md-3">
            <div class="d-flex h-100 flex-column justify-content-between">
                <template v-if="sanpham.cothemua">
                    <input type="number" value="{sanpham.soluong}">
                    <button class="btn btn-buy">{{xetdonvitien}}</button>
                </template>   
                <template v-else>
                    <div></div>
                    <button disabled class="btn btn-buy">{{xetdonvitien}}</button>
                </template>   
            </div>
        </div>
    </div>
</template>
<script>

import {donvitien} from '../assets/Helper'

export default {
    name: 'itemlistproduct',
    data() {
        return{

        }
    },
    props:{
        sanpham:{
            type: Object,
            default: {}
        }
    },
    computed:{
        xetdonvitien(){
            return donvitien(this.sanpham.gia,'VND','phai');
        }
    }
}
</script>
