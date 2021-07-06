<template>
    <div>
        <post-list-item v-for="item in getterGetList" :key="item.PID" :post="item"/>
        <div class="text-center mt-3 mb-4" v-if="getterGetList && getterGetList.length">
            <button class="view-more" @click="btnViewMore">Xem thêm <i class="fa fa-angle-down"></i></button>
        </div>
        <template v-else>
            <h3 class="txt-nodata text-center">Không có dữ liệu hiển thị</h3>
        </template>
    </div>
    
</template>

<script>
import { PAGE_SIZE, CURREN_PAGE } from '../Constant'
import { mapGetters } from 'vuex'
import PostListItem from './PostListItem.vue'

export default {
    components: { PostListItem },
    
    name: 'post-list',
    data(){
        return{
            pagesize: PAGE_SIZE,
            currpage: CURREN_PAGE
        }
    },
    methods:{
        btnViewMore(){
            //khi thực hiện click thì tăng currpage thêm 1 đơn vị
            this.currpage = this.currpage + 1;
            //gọi lại api thêm 1 lần nữa
        }
    },
    computed:{
        ...mapGetters(['getterGetList'])
    },
}
</script>

<style>

</style>