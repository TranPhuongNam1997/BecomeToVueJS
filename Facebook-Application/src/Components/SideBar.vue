<template>
    <div>
        <div class="box-post-right">
            <div class="box-post-title">Bài viết gần đây của bạn.</div>

                <div class="mt-2" v-if="!isLogin">
                    Vui lòng bấm
                    <router-link to="/login" class="link-post-login"
                        >Đăng nhập</router-link
                    >
                    để xem nội dung này
            </div>
        </div>
        
        <template v-if="isLogin && getListPostOfCurrentUser && getListPostOfCurrentUser.length" >
            <post-list-item
                v-for="item in getListPostOfCurrentUser"
                :key="item.PID"
                :post="item"
            />
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostListItem from './PostListItem.vue'

export default {
    name: 'side-bar',
    components: { PostListItem },
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters(['isLogin','getListPostOfCurrentUser']),
    },
}
</script>

<style>

</style>