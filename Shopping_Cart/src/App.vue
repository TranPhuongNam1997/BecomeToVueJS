<template>
     <div id="app">
        <div class="container-x mt-4">

            <title />
            <div class="row">
                <listproduct />
                
                <tablecart />
            </div>
        </div>
     </div>
</template>

<script>
import Listproduct from './Component/Listproduct.vue'
import Tablecart from './Component/Tablecart.vue'
import Title from './Component/title.vue'
export default {
  components: { Title, Listproduct, Tablecart },
  name: 'app',
  
  data() {
    return {
        
    }
  }
}
</script>

<style>

</style>
