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

			<tbody>
				<item-danh-sach-bang
					v-for="(item,index) in danhsachTask" v-bind:key="item.id"
					v-bind:item="item"
					v-bind:index="index + 1"
					
				/>
			</tbody>
		</table>
	</div>
</template>
<script>
import ItemDanhSachBang from './ItemDanhSachBang.vue';
export default {
  	components: { ItemDanhSachBang },
	name:'danhsachbang',
	data() {
		return {};
	},
	props:{
		danhsachTask:{
			type:Array,
			default: [],
		}
	}
};
</script>
<style scoped>
</style>