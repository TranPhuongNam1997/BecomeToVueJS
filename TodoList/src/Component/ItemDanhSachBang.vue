<template>
    <tr> 
        <td class="text-center">{{index}}</td>

        <td>{{item.tenTask}}</td>

        <td class="text-center">
            <span class="badge " v-bind:class="tenClass" >{{laytenmucdo}}</span>
        </td>
        <td>
            <button
                v-on:click="btnEdit"
                type="button" 
                class="btn btn-warning">
                Sửa
            </button>
            <button type="button" v-on:click="deleteItem" class="btn btn-danger">Xóa</button>
        </td>
    </tr>
</template>
<script>
import { mapState , mapActions , mapGetters} from 'vuex'

import mapmucdo from '../DuLieuAo/mucdo'
export default {
    name: 'itemdanhsachbang',
    data(){
        return{
            mapmucdo: mapmucdo
        }
    },
    created(){
    },
    computed:{
        laytenmucdo(){
            //cách tách dữ liệu
            return this.mapmucdo[this.item.level].ten
        },
        tenClass(){
            return this.mapmucdo[this.item.level].class
        }
    },
    props:{
		item:{
			type: Object,
			default: [],
		},
        index: Number,
        
	},
    methods:{
        ...mapActions({
            'actionhandleDelete': 'handleDelete',
            'handleEdit':'handleEdit'
        }),
        deleteItem(){
            if(confirm('Bạn có muốn xóa TASK ' + this.item.name) +' không'){
                this.actionhandleDelete(this.item)
            }
        },
        btnEdit(){
            // this.$emit('btnEdit',this.item);
            this.handleEdit(this.item);
        },
    }
}
</script>
<style scoped>

</style>