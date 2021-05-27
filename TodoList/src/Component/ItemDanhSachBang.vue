<template>
    <tr> 
        <td class="text-center">{{index}}</td>

        <td>{{item.tenTask}}</td>

        <td class="text-center">
            <span class="badge " v-bind:class="tenClass" >{{laytenmucdo}}</span>
        </td>
        <td>
            <button type="button" class="btn btn-warning">Sửa</button>
            <button type="button" class="btn btn-danger">Xóa</button>
        </td>
    </tr>
</template>
<script>
import mapmucdo from '../DuLieuAo/mucdo'
export default {
    name: 'itemdanhsachbang',
    data(){
        return{
            mapmucdo: mapmucdo
        }
    },
    created(){
        // console.log('map muc do',mapmucdo);
    },
    computed:{
        laytenmucdo(){
            //cách tách dữ liệu
            return this.mapmucdo[this.item.level].ten

            //cach pho thong
            // switch(this.item.level){
            //     case 0:
            //         return 'Thấp'
            //         break;
            //     case 1:
            //         return 'Vừa'
            //         break;
            //     case 2:
            //         return 'Cao'
            //         break;

            //     default:
            //         return ''
            //         break;
            // }

        },
        tenClass(){

            return this.mapmucdo[this.item.level].class


            // if(this.item.level == 0){
            //     return 'badge-primary'
            // }
            // else if(this.item.level == 1){
            //     return 'badge-warning'
            // }
            // else{
            //     return 'badge-danger'

            // }

            // switch(this.item.level){
            //     case 0:
            //         return 'badge-primary'
            //         break;
            //     case 1:
            //         return 'badge-warning'
            //         break;
            //     case 2:
            //         return 'badge-danger'
            //         break;

            //     default:
            //         return ''
            //         break;
            // }
        }
    },
    props:{
		item:{
			type: Array,
			default: [],
		},
        index: Number
	}
}
</script>
<style scoped>

</style>