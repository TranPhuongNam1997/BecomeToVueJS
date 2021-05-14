<template>
  <div class="controls">
    <button v-on:click="newGame" class="control btn-new">
      <i class="ion-ios-plus-outline"></i>New game
    </button>
    <button class="control btn-roll"
      v-on:click="rollDice"
    >
      <i class="ion-ios-loop"></i>Roll dice
    </button>
    <button class="control btn-hold"
      v-on:click="$emit('holdPointClick')"
    
    >
      <i class="ion-ios-download-outline"></i>Hold
    </button>

    <!-- Ràng buộc 2 chiều  -->
    <input 
        v-bind:disabled="isplaying"

        v-bind:value="finalScore"
        
        v-on:input="$emit('getVlInput',$event)"

        type="number" placeholder="Final score" class="final-score"  
        
    />


    <!-- ràng buộc 1 chiều -->
    <!-- truyền dữ liệu vào input -->
    <!-- truyền input vào dữ liệu -->
    <!-- <input 
      
      v-bind:value="valueDemo" 

      v-on:input="valueDemo = $event.target.value"

      type="number" placeholder="Final score" class="final-score"
    
    /> -->


    <!-- 
        1. ràng buộc dữ liệu (thuộc tính HTML) -> v-bind
            1 chiều từ data sang input chứ không có chiều ngược lại

        2. ràng buộc dữ liệu 2 chiều -> v-model
            1 chiều từ data vào input
            1 chiều từ input vào data


        
     -->


  </div>
</template>

<script>
export default {
  name: "controls",
  data() {

    return{
      valueDemo: 1000
    }

  },
  props:{
    finalScore:{
      type: [Number,String],
      default: 0,
    },
    isplaying:{
      type: Boolean,
      default: false
    }
  },

  methods:{
    newGame(){
      console.log('new game fron controls');
      this.$emit('EventNewGame');
    },
    rollDice(){
      console.log('roll dice from controls');
      this.$emit('rollDice');
    },
    // holdPoint(inputValues){
    //   $('.final-score').val(inputValues);
      
    //   this.$emit('holdPointClick',inputVlue);

    // }
  }
};
</script>

<style scoped>
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

.control:hover {
  font-weight: 600;
}
.control:hover i {
  margin-right: 20px;
}

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

.btn-new {
  top: 45px;
}
.btn-roll {
  top: 403px;
}
.btn-hold {
  top: 467px;
}

.final-score {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 520px;
  color: #555;
  font-size: 18px;
  font-family: "Lato";
  text-align: center;
  padding: 10px;
  width: 160px;
  text-transform: uppercase;
}

.final-score:focus {
  outline: none;
}
</style>