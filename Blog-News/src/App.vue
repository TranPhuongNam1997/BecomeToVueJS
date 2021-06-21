<template>
  <div id="app">
      <menu-blog />
      <slider />
      <router-view></router-view>
    
  </div>
</template>

<script>
import MenuBlog from './Component/MenuBlog.vue'
import Slider from './Component/Slider.vue'
export default {
  components: { MenuBlog, Slider },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
