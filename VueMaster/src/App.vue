<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <component-header 
      v-bind:titleHeader="title"
      v-on:changetitleEvent="handleChangeTitle"
    >
      <p>Đây là đoạn text từ ngoài app vào header nhé</p>
    </component-header>
    <tabparent></tabparent>


    <list-user 
      v-bind:danhsachnguoidung="danhsachnguoidung"
      v-on:deleteItemUser="deleteItemUserFunction"
     />
     <input type="file" ref="inputfile">
     <button class="btn btn-success"
      v-on:click="btninputfile"
     >Chọn File</button>
  </div>
  
</template>

<script>
import ComponentHeader from "./components/ComponentHeader.vue";
import ListUser from "./components/ListUser.vue";
import Tabparent from './components/Tabparent.vue';

// props Down -> truyen du lieu tu cha vao con , chi con duoc dung thoi khon
// thay doi ddc

// even up truyen thong diep(truyen su kien) thong bao cho component cha biet laf
// no muons htay ddoir dl -> nhiem vuj cua cha la nhan thoon diep
// vaf tieens hanh thay doi data

/*
  Tu tao ra su kien
*/

export default {
  methods: {},
  name: "app",
  data() {
    return {
      title: "hom nay trời thật đẹp",
      danhsachnguoidung: [
        { id: 1, nguoidung: "tran phuong nam 1", active: true },
        { id: 2, nguoidung: "tran phuong nam 2", active: false },
        { id: 3, nguoidung: "tran phuong nam 3", active: true },
        { id: 4, nguoidung: "tran phuong nam 4", active: false },
        { id: 5, nguoidung: "tran phuong nam 5", active: true },
      ],
    };
  },
  components: {
    ComponentHeader,
    ListUser,
    Tabparent
  },
  methods:{
    btninputfile(){
      this.$refs.inputfile.click()
      console.log(this.$refs)
    },
    handleChangeTitle(datatruyenlen){
      this.title = datatruyenlen.titleHeader;
      console.log('bac ',datatruyenlen)
    },
    deleteItemUserFunction(dataUser){
      console.log('gia tri nhan duoc',dataUser);
      var indexdelete = -1;

      
      // console.log(idx);
      
      this.danhsachnguoidung.forEach((u,idx) => {
        
        // console.log(u,idx);

        if(u.id === dataUser.id){
          indexdelete = idx
          
        }
      console.log(indexdelete,u.id,dataUser.id)

      });

      if(indexdelete != -1){
        this.danhsachnguoidung.splice(indexdelete,1);
      }

    }
  }
};
</script>
