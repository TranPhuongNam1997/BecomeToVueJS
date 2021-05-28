<template>
    <div class="col-12">
        <div class="form-group">
            <b-dropdown text="Sắp xếp theo" >
                <b-dropdown-item>Tên ASC</b-dropdown-item>
                <b-dropdown-item v-on:click="$emit('sapxeptendesc')">Tên DESC</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item >Cấp độ ASC</b-dropdown-item>
                <b-dropdown-item >Cấp độ DESC</b-dropdown-item>
            </b-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tienichsapxep',
    data(){
        return{

        }
    }
}
</script>
<style scoped>

</style>