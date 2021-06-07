<template>
    <div id="app">
          <div class="container mt-5">
               <tieu-de-todo/>
               <div class="row">
                    <tien-ich
                        v-bind:textdulieusearch="textdulieusearch"
                        v-on:VlInput="VlInput"
                        v-bind:sapxeptheo="sapxeptheo"
                        v-bind:kieusapxep="kieusapxep"
                        v-on:hamsapxep="hamsapxep"
                    />
                    <component-form
                        v-on:submitForm="submitForm"
                        v-bind:hienthiform="hienthiform"
                        v-on:togglethemtask="togglethemtask"
                        v-bind:taskSelected="taskSelected"
                        v-on:updateform="updateform"
                    />
               </div>
               <danh-sach-bang
                    v-bind:danhsachTask="danhsachTaskSort"
                    v-on:deleteItem="deleteItem"
                    v-on:btnEdit="btnEdit"
               />
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
import danhsachTask from './DuLieuAo/task';


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
        danhsachTask : danhsachTask,
        //   info: null
        hienthiform: false, 
        textdulieusearch: '',
        sapxeptheo: 'name',
        kieusapxep: 'asc',
        taskSelected: null
        
     };
  },
  computed:{
      danhsachtashtimkiem(){
          const {textdulieusearch} = this;
          //cach 1 
          var ItemMoi = [];
          this.danhsachTask.forEach(function(item,index){
            //           hàm chữ thường - hàm tìm kiếm          hàm chữ thường
            if(item.tenTask.toLowerCase().includes(textdulieusearch.toLowerCase()))
                ItemMoi.push(item);

          })

          //cach 2 

        //   var itemMoi = this.danhsachTask.filter(item => {
        //       return item.tenTask.toLowerCase().includes(textdulieusearch.toLowerCase())
        //   })



          return ItemMoi;
      },
      danhsachTaskSort(){
          //clone data để đảm bảo chop danhsachTask không bị thay đổi
          var danhsachTask = [...this.danhsachtashtimkiem];
          if(this.sapxeptheo === 'name'){
              danhsachTask.sort(this.sosanhTen);
              
          }
          else if(this.sapxeptheo === 'mucdo'){
              danhsachTask.sort(this.sosanhmucdo);
          }
          return danhsachTask;
      }
  },
  watch:{
      danhsachTask: function(newtask){
        var taskStrimg= JSON.stringify(newtask);
        localStorage.setItem('tasks',taskStrimg);
      }
  },
  created(){
      // lay danhsachTask trong localStorage
      let tasks = localStorage.getItem('tasks');
      if(tasks !== null){
          this.danhsachTask = JSON.parse(tasks);
      }
      else{
          this.danhsachTask = [];
      }

  },
  
  
  methods:{
        updateform(data){
            console.log('update',data)
            //Tìm index tương ứng với data.id nằm trong danhsachTask gốc
            let index = this.danhsachTask.findIndex(item => item.id === data.id);
            console.log('index: ',index , data.id);
            //áp dụng splice dể tiến hành xóa và thêm mới giá trị 
            if(index !== -1){
                //                   vị trí ptu   obj truyền vao
                this.danhsachTask.splice(index,1,data)
            }
        },
        btnEdit(data){
            this.hienthiform = true;

            console.log(data);
            this.taskSelected = data;
            console.log('handle vuejs edit',this.taskSelected)
        },
        submitForm(data){
            this.danhsachTask.push(data);
        },
        deleteItem(data){
            //cach 1 
            var idx = -1;
            for(var i = 0; i < this.danhsachTask.length ; i++){
                if(this.danhsachTask[i].id = data.id){
                    idx = i;
                    break;
                }
            }
            if(idx !== -1) this.danhsachTask.splice(idx,1)        

            // cach 2 dung filter
            // this.danhsachTask = this.danhsachTask.filter(item => item.id !== data.id);
        },
        togglethemtask(){
            console.log('da bam toggle form')
          if(this.hienthiform == true) this.taskSelected = null
          
          //để dùng toggle thì mình dùng phủ định lại thôi :D
          this.hienthiform = !this.hienthiform;

        },

        VlInput(e){
          this.textdulieusearch = e;
        },

        hamsapxep(data){
            this.sapxeptheo = data.data1;
            this.kieusapxep = data.data2;
        },

        //ham so sanh
        sosanhTen(a,b){

            var sosapxeptheo = this.kieusapxep === 'asc'? - 10 : 100
            if (a.tenTask < b.tenTask) {
                return sosapxeptheo;
            }
            if (a.tenTask > b.tenTask) {
                return sosapxeptheo * (-1);
            }
            return 0;

        },
        sosanhmucdo(a,b){
            var sosapxeptheo = this.kieusapxep === 'asc'? - 1 : 1
            if (a.level < b.level) {
                return sosapxeptheo;
            }
            if (a.level > b.level) {
                return sosapxeptheo * (-1);
            }
            return 0;
        }
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
