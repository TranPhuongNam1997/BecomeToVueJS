<template>
    <main class="main">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="post-list" v-if="getPostDetail && getPostDetail.post ">
                        <div class="post-item">
                            
                            <post-list-item v-bind:post="getPostDetail.post"/>

                            <sort-comment/>

                            <your-comment/>

                            <post-comment/>

                        </div>

                    </div>
                </div>
                <div class="col-lg-5">
                    
                    <side-bar/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'
import PostComment from '../Components/PostComment.vue'
import YourComment from '../Components/PostComment.vue'
import PostListItem from '../Components/PostListItem.vue'
import SortComment from '../Components/SortComment.vue'
import SideBar from '../Components/SideBar.vue';


export default {
  components: { SortComment, PostComment,YourComment, PostListItem,SideBar },
    name:'post-detail-page',
    data(){
        return{
            postId: this.$route.params.id,
        }
    },
    watch: {
        $route(to, from) {
            this.postId = to.params.id
            this.fetchDataPostDetail();
            
        }
    },
    computed:{
        ...mapGetters(['getPostDetail'])
    },
    created(){
        this.fetchDataPostDetail();
        
    },
    methods:{
        ...mapActions(['getPostDetailByPostId']),
        fetchDataPostDetail(){
            //promise
            this.getPostDetailByPostId(this.postId).then(res =>{
                // console.log("res = ",res)
                if(!res.ok) this.$router.push('/');
            })
        }
    }
}
</script>

<style>
    .post-list .post-item .post-item{
        background: transparent;
        border-radius: 0;
        margin-bottom: 0;
        box-shadow: none;
    }
    .txt-cmt-name:hover{
        text-decoration: underline;
        
    }
</style>