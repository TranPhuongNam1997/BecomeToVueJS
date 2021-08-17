<template>
	<div>
		<main class="main">
			<div class="container">
				<div class="row">
					<div class="col-lg-7">
						<div class="post-list">
							<!-- Danh sách bài viết -->
							<post-list />
						</div>
					</div>
					<div class="col-lg-5">
						<side-bar/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import PostList from "../Components/PostList.vue";

import { mapActions } from "vuex";
import SideBar from '../Components/SideBar.vue';

export default {
	name: "home-page",
	components: {
		PostList,
		SideBar
	},
	data() {
		return {};
	},
	methods: {
		...mapActions(["getListPostHasPaging"])
	},
	computed: {},
	//watch $route chỉ chạy khi có sự thay đổi route
	// Nếu lần load đầu tiên -> không có chạy
	watch: {
		$route(to, from) {
			var tagIndex = to.query.tagindex;
			this.getListPostHasPaging({ tagIndex });
			//Nếu nhẩy ra homepage thì tagIndex -> underfind không vấn đề gì
			//Nếu nhẩy ra homepage có thêm query -> tagIndex có giá trị
		}
	},
	// khi load lại trang
	created() {
		var tagIndex = this.$route.query.tagindex;
		this.getListPostHasPaging({ tagIndex });
	}
};
</script>

<style>
.txt-nodata {
	color: #737171;
	font-size: 20px;
}
</style>
