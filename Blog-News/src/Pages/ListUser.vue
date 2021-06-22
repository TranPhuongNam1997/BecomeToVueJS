<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-4">
                
                <b-list-group>
                    <router-link 
                        tag="b-list-group-item"
                        v-for="(item,index) in Listuer" 
                        :key="index"
                        :to="`/user/${index+1}`"
                        exact-active-class="active"
                    >
                    {{item.name}}
                    </router-link>
                </b-list-group>
            </div>
            <div class="col-lg-8">
                <h2 v-if="!currenID">Vui lòng chọn</h2>
                <template v-else-if="getcurrenUser">
                    <p>Tên: {{getcurrenUser.name}}</p>
                    <p>Email: {{getcurrenUser.email}}</p>
                    <p>Trạng thái: {{getcurrenUser.isActive}}</p>
                    <p>Mô tả: {{getcurrenUser.description}}</p>
                </template>
                <h3 v-else>ID không hợp lệ</h3>
            </div>
        </div>
    </div>
</template>


<script>
import Listuer from '../mokedata/listuser'
export default {
    name: 'list-user',
    data(){
        return{
            Listuer,
            currenID: null
        }
    },
    //truy cập vào link đó lần đầu tiên
    created(){
        this.currenID = this.$route.params.id
    },
    computed:{
        getcurrenUser(){
            let id = parseInt(this.currenID);

            if(id > this.Listuer.length) return null;

            return this.Listuer[id - 1];
        }
    },
    watch: {
        $route(to, from) {
            this.currenID = to.params.id;
        }
    }

}
</script>

<style>

</style>