<template>
  <div class="wrap-control">
    <button class="control btn-new"
      v-on:click="$emit('clicknewgame')"
    >
      <i class="ion-ios-plus-outline"></i>Chơi mới
    </button>
    <button class="control btn-roll"
      v-on:click="$emit('xoayxucxac')"
    >
      <i class="ion-ios-loop"></i>Quay xúc xắc
    </button>
    <button class="control btn-hold"
      v-on:click="$emit('nutgiudiem')"
    >
      <i class="ion-ios-download-outline"></i>Giữ điểm
    </button>

    <!-- v-bind:value="gioihanchienthang"   ~~ lấy dữ liệu prop truyền vào đây -->

    <!-- v-on:input="$emit('thaydoigioihan',$event)" ~~ truyền dữ liệu ra ngoài app -->
    <input
      v-bind:disabled="dangchoi"
      v-bind:value="gioihanchienthang"
      v-on:input="$emit('thaydoigioihan',$event)"
    
     type="number" placeholder="Final score" class="final-score" />
    <!-- 
      Ràng buộc dữ liệu 1 chiều thì khi thay đổi lại ngoài giao diện thì bên trong không phản ứng lại
      1 chiều từ data vào input  (v-bind:value)

      2 chiều là dùng v-model thì nó sẽ thay đổi theo
      lưu ý dữ liệu thu thập từ ô input thì đều là dang chuỗi 

      nguyên tắc là props không được thay đổi từ component con 





     -->


  </div>
</template>
<script>
export default {
  name: "dieukhien",

  data() { 
    return{

    }
  },
  methods:{
    // clicknewgame(){
    //   this.; 

    // },
    
  },
  // khái niệm mới props minh có thể khai báo thành 1 cái mảng có thể là number có thể là string
  props:{
    gioihanchienthang:{
      type: [Number,String],
      default: 100
    },
    dangchoi:{
      type: Boolean,
      default: false
    }
  }



};
</script>
<style>
.control {
    position: absolute;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    color: #555;
    background: none;
    border: none;
    font-family: Lato;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 300;
    transition: background-color 0.3s, color 0.3s;
}
.control.disable {
    pointer-events: none;
}

.control:hover { font-weight: 600; }
.control:hover i { margin-right: 20px; }

.control:focus {
    outline: none;
}

.control i {
    color: #42b983;
    display: inline-block;
    margin-right: 15px;
    font-size: 32px;
    line-height: 1;
    vertical-align: text-top;
    margin-top: -4px;
    transition: margin 0.3s;
}

.btn-new { top: 45px;}
.btn-roll { top: 403px;}
.btn-hold { top: 467px;}

.final-score {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 520px;
    color: #555;
    font-size: 18px;
    font-family: 'Lato';
    text-align: center;
    padding: 10px;
    width: 160px;
    text-transform: uppercase;
}

.final-score:focus { outline: none; }
</style>