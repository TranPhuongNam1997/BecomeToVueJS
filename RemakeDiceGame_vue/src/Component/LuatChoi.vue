<template>
  <div class="wrap-pp" v-bind:class="classhienthipopup">
    <div class="box-popup">
      <div class="head-pp">Luật chơi</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        voluptatem vero aspernatur, eius pariatur iste atque tempora asperiores
        quam ea praesentium non facilis animi odio voluptatum facere voluptates
        veritatis officia! Quisquam enim similique ullam in vitae neque,
        delectus odit illum, optio accusantium, blanditiis id? Molestiae,
        debitis aliquam exercitationem reiciendis, animi eos omnis cumque ipsum
        est asperiores doloremque aperiam? Beatae dignissimos nesciunt aliquid
        iste nemo deleniti. Quasi vero odio quisquam deleniti. Reprehenderit
        expedita quidem atque nobis nihil, ipsum quisquam est distinctio cum eum
        exercitationem veniam voluptatem tempore aut nemo eius deserunt
        laudantium doloribus rerum iusto! Mollitia debitis officia est culpa
        cumque.
      </p>
      <div class="text-center">
        <button class="btn-mean btn btn-primary ml-3 mb-4"
          v-on:click="$emit('dahieuluat')"
        
        >Đã hiểu luật</button>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "luatchoi",
  

  data() {
    return{
      
    }
  },
  props:{
    hienthipopup:{
      type: Boolean,
      default: false,
    }
  },
  
  // methods:{
  //   classhienthipopup(){
  //     return
  //   }
  // },

  computed:{
    classhienthipopup: function(){
      return{
        'show-popup' : this.hienthipopup
      }
    }
  },
};
</script>
<style>
  .wrap-pp.show-popup{
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s ease;
  }
  .wrap-pp{
    visibility: hidden;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000004d;
  }
  .box-popup{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 600px;
    background: #fff;


  }
  .head-pp{
    font-size: 18px;
    font-weight: 700;
    background: lightblue;
    padding: 10px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }
  .box-popup p{
    padding: 10px 20px;
    
  }

</style>