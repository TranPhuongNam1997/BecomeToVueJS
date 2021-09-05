<template>
    <div class="post-item-flex">
        <router-link :to="setLinkPersonal" class="box-img"><img :src="setImageAvt" @error="imageUrlAlt" :alt="post.fullname"></router-link>
        <div>
            <router-link 
                v-if="this.stringWannaSearch"
                :to="setLinkPersonal" class="name-post" v-html="fetchNameUser"></router-link>

            <router-link 
                v-else
                :to="setLinkPersonal" class="name-post">{{post.fullname}}</router-link>
            <div class="post-time">{{timePost}} <i class="hu5pjgll m6k467ps"></i></div>
        </div>
    </div>
</template>

<script>

import moment from 'moment';
import { replaceAll } from '../Helper'
export default {
    name: 'post-list-head',
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
            event.target.src = "../../dist/img/defaultavt.png"
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
            var useid = this.post.USERID || 1
            return {name: 'personal',params:{id: useid}}
        },
        fetchNameUser(){
            if(this.stringWannaSearch){
                return replaceAll(this.post.fullname,this.stringWannaSearch,`<mark>${this.stringWannaSearch}</mark>`)
            }
            else{
                return this.post.fullname
            }
        }
    }
}
</script>

<style>
    .name-post{
        text-transform: capitalize;
    }
</style>