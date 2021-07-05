<template>
    <div class="count-cmt">
        <a href="#">
            <i></i>{{checkCountCmt}} bình luận
        </a>
    </div>
</template>

<script>
export default {
    name: 'post-list-foot',
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
        checkCountCmt(){
            if(this.post.count) return this.post.count
            return 0
        }
    }
}
</script>

<style>

</style>