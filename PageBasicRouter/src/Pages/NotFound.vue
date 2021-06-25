<template>
    <div class="container mt-5">
        <img class="w-50 d-block" style="margin: auto" src="https://png.pngtree.com/png-vector/20201224/ourlarge/pngtree-error-404-page-not-found-png-image_2598541.jpg" alt="img">
        <div class="text-center">
            <router-link tag="button" class="btn btn-primary mt-5" to="/">Go to Home</router-link>
        </div>
    </div>
    
</template>

<script>
import Navigation from '../Component/Navigation.vue'
export default {
  components: { Navigation },
    name: 'not-found'
}
</script>

<style>
    
</style>