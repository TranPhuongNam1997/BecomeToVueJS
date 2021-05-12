<template>
  <div class="list-user">
    <user
      v-for="item in danhsachnguoidung"
      v-bind:key="item.id"
      v-bind:item="item"
      v-on:deleteUser="deleteUserFunction"
    />
    <!-- <user v-for="item in danhsachnguoidung" v-bind:key="item.id"/> -->
    
  </div>
</template>
<script>


/*
  App
    ListUser -> không được quyền thay đổi arrLisetUser -> truyền tiế event
    thêm một lần nữa ra App
      for(user) -> truyền event thong báo ra cho thằng ListUser

*/



import User from "./User.vue";
export default {
  methods: {
    deleteUserFunction(dataUser){
      console.log('id nhan duoc la :',dataUser );
      this.$emit('deleteItemUser',dataUser)
    }
  },
  components: {
    User,
  },
  props: {
    danhsachnguoidung: {
      type: Array,
      default: [],
    }
  },
  name: "list-user",
  data() {
    return {}
  },
};
</script>


 <style scoped>
 
 .list-user{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
 </style>


