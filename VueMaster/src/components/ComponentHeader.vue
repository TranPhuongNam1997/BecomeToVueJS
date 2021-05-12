<template>
  <header class="container">
    <h2>{{titleHeader}}</h2>
    <div>
      <slot></slot>

    </div>
    <button v-on:click="changetitle" class="mb-3 btn btn-primary">thay đổi tiêu đề từ cpheader</button>
    
  </header>
  

</template>
<script>
export default {
  methods: {  
    changetitle(e){
      //khong dc phep thay doi truc tiep props tu component cha
      // truyen su kien thong bao ra ben ngoai
      // kich hoat su kien changetitleEvent tu cha

      //khi function chay -> thay doi dl
      var datatruyenlen ={
        titleHeader: ' title cua datatruyenlen'
      }

      this.$emit('changetitleEvent',datatruyenlen)
      
    }
  },
  name: "Componentheader",
  props:{
    titleHeader: String,
  },
  data() {
    return {
    };

  },
};
</script>

<style >
</style>