<template>
  <div class="loading">
    <div class="loadingio-spinner-ripple-lbye9j7tls8">
      <div class="ldio-8uzeddepwvn">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {};
  },
};
</script>

<style >
.loading{
    background: #ffffff85;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.2 ease;
    opacity: 0;
    visibility: hidden;
}
.loadingio-spinner-ripple-lbye9j7tls8{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.loading.open{
  transition: all 0.2 ease;
  opacity: 1;
  visibility: visible;
}
@keyframes ldio-8uzeddepwvn {
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
}
.ldio-8uzeddepwvn div {
  position: absolute;
  border-width: 4px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  animation: ldio-8uzeddepwvn 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.ldio-8uzeddepwvn div:nth-child(1) {
  border-color: #e90c59;
  animation-delay: 0s;
}
.ldio-8uzeddepwvn div:nth-child(2) {
  border-color: #46dff0;
  animation-delay: -0.5s;
}
.loadingio-spinner-ripple-lbye9j7tls8 {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-8uzeddepwvn {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-8uzeddepwvn div {
  box-sizing: content-box;
}
</style>