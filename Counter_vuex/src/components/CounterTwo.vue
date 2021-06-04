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
            
        }
    },
    computed: {
        //nếu viết dữ liệu thì đây chỉ là phương thức get dữ liệu
        count(){
            return this.$store.state.count
        }
    },
}
</script>

<style>

</style>
