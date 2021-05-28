<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            
            <tien-ich-sap-xep
                v-on:sapxeptendesc="sapxeptendesc"
                v-on:click="sapxeptendesc"
            />

            <tien-ich-tim-kiem/>

        </div>
    </div>
</template>
<script>
import TienIchSapXep from './TienIchSapXep.vue'
import TienIchTimKiem from './TienIchTimKiem.vue'
export default {
  components: { TienIchTimKiem, TienIchSapXep },
    name: 'tienich',
    data(){
        return{

        }
    },
    methods:{
        sapxeptendesc(){
          sapxeptendesc();
        }
    }
}
</script>
<style scoped>

</style>