<template>
    <div>
        <main class="main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="post-list">

                            <!-- Danh sách bài viết -->
                            <post-list 
                                v-for="item in getterGetList"
                                :key="item.PID"
                                :post="item"
                            />
                            <div class="text-center mt-3 mb-4">
                                <button class="view-more">Xem thêm <i class="fa fa-angle-down"></i></button>
                            </div>

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

import { mapGetters } from 'vuex'

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
    computed:{
        ...mapGetters(['getterGetList'])
    }
}
</script>

<style>

</style>