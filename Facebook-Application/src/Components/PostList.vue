<template>
    <div>
        <div class="post-item">
            <router-link :to="{name: 'personal',params:{id: this.post.USERID}}" class="post-link"><i class="fa fa-link"></i></router-link>
            <post-list-head :post="post"/>
            <post-list-body :post="post"/>
            <post-list-foot :post="post"/>            
        </div>
    </div>
    
</template>

<script>
import PostListBody from './PostListBody.vue'
import PostListFoot from './PostListFoot.vue'
import PostListHead from './PostListHead.vue'
export default {
    components: { PostListHead, PostListBody, PostListFoot },
    name: 'post-list',
    data(){
        return{

        }
    },
    props:{
        post:{
            type: Object,
            default: {}
        }
    }
}
</script>

<style>

</style>