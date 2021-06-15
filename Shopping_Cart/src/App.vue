<template>
     <div id="app">
        <div class="container-x mt-4">
            <titlecart/>
            
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
import Titlecart from './Component/Titlecart.vue'
export default {
  components: { Titlecart, Listproduct, Tablecart },
  name: 'app',
  
  data() {
    return {
        
    }
  }
}
</script>

<style>

</style>
