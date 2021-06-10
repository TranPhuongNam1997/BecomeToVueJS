<template>
    <div class="form-group add-task">
          <button 
               type="button" 
               class="btn btn-info btn-block"
               v-on:click="togglethemtask"
               v-if="!hienthiform"
               >
               Thêm Task
          </button>
          <button
               type="button" 
               class="btn btn-success btn-block"
               v-on:click="clickthemtask"
               v-else
          >
               Đóng Form
          </button>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name:'formthemmoi',
    data(){
        return{
          
        }
    },
    computed: mapState(['hienthiform']),
    methods:{
         ...mapActions(['togglethemtask']),
         clickthemtask(){
              console.log('clickthemtask formthemoi.vue run')
              this.togglethemtask();
         }
    }
}
</script>
<style  scoped>
     
</style>