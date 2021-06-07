<template>
    <div class="col-12">
        <div class="input-group">
            <input
            type="text"
            class="form-control"
            placeholder="Nhập từ khóa..."

            v-bind:value="textdulieusearch"
            v-on:input="$emit('VlInput',$event.target.value)"
            />
            <span class="input-group-append">
                <button class="btn btn-info" type="button"
                    v-on:click="$emit('VlInput','')"
                
                >Xóa!</button>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tienichtimkiem',
    data(){
        return{

        }
    },
    props:{
        textdulieusearch:{
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>

</style>