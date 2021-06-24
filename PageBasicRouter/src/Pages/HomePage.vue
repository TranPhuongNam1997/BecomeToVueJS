<template>
    <div>
        <header-page/>
        <blog-list/>
    </div>
    
</template>

<script>
import BlogList from '../Component/BlogList.vue'
import HeaderPage from '../Component/HeaderPage.vue'
export default {
  components: { BlogList, HeaderPage },
    name: 'home-page'
}
</script>

<style>

</style>