<template>
    <div class="container-login">
        <div class="flex-login">
            <div class="flex-login-left">
                <template v-if="checkHasAccount">
                    <div class="">
                        <router-link to="/">
                            <img class="logo-login" src="../../dist/img/logo.svg" alt="img">
                        </router-link>
                    </div>
                    <div class="txt-loginnear">Đăng nhập gần đây</div>
                    <div class="txt-clickimg">Nhấp vào ảnh của bạn hoặc thêm tài khoản.</div>
                    
                    <!-- hackuser -->
                    <a v-for="(item,index) in arrayLocalAccount" :key="index"  @click.prevent="handleSigninCache(item)" class="box-img-login">
                        <div class="box-img-block">
                            <img :src="item.nameimg" @error="imageUrlAlt" alt="img">
                        </div>
                        <span>{{item.nameUser}}</span>
                    </a>
                    
                    
                    <a href="javascript:0;" @click="addacc" class="box-img-login add-acc">
                        <div class="box-img-block">
                            <i></i>
                        </div>
                        <span>Thêm tài khoản</span>
                    </a>
                </template>
                <template v-else>
                    <router-link class="logo-ifnosugges" to="/">
                        <img class="logo-login" src="../../dist/img/logo.svg" alt="img">
                    </router-link>
                    <div class="txt-ifnosugges">Facebook giúp bạn kết nối và chia sẻ <br> với mọi người trong cuộc sống của bạn.</div>
                </template>
            </div>
            
            <div class="bg-white">
                <form action="#" v-on:submit.prevent="handleSubmitLogin">
                    <div class="form-login">
                        <div class="field-ip">
                            <input v-model="email" autofocus ref="enteremail" type="text" placeholder="Email hoặc số điện thoại">
                        </div>
                        <div class="field-ip">
                            <input v-model="password" id="password-login" type="password" placeholder="Mật khẩu" autocomplete="on">
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
        <notifications group="foo" position="right bottom" />
    </div>
</template>

<script>

import { parseJwt } from '../Helper'
import Vue from 'vue'
import { mapActions,mapGetters } from 'vuex'
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
        imageUrlAlt(event) {
            event.target.src = "../../dist/img/defaultavt.png"
        },
        addacc(){
            this.$refs.enteremail.focus()
        },
        
        ...mapActions(['login']),

        handleSubmitLogin(){
            let data = {
                email : this.email,
                password : this.password
            }
            // if(!this.email){
            //     this.listError.push('Email không được bỏ trống')
            // }
            // if(!this.password){
            //     this.listError.push('Mật khẩu không được bỏ trống')
            // }
            // if(this.listError){
            //     this.$notify({
            //         group: 'foo',
            //         type:  'error',
            //         title: 'Thông báo từ Facebook Fake',
            //         text: this.listError.join(' , '),
            //     });
            // }
            
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
        },
        handleSigninCache(item){
            // console.log('item',item)
            // let getDataTokenLocalStorage = parseJwt(localStorage.ACCESS_TOKEN)

            // console.log('getDataTokenLocalStorage = ' ,getDataTokenLocalStorage);
            // var retrievedObject = ;

            // var retrievedObjectAfterConvert = JSON.parse(localStorage.getItem('save_account'))

            // console.log('filterData',filterData)
            // console.log('retrievedObjectAfterConvert = ',retrievedObjectAfterConvert)


            let data = {
                email : item.email,
                password : item.password
            }   

            this.login(data).then(res =>{
                this.$router.push('/')
            })
        },
        
    },
    computed:{
        arrayLocalAccount(){
            console.log('arrayLocalAccount',JSON.parse(localStorage.getItem('save_account')))

            return JSON.parse(localStorage.getItem('save_account'))
        },
        ...mapGetters(['currentUser']),
        linkimglogin(){
            var dataImg = JSON.parse(localStorage.getItem('save_account'))
            if(dataImg){
                return dataImg.nameimg 
            }
            
        },
        namesuggest(){
            var dataName = JSON.parse(localStorage.getItem('save_account'))
            if(dataName) return dataName.nameUser
            
        },
        checkHasAccount(){
            var ck = JSON.parse(localStorage.getItem('save_account'));
            if(ck){
                return true
            }
            else{
                return false

            }
            // return false
        },
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