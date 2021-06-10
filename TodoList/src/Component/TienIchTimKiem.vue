<template>
    <div class="col-12">
        <div class="input-group">
            <input
            type="text"
            class="form-control"
            placeholder="Nhập từ khóa..."

            v-bind:value="textdulieusearch"
            v-on:input="VlInput"
            />
            <span class="input-group-append">
                <button class="btn btn-info" type="button"
                    v-on:click="cleartextsearch"
                
                >Xóa!</button>
            </span>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'tienichtimkiem',
    data(){
        return{

        }
    },
    computed: mapState(['textdulieusearch']),
    methods:{
        cleartextsearch(){
            this.$store.dispatch('handleSearch','')
        },
        VlInput(e){
            this.$store.dispatch('handleSearch',e.target.value)
            console.log('du lieu nhap o input',e.target.value)
            // this.$emit('VlInput',$event.target.value)
        }
    }
    // props:{
    //     textdulieusearch:{
    //         type: String,
    //         default: ''
    //     }
    // }


}
</script>
<style scoped>

</style>