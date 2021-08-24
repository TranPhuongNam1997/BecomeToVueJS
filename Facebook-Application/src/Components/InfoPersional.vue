<template>
    <div class="box-info">
        <div class="container" v-if="this.Infouser">
            <img class="info-avt"
                
                :src="this.Infouser.profilepicture"
                alt="img" 
                @error="imageUrlAlt"
            >
            <div class="info-name">{{this.Infouser.fullname}} <i></i></div>
            <div class="info-sub">
                <span>
                    {{Infouser.description}}
                </span>
            </div>
            <div class="info-utility">
                <div class="info-main">
                    <span><i class="fa fa-file-alt"></i>Bài viết: {{this.countPost}}</span>
                    <span><i class="fa fa-wifi"></i>Theo dõi: 56464</span>
                    <span><i class="fa fa-spa"></i>Đang theo dõi: 1132</span>
                </div>
                <div class="info-utility-block">
                    <template v-if="!this.compareIdPersonal">
                        <button class="ripple" type="button">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/oABzID6cE5f.png" alt="" height="16" width="16">
                            Theo dõi
                        </button>
                    </template>
                    <template v-else>
                        <router-link :to="{name: 'change-password',params:{id: currentUser.USERID}}" class="ripple" >
                            <i class="fa fa-key"></i>
                            Đổi mật khẩu
                        </router-link>
                        <router-link :to="{name: 'edit-prifile',params:{id: currentUser.USERID}}" class="ripple">
                            <img class=""
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png" alt=""
                                    height="16" width="16">
                            Chỉnh sửa trang cá nhân
                        </router-link>
                    </template>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'info-persional',
    data(){
        return{
        }
    },
    
    
    props:{
        Infouser:{
            type: Object,
            default: [],
        },
        countPost:{
            type: Number,
            default: 0,
        }

    },
    computed:{
        ...mapGetters(['currentUser']),
        compareIdPersonal(){
            if(this.currentUser && this.Infouser.USERID ){
                if(this.Infouser.USERID == this.currentUser.USERID) return true
                return false
            }
        }
    },
    methods:{
        imageUrlAlt(event) {
            event.target.src = "../../dist/img/defaultavt.png"
        },

    }
}
</script>

<style>

</style>