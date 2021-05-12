<template>
  <div id="app">
    <div class="wrapper clearfix">
        <!-- truyền props scorePlayers -->
        <players
            v-bind:scorePlayers="scorePlayers"
            v-bind:activePlayer="activePlayer"
            v-bind:currentScore="currentScore"

        />

        <controls></controls>

        <dices />
        
    </div>
  </div>
</template>

<script>
import Controls from './components/Controls.vue';
import Dices from './components/Dices.vue';
import Players from './components/Players.vue';
export default {
  components: { Players, Controls, Dices },
  name: "app",
  data() {
    return {
        scorePlayers:[16,36],
        activePlayer: 1,
        currentScore: 11

    };
  },

  methods: {},
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
