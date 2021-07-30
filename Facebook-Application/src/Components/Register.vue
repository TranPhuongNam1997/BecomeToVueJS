<template>
    <div class="modal modal-register fade" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="head-register">
                    <button class="btn-close-register" data-dismiss="modal" aria-label="Close"><img src="../../dist/img/close.png" alt="img"></button>
                    <div>Đăng ký</div>
                    <div class="txt-fast">Nhanh chóng và dễ dàng.</div>
                </div>
                <div class="body-register">
                    <form action="#" @submit.prevent="handleRegister">
                        <div class="field-register">
                            <input v-model="email" type="text" placeholder="Số di động hoặc email">
                        </div>
                        <div class="field-register">
                            <input v-model="fullname" type="text" placeholder="Họ tên" autofocus>
                        </div>
                        
                        <div class="field-register">
                            <input v-model="password" type="text" placeholder="Mật khẩu mới">
                        </div>
                        <div class="field-register">
                            <input v-model="repassword" type="text" placeholder="Nhập lại mật khẩu">
                        </div>
                        <div class="rules">
                            Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#">Điều khoản, Chính sách dữ liệu</a>  và <a
                                href="#">Chính sách cookie</a>  của
                            chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                        </div>
                        <div class="text-center">
                            <button class="btn-regis" type="submit">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import $ from "jquery";

import {mapActions} from 'vuex'
import Vue from 'vue'
import Notifications from 'vue-notification'
Vue.use(Notifications)
export default {
    
    name:'register-popup',
    data(){
        return{
            email:'',
            fullname:'',
            password:'',
            repassword:'',

        }
    },
    methods:
    {
        ...mapActions(['register']),
        handleRegister(){
            let data = {
                email: this.email,
                fullname: this.fullname,
                password: this.password,
                repassword: this.repassword,
            }
            this.register(data).then(res =>{
                console.log('res register = ',res)
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
                        text: 'Đăng ký thành công',
                    });
                    $("#register").modal('hide');
                    this.$router.push('/')
                }
            })
        }
    }
    
}
</script>

<style>
    
</style>