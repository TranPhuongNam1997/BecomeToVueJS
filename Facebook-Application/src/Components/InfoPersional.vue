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
                    <span><i class="fa fa-wifi"></i>Theo dõi: 99999</span>
                    <span><i class="fa fa-spa"></i>Đang theo dõi: 123</span>
                </div>
                <div class="info-utility-block">
                    <button class="ripple" type="button">
                        <img class=""
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/oABzID6cE5f.png" alt=""
                                height="16" width="16">
                        Theo dõi
                    </button>
                    <a href="javascript:0;" class="ripple">
                        <i class="fa fa-key"></i>
                        Đổi mật khẩu
                    </a>
                    <a href="javascript:0;" class="ripple">
                        <img class=""
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png" alt=""
                                height="16" width="16">
                        Chỉnh sửa trang cá nhân
                    </a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
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
    methods:{
        imageUrlAlt(event) {
            event.target.src = "../../dist/img/defaultavt.png"
        }
    }
}
</script>

<style>

</style>