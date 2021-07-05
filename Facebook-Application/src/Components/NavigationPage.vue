<template>
    <div class="navigation">
        <div class="container">
            <div class="nav-block">
                <ul class="w-100 d-flex flex-wrap">
                    <li class="w-25" v-for="item in getTextNav" :key="item.id"><a href="#">{{item.Text}}</a></li>
                    
                </ul>
                

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'navigation-page',
    data(){
        return{
            
        }
    },
    computed:{
        getTextNav(){
            return this.$store.state.post.categories;
        }
    }
}
</script>

<style>

</style>