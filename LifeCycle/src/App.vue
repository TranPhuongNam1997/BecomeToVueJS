<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',


  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  // hàm tự tạo

  method:{
    handleChangeTitle(){

    },
    handleDeleteUser(){

    },
  },

  // Các function có sẵn mà vueJs cung cấp cho mình

  beforeCreate(){
    // Diễn ra trước khi hệ thông phản ứng thực hiện
    console.log('beforeCreate');
  },

  // trong dự án thực tế sử dụng cái này nhiều nhất để lấy dữ liệu về 
  created(){
    // Call API , Call AJAX
    console.log('created');
  },

  beforeMount(){
    // Complie ra mã HTML 
    console.log('beforeMount');
  },

  mounted(){
    // Hiển thị ra HTMl
    // Muốn sử dụng được Jquery thì phải sử dung trong mounted vì những hàm trên chwua render ra HTML 
    console.log('mounted');
  },

  // 2 hàm này xảy ra khi có dữ liệu được thay đổi
  beforeUpdate(){
    console.log('beforeUpdate');

  },

  updated(){
    console.log('updated');

  },

  // 2 cái này ít dùng

  beforeDestroy(){
    console.log('beforeDestroy');
  },
  
  destroy(){
    // destroy các thư viện của bên thứ 3 
    console.log('destroy');
  },


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
