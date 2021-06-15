<template>
    <div class="col-xl-5 mb-5">
        <div class="head-product">Danh sách sản phẩm</div>
        <div class="box-pro">
            <itemproduct 
                v-for="item in danhsachcacsanpham" 
                :key="item.id"
                :sanpham="item"
             />            

        </div>

    </div>
</template>
<script>

import {mapState} from 'vuex'

import Itemproduct from './Itemproduct.vue'
export default {
  components: { Itemproduct },
    name: 'listproduct',
    data() {
        return{

        }
    },
    computed:{
        ...mapState({
            danhsachcacsanpham: state => state.Products.danhsachsanpham
        })
    },
    methods:{
        
    }
}
</script>
