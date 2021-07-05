<template>
    <div class="post-item-flex">
        <router-link :to="setLinkPersonal" class="box-img"><img :src="setImageAvt" :alt="post.fullname"></router-link>
        <div>
            <router-link :to="setLinkPersonal" class="name-post">{{post.fullname}}</router-link>
            <div class="post-time">{{timePost}} <i class="hu5pjgll m6k467ps"></i></div>
        </div>
    </div>
</template>

<script>

import moment from 'moment';
export default {
    name: 'post-list-head',
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
        timePost(){
            moment.locale('vi');
            return moment(this.post.time_added).fromNow();
        },
        setImageAvt(){
            if(this.post.profilepicture) return this.post.profilepicture
            else return '../../dist/img/defaultavt.png'
        },
        setLinkPersonal(){
            return {name: 'personal',params:{id: this.post.USERID}}
        }
    }
}
</script>

<style>

</style>