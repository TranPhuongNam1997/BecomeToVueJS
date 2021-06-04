<template>
    <div>
        <h1>{{ count }}</h1>
        <h2>value = {{value}}</h2>
        <!-- <h1>value = {{ value }}</h1> -->
        <button v-on:click="count++">Plus</button>
        <button v-on:click="count--">Minus</button>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'comp-counter',
    data() {
        return {
            // count: 0
        }
    },
    computed: {
        //nếu viết dữ liệu thì đây chỉ là phương thức get dữ liệu
        count:{
            get() {
                return this.$store.getters.count
            },
            set(newcount){
                //thau đổi state(count trong store)
                this.$store.state.count = newcount;

                // console.log('newcount=', newcount);

            }
        },
        ...mapGetters([
            'value',
            'countDouble',
        ])
    },
    mounted() {
        // console.log(this.$store.getters.count)
        // console.log(this.$store.getters.countDouble)
        
    }
}
</script>

<style>

</style>
