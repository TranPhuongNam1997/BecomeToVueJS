<template>
    <div class="col-12">
        <div class="form-group">
            <b-dropdown text="Sắp xếp theo" >
                <b-dropdown-item v-on:click="hamsapxep('name','asc')" >Tên ASC</b-dropdown-item>
                <b-dropdown-item v-on:click="hamsapxep('name','desc')">Tên DESC</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item v-on:click="hamsapxep('mucdo','asc')" >Cấp độ ASC</b-dropdown-item>
                <b-dropdown-item v-on:click="hamsapxep('mucdo','desc')" >Cấp độ DESC</b-dropdown-item>
            </b-dropdown>
            <span class="badge badge-success badge-medium text-uppercase">{{sapxeptheo}} - {{kieusapxep}}</span>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'tienichsapxep',
    data(){
        return{

        }
    },
    computed:{
      ...mapState(['sapxeptheo','kieusapxep'])  
    },
    methods:{
        ...mapActions(['handleSapXep']),
        hamsapxep(sapxeptheo,kieusapxep){
            let data = {sapxeptheo,kieusapxep};
            this.handleSapXep(data);
            console.log('handleSapXep nhan duoc comp',data)
            // this.$emit('hamsapxep',data);

        }
    },
    // props:{
    //     sapxeptheo:{
    //         type: String,
    //         default: 'name'
    //     },

    //     kieusapxep:{
    //         type: String,
    //         default: 'asc'
    //     },
    // }
}
</script>
<style scoped>

</style>