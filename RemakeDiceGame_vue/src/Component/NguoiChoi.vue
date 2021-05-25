<template>
  <div class="wrap-player">
    <!-- v-bind class                       tên class   điều kiện -->
    <div class="player-panel" v-bind:class="{ active: trangthainguoidangchoi == 0 }">
      <div class="player-name">player 1</div>
      <div class="player-score">{{diemcaocuanguoichoi[0]}}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <!-- Toán tử 3 ngồi                        điều kiện              nếu đúng    nếu sai -->
        <div class="player-current-score">{{trangthainguoidangchoi == 0 ? diemhientai : 0}}</div>
      </div>
    </div>

    <div class="player-panel" v-bind:class="{ active: trangthainguoidangchoi == 1}">
      <div class="player-name">Player 2</div>
      <div class="player-score">{{diemcaocuanguoichoi[1]}}</div>
      <div class="player-current-box">
        <div class="player-current-label">Current</div>
        <div class="player-current-score">{{trangthainguoidangchoi == 1 ? diemhientai : 0}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nguoichoi",

  data() {
    return{
      
    }
  },

  props:{
    trangthainguoidangchoi:{
      type: Number,
      default: 0
    },
    
    diemcaocuanguoichoi:{
      type: Array,
      default: [0,0]
    },
    diemhientai:{
      type: Number,
      default: 0
    },


  }

};
</script>
<style>
.player-panel {
    width: 50%;
    float: left;
    height: 600px;
    padding: 100px;
    transition: all .3s ease;
    background-color: #fff;
}
.player-name {
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: 10px;
    position: relative;
}

.player-score {
    text-align: center;
    font-size: 80px;
    font-weight: 100;
    color: #42b983;
    margin-bottom: 130px;
}

.active { background-color: #f7f7f7; }
.active .player-name { font-weight: 300; }

.active .player-name::after {
    content: "\2022";
    font-size: 47px;
    position: absolute;
    color: #42b983;
    top: -7px;
    right: 10px;
    
}

.player-current-box {
    background-color: #42b983;
    color: #fff;
    width: 40%;
    margin: 0 auto;
    padding: 12px;
    text-align: center;
}

.player-current-label {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 12px;
    color: #222;
}

.player-current-score {
    font-size: 30px;
}

.winner { background-color: #f7f7f7; }
.winner .player-name { font-weight: 300; color: #42b983; }

</style>
