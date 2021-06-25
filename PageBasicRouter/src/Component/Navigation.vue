<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-5">
            <router-link class="navbar-brand" to="/">Nam Yoo Soo</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <router-link 
                        class="nav-item"
                        tag="li"
                        v-for="link in listLink"
                        :key="link.to"
                        :to="link.to"
                        exact-active-class="active"
                        active-class=""
                    >
                        <a class="nav-link">{{link.text}}</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navigation',
    data(){
        return{
            listLink:[
                {
                    to: '/',
                    text: 'Home',
                },
                {
                    to: '/about',
                    text: 'About',
                },
                {
                    to: '/contact',
                    text: 'Contact',
                },
                {
                    to: '/login',
                    text: 'Login',
                },
            ]
        }
    }
}
</script>

<style>

</style>