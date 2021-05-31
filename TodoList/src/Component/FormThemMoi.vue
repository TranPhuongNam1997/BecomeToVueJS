<template>
    <div class="form-group add-task">
          <button 
               type="button" 
               class="btn btn-info btn-block"
               v-on:click="$emit('clickthemtask')"
               v-if="!hienthiform"
               >
               Thêm Task
          </button>
          <button
               type="button" 
               class="btn btn-success btn-block"
               v-on:click="$emit('clickthemtask')"
               v-else
          >
               Đóng Form
          </button>
    </div>
</template>
<script>
export default {
    name:'formthemmoi',
    data(){
        return{
          
        }
    },
    props:{
         hienthiform:{
              type:  Boolean,
              default: false
         }
    }
}
</script>
<style  scoped>
     
</style>