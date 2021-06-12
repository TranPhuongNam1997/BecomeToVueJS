<template>
    <div class="col-xl-5 mb-5">
        <div class="head-product">Danh sách sản phẩm</div>
        <div class="box-pro">
            <itemproduct />            
            <itemproduct />            
            <itemproduct />            
            <itemproduct />            
            
        </div>

    </div>
</template>
<script>
import Itemproduct from './Itemproduct.vue'
export default {
  components: { Itemproduct },
    name: 'listproduct',
    data() {
        return{

        }
    },
}
</script>
