<template>
    <div id="app">
        <div class="container-x mt-4">
            <titlecart />

            <div class="row">
                <listproduct />


                <tablecart />
            </div>
            <notifications group="noti" position="bottom right" />
            <loading :class="{open : isloading}" />
        </div>
    </div>
</template>

<script>
import Listproduct from "./Component/Listproduct.vue";
import Loading from './Component/Loading.vue';
import Tablecart from "./Component/Tablecart.vue";
import Titlecart from "./Component/Titlecart.vue";
import {mapState} from 'vuex'


export default {
components: { Titlecart, Listproduct, Tablecart, Loading },
name: "app",

data() {
    return {};
},
computed:{
    ...mapState(['isloading'])
},
mounted() {},
};
</script>

<style>
</style>
