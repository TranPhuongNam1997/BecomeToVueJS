<template>
    <div>
        <slider/>
        <router-view></router-view>

    </div>
</template>

<script>
import Slider from '../Component/Slider.vue'
export default {
  components: { Slider },
    name: 'homepage'
}
</script>

<style>

</style>