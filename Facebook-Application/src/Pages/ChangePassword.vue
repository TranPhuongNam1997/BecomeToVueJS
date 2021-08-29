<template>
    <div class="container-login">
        <div class="flex-login flex-column justify-content-center h-100vh">
            <div class="text-center">
                <img class="logo-login" src="../../dist/img/logo.svg" alt="img">
            </div>
            <div class="bg-white mt-2" >
                <h1 class="heading-title">Đổi mật khẩu</h1>
                <form action="" v-if="this.currentUser" @submit.prevent="handldeChangePassword">
                    <div class="form-login">
                        <div class="field-ip">
                            <input v-model="passwordOld" type="text" placeholder="Mật khẩu cũ">
                        </div>
                        <div class="field-ip">
                            <input v-model="passwordNew" type="password" placeholder="Mật khẩu mới">
                        </div>
                        <div class="field-ip">
                            <input v-model="passwordRenew" type="password" placeholder="Xác nhận mật khẩu mới">
                        </div>
                        <button class="btn-login" type="submit">Xác nhận</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name:'change-password-page',
    data(){
        return{
            useId: this.$route.params.id,
            passwordOld: '',
            passwordNew: '',
            passwordRenew: ''
        }
    },
    computed:{
        ...mapGetters(['currentUser']),
    },
    watch:{
        $route(to, from) {
            this.useId = to.params.useId
            this.checkUser()
        }
    },
    created(){
        this.checkUser()
    },
    methods:{
        checkUser(){
            if(this.useId && this.currentUser){
                if(this.useId != this.currentUser.USERID){
                    this.$router.push('/')
                }
            }
        },
        ...mapActions(['atcChangePassWord']),
        handldeChangePassword(){

            let {passwordOld, passwordNew, passwordRenew} = this

            if(passwordOld && passwordNew && passwordRenew){
                if(passwordOld == passwordNew ){
                    this.$notify({
                        group: 'foo',
                        type:  'error',
                        title: 'Thông báo từ Facebook Fake',
                        text: 'Mật khẩu mới không được trùng với mật khẩu mới',
                    });
                }
                if(passwordNew != passwordRenew){
                    this.$notify({
                        group: 'foo',
                        type:  'error',
                        title: 'Thông báo từ Facebook Fake',
                        text: 'Mật khẩu mới không khớp',
                    });
                }
                else{
                    let data= {
                        oldPassword : this.passwordOld,
                        newPassword: this.passwordNew,
                        reNewPassword: this.passwordRenew
                    }
                    this.atcChangePassWord(data).then(res =>{
                        if(res.ok){
                            this.$notify({
                                group: 'foo',
                                type:  'success',
                                title: 'Thông báo từ Facebook Fake',
                                text: 'Cập nhật mật khẩu thành công',
                            });
                            this.$router.push('/')
                        }
                        else{
                            this.$notify({
                                group: 'foo',
                                type:  'error',
                                title: 'Thông báo từ Facebook Fake',
                                text: 'Mật khẩu cũ không đúng',
                            });
                        }
                    })
                }
                
            }
            else{
                this.$notify({
                    group: 'foo',
                    type:  'error',
                    title: 'Thông báo từ Facebook Fake',
                    text: 'Vui lòng nhập đầy đủ thông tin',
                });
            }


            
        }
    }
}
</script>

<style>
    .h-100vh{
        height: 100vh;
    }
</style>