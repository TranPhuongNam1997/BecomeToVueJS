<template>
  <div class="tabs-parent mt-5 mb-5">
    <tabs-child titletabs="Tiêu đề Tabs">
      <div class="tabs-head">
        <ul>
          <li v-for="(item, index) in ListItemTabs" 
            v-bind:key="index" 
            v-bind:class="{active: tabsactive == index}"
            v-on:click="itemtabsClick(index)">
            {{ item.texttabs }}
          </li>
        </ul>
      </div>
      <div class="tabs-content tabs1" v-if="tabsactive === 0">
          <p>Nội dung tabs 1 </p>
      </div>
      <div class="tabs-content tabs2" v-if="tabsactive === 1">
          <p>Nội dung tabs 2 </p>

      </div>
      <div class="tabs-content tabs3" v-if="tabsactive === 2">
          <p>Nội dung tabs 3 </p>

      </div>
    </tabs-child>
  </div>
</template>
<script>
import TabsChild from "./TabsChild.vue";
export default {
  components: { TabsChild },
  methods: {

      itemtabsClick(index){
        this.tabsactive = index;
        
      }


  },
  name: "tabparent",
  props: {},
  data() {
    return {
      ListItemTabs: [
        { id: 1, texttabs: "Tab 1" },
        { id: 2, texttabs: "Tab 2" },
        { id: 3, texttabs: "Tab 3" },
      ],
        tabsactive : 1
      
    };
  },
};
</script>

<style >
.tabs-head{
    margin-bottom: 15px;
}
.tabs-head ul li{
    list-style: none;
    padding: 5px 15px;
    background: gray;
    margin-right: 5px;
    cursor: pointer;
}
.tabs-head ul{
    display: flex;
    padding: 0;
}
</style>