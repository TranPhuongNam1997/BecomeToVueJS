<template>
    <div class="container-login">
        <div class="flex-login">
            <div class="text-center">
                <router-link to="/">
                    <img class="logo-login" src="../../dist/img/logo.svg" alt="img">

                </router-link>
            </div>
            <div class="bg-white">
                <form action="#" v-on:submit.prevent="handleSubmitLogin">
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

                        <button class="btn-login ripple" type="submit" >Đăng nhập</button>
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

import Vue from 'vue'
import { mapActions } from 'vuex'
import Notifications from 'vue-notification'
Vue.use(Notifications)

import $ from "jquery";
import Register from '../Components/Register.vue'

export default {
  components: { Register },
    name:'login-page',
    data(){
        return{
            email: '',
            password: '',
            listError: [],
        }
    },
    methods:{
        
        ...mapActions(['login']),

        handleSubmitLogin(){
            let data = {
                email : this.email,
                password : this.password
            }
            if(!this.email){
                this.listError.push('Email không được bỏ trống')
            }
            if(!this.password){
                this.listError.push('Mật khẩu không được bỏ trống')
            }
            if(this.listError){
                this.$notify({
                    group: 'foo',
                    type:  'error',
                    title: 'Thông báo từ Facebook Fake',
                    text: this.listError.join(' , '),
                });
            }
            
            // do bên action là function aysicn nên trả về 1 cái promise để chờ xử lý thì dùng cái response
            // chỉ xử lý trong trường hợp lỗi thôi
            this.login(data).then(res =>{
                if(!res.ok){
                    if(typeof res.error === 'string'){
                        var joinError = res.error;
                        this.$notify({
                            group: 'foo',
                            type:  'error',
                            title: 'Thông báo từ Facebook Fake',
                            text: joinError,
                        });
                    }
                    else{
                        var joinError = res.error.join(' , ');
                        this.$notify({
                            group: 'foo',
                            type:  'error',
                            title: 'Thông báo từ Facebook Fake',
                            text: joinError,
                        });
                    }
                }
                else{
                    this.$notify({
                        group: 'foo',
                        type:  'success',
                        title: 'Thông báo từ Facebook Fake',
                        text: 'Đăng nhập thành công',
                    });
                    this.$router.push('/')
                }
            })
            this.listError = []
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