<template>
    <div>
        <div class="post-status">
            {{post.post_content}}
        </div>
        <div class="post-img">
            <router-link :to="setLinkImagePost">
                <img :src="post.url_image" :alt="post.url_image" class="w-100" @error="imageUrlAlt">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'post-list-body',
    data(){
        return{

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
        }
    }
}
</script>

<style>

</style>