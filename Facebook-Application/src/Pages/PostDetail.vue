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
                    <div class="box-post-right">
                        <div class="box-post-title">Bài viết gần đây.</div>
                    </div>
                    <div class="post-item">
                        <div class="post-item-flex">
                            <a href="#" class="box-img"><img src="../../dist/img/avt-post.jpg" alt="img"></a>
                            <div>
                                <a href="#" class="name-post">Trần Nam</a>
                                <div class="post-time">1 giờ trước <i class="hu5pjgll m6k467ps"></i></div>
                            </div>
                        </div>
                        <div class="post-status">
                            Tà xùa ngày trở lại
                        </div>
                        <div class="post-img">
                            <a href="#">
                                <img src="../../dist/img/post-img.jpg" alt="img" class="w-100">
                            </a>
                        </div>
                        <div class="count-cmt">
                            <a href="#" class="has-interactive">
                                <img alt="Yêu thích" class="" height="18"
                                     src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
                                     width="18">
                                <span>123 Yêu thích</span>
                            </a>
                            <a href="#">
                                <i></i>123 Bình luận
                            </a>
                        </div>

                    </div>
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

export default {
  components: { SortComment, PostComment,YourComment, PostListItem },
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