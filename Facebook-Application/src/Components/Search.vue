<template>
    <main class="main">
        <div class="container">
            <div class="txt-search mb-2">Từ khóa tìm kiếm: <mark>{{stringWannaSearch}}</mark></div>
            <div class="nb-post mb-4">Khoảng: {{this.listPostSearch.length}} bài viết</div>

            <div 
                v-if="listPostSearch && listPostSearch.length"
                class="row"
                >
                <!-- <div class="grid-sizer"></div> -->
                <div
                    class="col-lg-6 cs-persionalimg"
                    v-for="item in listPostSearch"
                    :key="item.PID"
                >
                    <post-list-item :post="item"/>
                </div>
                
            </div>
        </div>
    </main>
</template>
<script>
import { mapActions } from 'vuex'
import PostListItem from './PostListItem.vue'
export default {
    components: { PostListItem },

    name: 'search',
    data(){
        return{
            stringWannaSearch: this.$route.query.query,
            listPostSearch: []
        }
    },
    watch: {
        $route(to, from) {
            this.stringWannaSearch = to.query.query;
            this.checkQuery();
            this.fechDataSearch();
        }
    },
    created(){
        this.checkQuery();
        this.fechDataSearch();
    },
    methods:{
        ...mapActions(['atcSearch']),
        checkQuery(){
            if(!this.stringWannaSearch){
                this.$router.push('/')
            }
        },
        fechDataSearch(){
            if(this.stringWannaSearch){
                this.atcSearch(this.stringWannaSearch).then(res =>{
                    if(res.ok){
                        this.listPostSearch = res.posts
                    }
                    else{
                        this.$notify({
                            group: 'foo',
                            type:  'error',
                            title: 'Thông báo từ Facebook Fake',
                            text: 'Không có bài viết nào phù hợp',
                        });
                    }
                })
            }
            
        }
    }
}
</script>
<style>
    .mark, mark{
        color: #0d88f0;
        padding: 0;
        background: none;
        font-weight: 500;
    }
</style>