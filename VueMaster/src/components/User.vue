<template>
  <div class="user mb-5">
    <p>{{ item.nguoidung }}</p>
    <div class="text-center">
      <button class="btn btn-danger" v-on:click="DeleteNguoiDung">Xóa người dùng</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    DeleteNguoiDung(e){
      console.log(e);
      var dataUser ={id: this.item.id}
      this.$emit('deleteUser',dataUser)
    }
  },

  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  name: "user",

  data() {
    return {};
  },
};
</script>
<style scoped>
.user {
  width: 33.3333%;

  padding: 0 15px;
}
.user p {
  border: 2px solid #000;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>