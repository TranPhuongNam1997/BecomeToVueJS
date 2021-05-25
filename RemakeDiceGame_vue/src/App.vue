<template>
  <div id="app">
    <div class="wrapper clearfix">
      <!-- 
isPlaying: true
score -> Có 2 điểm chính thức hành cho 2 người chơi
currentStore -> điểm hiện tại
dice1 - dice2
Làm sao để nhận diện được ai là người đang chơi?? -> Chỉ có 2 người
    -> Tạo biến để lưu
    activePlayer: 1 -> Người thứ nhất đang chơi
    activePlayer: 2 -> Người thứ hai đang chơi

NewGame
    1. Show Popup
    2. Reset Data
    3. Xay dựng Popup

Roll Dice
    1. Random dư liệu 2 con xúc xắc
    2. Kiểm tra xem người dùng có xuay đúng con số 1 không?
        2.1. Nếu xoay trúng số 1 -> Đổi lượt chơi -> Reset điểm tạm thời
        2.2. Nếu xoay ok -> Cộng dồn vào điểm tạm thời cho người chơi đó.

Hold -> Lấy điểm
    1. So sánh xem điểm cuối cùng lớn hơn FinalScore???
    2. Chưa đủ điểm -> Cộng dồn 'ĐIỂM CHÍNH THỨC' => Đổi lượt chơi

 -->
      <xuc-xac

        v-bind:xuxxac="xuxxac"
      
       />
      <dieu-khien

        v-on:clicknewgame="clicknewgame"
        v-on:xoayxucxac="xoayxucxac"

      
      />
      <nguoi-choi
        v-bind:trangthainguoidangchoi="trangthainguoidangchoi"
        v-bind:diemcaocuanguoichoi="diemcaocuanguoichoi"
        v-bind:diemhientai="diemhientai"
  
      />
      
      
    </div>
    <luat-choi
      v-on:dahieuluat="dahieuluat"
      v-bind:hienthipopup="hienthipopup"
    
    />

  </div>
</template>

<script>
import DieuKhien from './Component/DieuKhien.vue';
import LuatChoi from './Component/LuatChoi.vue';
import NguoiChoi from './Component/NguoiChoi.vue';
import XucXac from './Component/XucXac.vue';
export default {
  components: { XucXac, LuatChoi, DieuKhien, NguoiChoi },
  name: "app",
  data() {
    return {
      dangchoi: false,
      trangthainguoidangchoi: 0,
      diemcaocuanguoichoi: [30,50],
      diemhientai: 14,
      hienthipopup: false,
      xuxxac: [1,4],
      gioihanchienthang: 60,

    };
  },
  methods:{
    clicknewgame(){

      // hiển thị popup
      this.hienthipopup = true;
      
    },

    dahieuluat(){

      // ẩn popup
      this.hienthipopup = false;
      
      //reset giá trị về 0
      this.dangchoi = true
      this.trangthainguoidangchoi = 0;
      this.diemhientai = 0;
      this.diemcaocuanguoichoi = [0,0];
    },

    xoayxucxac(){
      if(this.dangchoi ==true){
        var xx1 = Math.floor(Math.random() * 6) + 1;
        var xx2 = Math.floor(Math.random() * 6) + 1;
        var xxplus = xx1 + xx2;
        console.log(xx1,xx2);
        this.xuxxac = [xx1,xx2];
        if(xx1 == 1 || xx2 == 1){
          this.diemhientai = 0;

          // lien quan den ES6  - xu ly ham bat dong bo
          let trangthainguoidangchoi = this.trangthainguoidangchoi;

          setTimeout(function(){
            alert(`Người chơi số ${trangthainguoidangchoi + 1} đã bị mất lượt chơi`);

          },100)

          this.chuyennguoichoi();
        }
        else{
          this.diemhientai = this.diemhientai + xxplus;

        }

        
        
      }
      else{
        alert('vui long nhan vao nu choi moi');
      }
    },

    nutgiudiem(){
      if(this.dangchoi){
        let {diemcaocuanguoichoi,diemhientai,trangthainguoidangchoi} = this;
        let diemcu = diemcaocuanguoichoi[trangthainguoidangchoi]

        this.diemcaocuanguoichoi[trangthainguoidangchoi] = diemcu + diemhientai;
        
        console.log(this.diemcaocuanguoichoi);

        // this.diemcaocuanguoichoi[this.trangthainguoidangchoi] = this.diemcaocuanguoichoi[trangthainguoidangchoi] + this.diemhientai;
      }

      else{
        alert('vui long bam vao nut choi moi');
      }
      
    },

    chuyennguoichoi(){
      this.diemhientai = 0;

      // cái trạng thái người chơi nếu nó = 0 thì chuyển thành 1,  nếu nó bằng 1 khác !0 thì nó sẽ chuyển về 0
      this.trangthainguoidangchoi = this.trangthainguoidangchoi == 0 ? 1 : 0;
    }
  }

};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(images/back.jpg);
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
</style>