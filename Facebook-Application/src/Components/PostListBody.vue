<template>
    <div>
        <div class="post-status">
            {{post.post_content}}
        </div>
        <div class="post-img">
            <router-link :to="setLinkImagePost">
                <img :src="post.url_image" :alt="post.url_image" class="w-100">
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
    computed:{
        setLinkImagePost(){
            return {name:'post-detail',params:{id: this.post.PID}}
        }
    }
}
</script>

<style>

</style>