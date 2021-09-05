<template>
    <div>
        <div class="post-status"
            v-if="!fetchTitle"
        >
            {{post.post_content}}
        </div>
        
        <div class="post-status"
            v-else
            v-html="fetchTitle"
        >
        </div>


        <div class="post-img">
            <router-link :to="setLinkImagePost">
                <img :src="post.url_image" :alt="post.url_image" class="w-100" @error="imageUrlAlt">
            </router-link>
        </div>
    </div>
</template>

<script>
import { replaceAll } from '../Helper'

export default {
    name: 'post-list-body',
    data(){
        return{
            stringWannaSearch: this.$route.query.query,
        }
    },
    watch: {
        $route(to, from) {
            this.stringWannaSearch = to.query.query;
        }
    },
    props:{
        post:{
            type: Object,
            default: {}
        }
    },
    methods:{
        imageUrlAlt(event) {
            event.target.src = "../../dist/img/img-errors3.png"
        }
    },
    computed:{
        setLinkImagePost(){
            return {name:'post-detail',params:{id: this.post.PID}}
        },
        fetchTitle(){
            if(this.stringWannaSearch){
                return replaceAll(this.post.post_content,this.stringWannaSearch,`<mark>${this.stringWannaSearch}</mark>`)
            }
            else{
                return this.post.post_content
            }
        }
    }
}
</script>

<style>

</style>