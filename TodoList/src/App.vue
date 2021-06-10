<template>
    <div id="app">
          <div class="container mt-5">
               <tieu-de-todo/>
               <div class="row">
                    <tien-ich />
                    <component-form />
               </div>
               <danh-sach-bang />
          </div>
          <!-- <ul>
              <li v-for="(item,index) in info" v-bind:key="index">{{item.name}}</li>
          </ul> -->
    </div>
</template>

<script>


import ComponentForm from './Component/ComponentForm.vue';
import DanhSachBang from './Component/DanhSachBang.vue';
import TienIch from './Component/TienIch.vue';
import TieuDeTodo from './Component/TieuDeTodo.vue';


import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
  name: "app",
  components:{
    DanhSachBang,
    TienIch,
    ComponentForm,
    TieuDeTodo
  },
  data() {
    return {
        //   info: null
        // taskSelected: null
        
     };
  },
  methods:{
        // updateform(data){
        //     let index = this.danhsachTask.findIndex(item => item.id === data.id);
        //     if(index !== -1){
        //         this.danhsachTask.splice(index,1,data)
        //     }
        // },

  },


  mounted () {
    axios
      .get('https://609f30e8c512c20017dcce38.mockapi.io/api/todolist/nameabc')
      .then(abc => {
        this.info = abc.data;
      })
    },
    
};
</script>


<style>
/*----------------------------- style---------------------------- */

body {
    padding: 100px 0;
}
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    vertical-align: middle;
}

.container > .row {
    margin-top: 20px;
    margin-bottom: 30px;
}

span.badge-medium {
	padding: 11px 10px;
    margin: 0px 8px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
}

@media (max-width: 992px) {
    .add-task {
        margin-top: 50px;
    }
}

</style>
