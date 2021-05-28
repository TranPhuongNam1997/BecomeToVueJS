<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            
            <tien-ich-sap-xep
                v-on:sapxeptendesc="sapxeptendesc"
                v-on:click="sapxeptendesc"
            />

            <tien-ich-tim-kiem
                v-bind:textdulieusearch="textdulieusearch"
                v-on:VlInput="VlInput"
            />

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
        },
        VlInput(even){
            this.$emit('VlInput',even);
        },
        
    },
    props:{
        textdulieusearch:{
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>

</style>