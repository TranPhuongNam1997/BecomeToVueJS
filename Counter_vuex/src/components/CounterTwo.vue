<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="count++">Plus</button>
        <button v-on:click="count--">Minus</button>
    </div>
</template>

<script>
// import { mapGetters, mapState } from 'vuex'

export default {
    name: 'counter-two',
    data() {
        return {
            count: 0
        }
    },
    computed: {
        // ...mapGetters([
        //     'count',
        //     'value',
        //     'countDouble'
        // ]),
        // ...mapState([
        //     'value2'
        // ])
    }
}
</script>

<style>

</style>
