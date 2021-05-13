<template>
  <div class="popups" v-bind:class="{openpopup: isOpenPopup}">
    <div class="box-popup">
      <h3>Luật chơi trò xúc xắc</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maxime
      exercitationem excepturi cum quos blanditiis, error, distinctio ab
      veritatis mollitia sequi eaque, perspiciatis non deleniti ducimus suscipit
      minus repudiandae consequatur?</p> 
        <button class="btn btn-outline-dark" v-on:click="btnClosePoup">Đã hiểu</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    btnClosePoup(){
        console.log('click close');
        this.$emit('closePopup');
    }
  },
  props:{
    isOpenPopup:{
        type: Boolean,
        default: false
    },
    

  }
};
</script>

<style scoped>
    .popups{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.37);
        z-index: 1;
        opacity: 0;
        visibility: hidden;
    }
    .popups.openpopup{
        opacity: 1;
        visibility: visible;
    }
    .openpopup .box-popup{
        transition: all 0.3s ease;
        transform: translate(-50%,-50%) scale(1);
        
    }
    .box-popup{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) scale(1.3);
        background: #fff;
        padding: 30px;
        transition: all 0.3s ease;

    }
    .box-popup h3{
        margin-bottom: 15px;
    }
</style>