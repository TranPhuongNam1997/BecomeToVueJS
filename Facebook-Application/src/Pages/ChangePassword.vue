<template>
    <div class="container-login">
        <div class="flex-login">
            <div class="text-center">
                <img class="logo-login" src="../../dist/img/logo.svg" alt="img">
            </div>
            <div class="bg-white">
                <h1 class="heading-title">Đổi mật khẩu</h1>
                <form action="">
                    <div class="form-login">
                        <div class="field-ip">
                            <input type="text" placeholder="Email hoặc số điện thoại">
                        </div>
                        <div class="field-ip">
                            <input type="password" placeholder="Mật khẩu mới">
                        </div>
                        <div class="field-ip">
                            <input type="password" placeholder="Xác nhận mật khẩu mới">
                        </div>
                        <button class="btn-login">Xác nhận</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'change-password-page',
    data(){
        return{
            
        }
    }
}
</script>

<style>
    
</style>