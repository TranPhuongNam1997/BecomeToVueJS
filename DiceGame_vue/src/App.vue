<template>
  <div id="app">
    <div class="wrapper clearfix">
      <!-- truyền props scorePlayers -->

      <players
        v-bind:scorePlayers="scorePlayers"
        v-bind:activePlayer="activePlayer"
        v-bind:currentScore="currentScore"
      />

      <controls 
        v-on:EventNewGame="NewGameFunction" 
        v-on:rollDice="rollDice" 
        v-on:holdPointClick="holdPointClick" 
      />

      <dices v-bind:dices="dices" />

    </div>
    <popup 
      v-bind:isOpenPopup="isOpenPopup" 
      v-on:closePopup="closePopup" 
    />
    
  </div>
</template>

<script>
import Controls from "./components/Controls.vue";
import Dices from "./components/Dices.vue";
import Players from "./components/Players.vue";
import Popup from "./components/Popup.vue";
export default {
  components: { Players, Controls, Dices, Popup },
  name: "app",
  data() {
    return {
      isplaying: false,
      scorePlayers: [16, 36],
      activePlayer: 1,
      currentScore: 11,
      isOpenPopup: false,
      dices: [4, 5],
    };
  },

  methods: {
    holdPointClick(inputVlue){
      if(this.isplaying){
        inputVlue = this.currentScore;

      }
      else {
        alert('Vui lòng nhấn vào nút NEW GAME');
      }
    },
    nextPlayer(){
      this.currentScore = 0;
      // lúc đầu bằng 0 nếu chạy vào id sẽ chuyển thành 1 sau đó nếu chạy vào đây thì nó đang thành 1 thì sẽ chuyển thành 0
      this.activePlayer = this.activePlayer == 0 ? 1 : 0;

    },
    
    rollDice() {
      if (this.isplaying) {

        // trả về ngẫu nhiên số của xúc xắc
        console.log("roll dice app");
        var dices1 = Math.floor(Math.random() * 6) + 1;
        var dices2 = Math.floor(Math.random() * 6) + 1;
        this.dices = [dices1,dices2];

        // nếu xx =1
        if(dices1 == 1 || dices2 == 1){
          // đổi lượt chơi
          // do thông báo bị chuyển thành NAN
          // cách 1

          // let namePlayer = this.activePlayer + 1;
          // setTimeout(function(){
          //   alert(`Rất tiếc! Người chơi số ${namePlayer} đã quay trúng số 1. Mất lượt`);

          // },200);

          // cách 2 
          setTimeout(() =>{
            alert(`Rất tiếc! Người chơi số ${this.activePlayer} đã quay trúng số 1. Mất lượt`);

          },200);




          this.nextPlayer();

          

        }
        else{
          // cộng dồn điểm tạm thời cho người đang chơi
          this.currentScore = this.currentScore + dices1 + dices2;
        }


      } 
      else {
        alert('Vui lòng nhấn vào nút NEW GAME');
      }
    },

    NewGameFunction() {
      console.log("new game app");
      this.isOpenPopup = true;
    },
    closePopup() {
      console.log("close from app");
      this.isOpenPopup = false;
      this.isplaying = true;
      this.scorePlayers = [0, 0];
      this.activePlayer = 0;
      this.currentScore = 0;
      this.dices = [1, 1];
    },

    
  },
  computeds: {
    changeVlueDices(){
      
    }
  },
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
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url("/public/assets/back.jpg");
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
