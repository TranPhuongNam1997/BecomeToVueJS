<template>
	<div id="app">
		<navigation />
		<router-view></router-view>
		<footer />
	</div>
</template>

<script>
import Footer from './Component/Footer.vue'
import Navigation from './Component/Navigation.vue'
import HomePage from './Pages/HomePage.vue'
export default {
  components: { Navigation, Footer, HomePage },
	name: 'app',
	data () {
		return {

		}
	}
}
</script>

<style>

</style>
