<template>
    <div class="container">
        <img src="https://cdn.24h.com.vn/images/404img_092018.png" alt="img">
        <button type="button" class="btn btn-primary" @click="backhome">Quay lại trang chủ</button>
    </div>
</template>

<script>
export default {
    name: 'not-found',
    methods:{
        backhome(){
            this.$router.push('/')
        }
    }
}   
</script>

<style>

</style>