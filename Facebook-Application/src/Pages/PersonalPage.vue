<template>
    <main class="main">
        <info-persional :Infouser="Infouser" :countPost="countPost" />

        <div class="container">

            <!-- <div 
                v-if="ListPostOfUser && ListPostOfUser.length"
                v-masonry
                column-width='.grid-sizer'
                transition-duration="0.3s" 
                item-selector=".item"
                class="row"
                
                >
                <div class="grid-sizer"></div>
                <post-list-item 
                    v-masonry-tile 
                    class="col-lg-6"
                    v-for="item in ListPostOfUser"
                    :key="item.PID"
                    :post="item"

                />
            </div> -->
            
            

            
            <div 
                v-if="ListPostOfUser && ListPostOfUser.length"
                class="row"
                
                >
                <!-- <div class="grid-sizer"></div> -->
                <div

                    v-masonry-tile 
                    class="col-lg-6 cs-persionalimg"
                    v-for="item in ListPostOfUser"
                    :key="item.PID"
                >
                    <post-list-item 
                        :post="item"
                    />
                </div>
                
            </div>


        </div>
    </main>
</template>

<script>
import { mapActions } from 'vuex'
import '../Plugin'
import PostListItem from '../Components/PostListItem.vue'
import InfoPersional from '../Components/InfoPersional.vue'

export default {
    name:'personal-page',
    components: {
        PostListItem,
        InfoPersional
        
    },
    data(){
        return{
            userId: this.$route.params.id,
            ListPostOfUser : [],
            Infouser : null,
            countPost: 0,
        }
    },
    watch: {
        $route(to, from) {
            this.userId = to.params.id;
            this.fechDataPersional();
            // this.countPost()
        }
    },
    created(){
        this.fechDataPersional();
            // this.countPost()

    },
    methods:{
        ...mapActions(['getListPostByUserID','getUserById','setloading']),
        async fechDataPersional(){
            this.setloading(true);
            let userID = this.userId;

            let APIResuiltUser = this.getUserById(userID);
            
            let APIResuiltPostOfUser = this.getListPostByUserID(userID);

            let [ResuiltUser ,ResuiltPostOfUser ] = await Promise.all([APIResuiltUser , APIResuiltPostOfUser])
            this.setloading(false);

            if(ResuiltUser.ok && ResuiltPostOfUser.ok){
                // let data = {
                //     user  : ResuiltUser.data,
                //     posts : ResuiltPostOfUser.data.posts
                // }
                // console.log('data Persional = ',data)
                this.ListPostOfUser = ResuiltPostOfUser.data.posts;
                this.Infouser = ResuiltUser.data;
                this.countPost = this.ListPostOfUser.length;
                console.log(this.countPost)
            }
            else{
                this.$router.push('/')
            }
        },
        // countPost(){
        //     console.log('count = ',this.ListPostOfUser.length)
        //     return this.ListPostOfUser.length;
        // }
    }
    
}
</script>

<style>
    .cs-persionalimg .post-img a img{
        min-height: 500px;
        object-fit: cover;
    }
</style>