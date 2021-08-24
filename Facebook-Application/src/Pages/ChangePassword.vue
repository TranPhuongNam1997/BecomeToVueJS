<template>
    <div class="container-login">
        <div class="flex-login flex-column justify-content-center h-100vh">
            <div class="text-center">
                <img class="logo-login" src="../../dist/img/logo.svg" alt="img">
            </div>
            <div class="bg-white mt-2">
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
    .h-100vh{
        height: 100vh;
    }
</style>