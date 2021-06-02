<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            
            <tien-ich-sap-xep
                v-bind:sapxeptheo="sapxeptheo"
                v-bind:kieusapxep="kieusapxep"
                v-on:hamsapxep="hamsapxep"
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
        
        VlInput(even){
            this.$emit('VlInput',even);
        },
        hamsapxep(data){
            this.$emit('hamsapxep',data);
        }
        
    },
    props:{
        textdulieusearch:{
            type: String,
            default: ''
        },
        sapxeptheo:{
            type: String,
            default: 'name'
        },

        kieusapxep:{
            type: String,
            default: 'asc'
        },

    }
}
</script>
<style scoped>

</style>