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
                            <input type="text" placeholder="Email hoặc số điện thoại">
                        </div>
                        <div class="field-ip">
                            <input id="password-login" type="password" placeholder="Mật khẩu">
                            <div class="showhide-pass">
                                <div class="show-pass">
                                    <img class="" src="../../dist/img/iconshowpass.png" alt="img">
                                </div>
                                <div class="hide-pass">
                                    <img class="" src="../../dist/img/iconhidepass.png" alt="img">
                                </div>
                            </div>
                        </div>

                        <button class="btn-login ripple">Đăng nhập</button>
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
import Register from '../Components/Register.vue'

export default {
  components: { Register },
    name:'login-page',
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>