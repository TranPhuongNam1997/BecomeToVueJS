<template>
	<div class="panel panel-success">
		<div class="panel-heading">List Task</div>
		<table class="table table-hover">
			<thead>
				<tr>
					<th style="width: 10%" class="text-center">#</th>
					<th>Task</th>
					<th style="width: 20%" class="text-center">Mức độ</th>
					<th style="width: 160px">Chức năng</th>
				</tr>
			</thead>

			<tbody v-if="danhsachTask.length !== 0">
				<item-danh-sach-bang
					v-for="(item,index) in danhsachTask" v-bind:key="item.id"
					v-bind:item="item"
					v-bind:index="index + 1"
					v-on:btnEdit="btnEdit"
				/>
			</tbody>
			<tbody v-else>
				<tr>
					<td class="text-center" colspan=4 >Không có dữ liệu hiển thị</td>
				</tr>
				
			</tbody>
		</table>
	</div>
</template>
<script>

import { mapState , mapActions , mapGetters} from 'vuex'
import task from '../DuLieuAo/task';


import ItemDanhSachBang from './ItemDanhSachBang.vue';
export default {
  	components: { ItemDanhSachBang },
	name:'danhsachbang',
	data() {
		return {}; 
	},
	
	computed:{
		...mapGetters({
			'danhsachTask' : 'danhsachtashtimkiemsapxep'
		})
	},
	created(){
		//nếu mà null thì gán giá trị mặc định cho nó bằng rỗngcho
		let tasks = localStorage.getItem('tasks') || '[]';
		// console.log("created danh sach bang ",JSON.parse(tasks));
		this.changeTask(JSON.parse(tasks));
	},
	
	methods:{
		...mapActions([ 'changeTask' ]),
		
		btnEdit(data){
			this.$emit('btnEdit',data);
		}
	}
};
</script>
<style scoped>
</style>