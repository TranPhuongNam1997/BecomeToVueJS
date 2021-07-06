<template>
    <div>
        <main class="main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="post-list">

                            <!-- Danh sách bài viết -->
                            <post-list/>
                            
                            

                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="box-post-right">
                            <div class="box-post-title">Bài viết gần đây của bạn.</div>
                            <div class="mt-2">Vui lòng bấm <router-link to="/login" class="link-post-login">Đăng nhập</router-link> để xem nội dung này</div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
    
</template>

<script>

import HeaderPage from '../Components/HeaderPage.vue'
import PostList from '../Components/PostList.vue'

import { mapActions } from 'vuex'

export default {
    name:'home-page',
    components:{
        HeaderPage,
        PostList
    },
    data(){
        return{
            
        }
    },
    methods:{
        ...mapActions(['getListPostHasPaging'])
    },
    computed:{
        
    },
    watch: {
        $route(to, from) {
            var tagIndex = to.query.tagindex
            if(tagIndex){
                // gọi api category
                this.getListPostHasPaging({tagIndex});
            }
            else{
                //gọi lại api thường
                this.getListPostHasPaging({ });
            }
        }
    }
}
</script>

<style scoped>
    .txt-nodata{
        color: #737171;
        font-size: 20px;
    }
</style>