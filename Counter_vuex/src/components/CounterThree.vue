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
        plus(){
            console.log('plus increment');
            this.$store.commit('increment',2)
        },
        minus(){
            console.log('minus decrement');

            this.$store.commit('decrement',2)

        },
    }
}
</script>

<style>

</style>
