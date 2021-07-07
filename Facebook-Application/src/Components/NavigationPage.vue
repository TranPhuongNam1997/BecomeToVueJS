<template>
    <div class="navigation">
        <div class="container">
            <div class="nav-block">
                <ul class="w-100 d-flex flex-wrap">
                    <li class="w-25" v-for="item in getTextNav" :key="item.id">
                        <router-link exact-active-class="isActive" :to="ridirectlinkcategory(item)">{{item.Text}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import removeVietnameseFromString from '../Helper'
export default {
    name:'navigation-page',
    data(){
        return{
            
        }
    },
    methods:{
        ridirectlinkcategory(item){
            return{
                name: 'home-page',
                query:{
                    text: removeVietnameseFromString(item.Text),
                    tagindex: item.id
                }
            }
        }
    },
    computed:{
        getTextNav(){
            
            return this.$store.state.post.categories;
        }
    }
}
</script>

<style scoped>
    .header-home .navigation .nav-block ul li a.isActive{
        color: #3576F1;
    }
</style>