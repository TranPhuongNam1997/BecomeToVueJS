<template>
  <div class="tabs-child">
      <div class="header-tabs">
          <h2>{{titletabs}}</h2>
          <slot></slot>
      </div>
  </div>
  

</template>
<script>
export default {
  methods: {  
    
  },
  name: "tabchildren",
  props:{
    titletabs: String
  },
  data() {
    return {
    };

  },
};
</script>

<style >
</style>