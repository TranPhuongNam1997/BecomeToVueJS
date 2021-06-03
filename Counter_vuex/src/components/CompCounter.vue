<template>
    <div>
        <h1>{{ count }}</h1>
        <!-- <h1>value = {{ value }}</h1> -->
        <button v-on:click="count++">Plus</button>
        <button v-on:click="count--">Minus</button>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
    name: 'comp-counter',
    data() {
        return {
            count: 0
        }
    },
    computed: {
        
    },
    mounted() {
        
    }
}
</script>

<style>

</style>
