<template>
    <div class="col-12 col-lg-6">
          <!-- ADD : START -->

          <form-them-moi />
          <!-- ADD : END -->

          <form
               action=""
               method="POST"
               class="form-inline justify-content-between"
               v-if="hienthiform"
               >
               <div class="form-group">
                    <label class="sr-only" for="">label</label>
                    <input v-model="tentask" type="text" class="form-control" placeholder="Tên Task" />
               </div>
               <div class="form-group">
                    <label class="sr-only" for="">label</label>
                    <select v-model="mucdo" name="ds" class="form-control" required="required">
                         <option value="0">Thấp</option>
                         <option value="1">Vừa</option>
                         <option value="2">Cao</option>
                    </select>
               </div>

               <button v-if="taskSelected === null" type="button" class="btn btn-primary" v-on:click="submitForm">Gửi</button>
               <button v-else type="button" class="btn btn-primary" v-on:click="updateform">Cập nhật</button>
               
               <button 
                    type="button" 
                    class="btn btn-secondary"
                    v-on:click="huybothemtask"
               >Hủy</button>
          </form>
        </div>
</template>
<script>
import { mapState,mapActions } from 'vuex'

import FormThemMoi from './FormThemMoi.vue'
import { v4 as uuidv4 } from 'uuid';

export default {
  components: { FormThemMoi },
     name: 'componentform',
     data(){
          return{
               tentask: '',
               mucdo: 0,
          }
     },
     computed: mapState(['hienthiform','taskSelected']),
     watch:{
          taskSelected: function(newdata,olddata){
               if(newdata !== null){
                    this.tentask = newdata.tenTask;
                    this.mucdo = newdata.level;
               }
          }
     },
     methods:{
          ...mapActions(['togglethemtask','handleAdd','handleEditForm']),

          huybothemtask(){
               this.togglethemtask();
               this.resetdata();
          },
          submitForm(){
               if(this.tentask.trim()){
                    let itemnewadd = {
                         id: uuidv4(),
                         tenTask : this.tentask.trim(),
                         level: parseInt(this.mucdo)
                    }
                    this.handleAdd(itemnewadd)

                    this.huybothemtask();
               }
               else{
                    alert('Vui lòng nhập tên người dùng')
               }
               
          },
          resetdata(){
               this.tentask = '';
               this.mucdo = '';
          },
          updateform(){
               let objEdit = {
                   id: this.taskSelected.id,
                   tenTask: this.tentask,
                   level: parseInt(this.mucdo)
               }

               // this.$emit('updateform',objEdit);
               this.handleEditForm(objEdit)
               this.resetdata();
         }
    }
}

</script>
<style scoped>

</style>  