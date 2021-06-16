<template>
    <div class="col-xl-7">
        <div class="table-cart">
            <table class="table mb-3">
                <tablehead />
                <tbody>
                    <template v-if="danhsachgiohang.length">
                        <tablebody 
                            v-for="(item,index) in danhsachgiohang" 
                            :index="index"
                            :key="index"
                            :danhsachtronggionghang="item"
                        />
                    </template>
                    <tr v-else>
                        <td colspan="6" class="text-center">{{ thongbaoronggiohang }}</td>
                    </tr>
                    <tablefoot />
                </tbody>
                

            </table>
            
        </div>	
    </div>
</template>
<script>

import Tablebody from './Tablebody.vue'
import Tablefoot from './Tablefoot.vue'
import Tablehead from './Tablehead.vue'

import { mapState } from 'vuex'

import { donvitien, validatesoluong } from "../Helper";
import {thongbaoronggiohang} from '../Constants/config'



export default {
  components: { Tablehead, Tablebody, Tablefoot },
    name:'tablecart',
    data() {
        return{
            thongbaoronggiohang,
        }
    },
    computed:{
        ...mapState({
            danhsachgiohang: state => state.Cart.dsgiohang
        })
    }
}
</script>
