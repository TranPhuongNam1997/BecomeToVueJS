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
import $ from "jquery";
import { PAGE_SIZE, CURREN_PAGE } from '../Constant'
import { mapGetters , mapActions } from 'vuex'
import PostListItem from './PostListItem.vue'

export default {
    components: { PostListItem },
    
    name: 'post-list',
    data(){
        return{
            //tạo ra 2 biến tạm
            pagesize: PAGE_SIZE,
            currpage: CURREN_PAGE,
            tagindex : parseInt(this.$route.query.tagindex),
        }
    },
    watch: {
        $route(to, from) {
            // console.log(to)
            this.tagindex = to.query.tagindex;
            this.currpage = 1
            
        }
    },
    methods:{
        ...mapActions(['getListPostHasPaging']),
        btnViewMore(){
            //khi thực hiện click thì tăng currpage thêm 1 đơn vị
            this.currpage = this.currpage + 1;
            //gọi lại api thêm 1 lần nữa
            let obj = ({
                pagesize : this.pagesize,
                currPage : this.currpage,
                tagIndex : this.tagindex
            })
            console.log(obj);
            this.getListPostHasPaging(obj)
        }
    },
    computed:{
        ...mapGetters(['getterGetList'])
    },
    mounted(){
        $(function(){ //on document ready
            $(document).scroll(function (e) { //bind scroll event

                var intBottomMargin = 300; //Pixels from bottom when script should trigger

                //if less than intBottomMargin px from bottom
                if ($(window).scrollTop() >= $(document).height() - $(window).height() - intBottomMargin) {
                    $('.view-more').click();
                }

            });
        });
    }
    
}
</script>

<style>

</style>