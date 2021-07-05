<template>
	<div id="app">
		<div id="wrapper">
			<header-page v-if="fctnavigation" />
			<router-view/>
		</div>
	</div>
</template>

<script>
import HeaderPage from './Components/HeaderPage.vue'
export default {
  components: { HeaderPage },
	name: 'app',
	data () {
		return {
			
		}
	},
	computed:{
		// xử lý phần navigation
		fctnavigation(){
			let arrnamenonavigation = ['login','change-password'];
			if(arrnamenonavigation.indexOf(this.$route.name) !== -1 ) return false
			return true
		}
	},
	created(){
		console.log(this.$store)
		this.$store.dispatch('getListPostHasPaging', { })
	}
}
</script>

<style>

</style>
