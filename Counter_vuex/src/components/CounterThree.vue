<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="plus">Plus</button>
        <button v-on:click="minus">Minus</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'counter-three',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'count'
        ])
    },
    methods: {
        ...mapActions({
            'ABC': 'incrementAction',
            'DEF': 'decrementAction'
        }),
        plus(){
            console.log('plus increment');
            // this.$store.commit('increment',2)

            let obj = {
                number: 10
            }
            // this.$store.dispatch('incrementAction',obj);
            // ~
            // this.incrementAction(obj);
            this.ABC(obj);
        },
        minus(){
            console.log('minus decrement');
            let obj = {
                number: 10
            }
            // this.$store.commit('decrement',2)
            //this.$store.dispatch('decrementAction',obj);
            // ~
            // this.decrementAction(obj);
            this.DEF(obj);


        },
    }
}
</script>

<style>

</style>
