<template>
    <div class="col-xl-7">
        <div class="table-cart">
            <table class="table mb-3">
                <tablehead />
                <tbody>
                    <tablebody />
                    <tablebody />

                    <tablefoot />
                </tbody>
            </table>
            
        </div>	
        <notify />
    </div>
</template>
<script>
import Notify from './Notify.vue'
import Tablebody from './Tablebody.vue'
import Tablefoot from './Tablefoot.vue'
import Tablehead from './Tablehead.vue'
export default {
  components: { Tablehead, Tablebody, Tablefoot, Notify },
    name:'tablecart',
    data() {
        return{

        }
    },
}
</script>
