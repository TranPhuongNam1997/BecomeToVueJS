<template>
  <div id="app">
      <menu-blog />
      <transition>
        <router-view></router-view>

      </transition>
  </div>
</template>

<script>
import MenuBlog from './Component/MenuBlog.vue'
import HomePage from './Pages/HomePage.vue'
export default {
  components: { MenuBlog, HomePage,  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

  /* cái clas v- này là mặc định có thể thay đổi bằng cách đặt name cho nó */
  .v-enter-active,.v-leave-active{
    transition: all 0.3s ease;
  }
  /* Component bắt đầu vào */

  .v-enter{
    opacity: 0;
    transform: scale(1.1);
  }
  .v-enter-to{
    opacity: 1;
    transform: scale(1);
  }
  /* Component bắt đầu ra */
  
  .v-leave{
    opacity: 0;
    transform: scale(1.1);
  }
  .v-leave-to{
    opacity: 1;
    transform: scale(1);
  }



</style>
