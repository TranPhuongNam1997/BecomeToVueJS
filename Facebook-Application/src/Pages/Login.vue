<template>
    <div class="container-login">
        <div class="flex-login">
            <div class="text-center">
                <img class="logo-login" src="../../dist/img/logo.svg" alt="img">
            </div>
            <div class="bg-white">
                <form action="">
                    <div class="form-login">
                        <div class="field-ip">
                            <input v-model="email" type="text" placeholder="Email hoặc số điện thoại">
                        </div>
                        <div class="field-ip">
                            <input v-model="password" id="password-login" type="password" placeholder="Mật khẩu">
                            <div class="showhide-pass">
                                <div class="show-pass">
                                    <img class="" src="../../dist/img/iconshowpass.png" alt="img">
                                </div>
                                <div class="hide-pass">
                                    <img class="" src="../../dist/img/iconhidepass.png" alt="img">
                                </div>
                            </div>
                        </div>

                        <button class="btn-login ripple" @click="handleLogin">Đăng nhập</button>
                    </div>
                </form>
                <div class="line-login"></div>
                <div class="btn-register">
                    <a href="javascript:0;" class="" data-toggle="modal" data-target="#register">Tạo tài khoản
                        mới</a>
                </div>
            </div>
        </div>
        <register/>
    </div>
</template>

<script>
import $ from "jquery";
import Register from '../Components/Register.vue'

export default {
  components: { Register },
    name:'login-page',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        handleLogin(){
            
        }
    },
    mounted(){
        $('.showhide-pass div').click(function () {
            var x = document.getElementById("password-login");
            $('.showhide-pass div').toggleClass('active');
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        });
    }
}
</script>

<style>

</style>