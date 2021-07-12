<template>
	<div id="app">
		<div id="wrapper">
			<header-page v-if="fctnavigation" />
			<router-view/>
		</div>
		<div :class="{active: isloading}" class="loading-progressbar">
			<div class="paclfcx5"></div>
		</div>
	</div>
</template>

<script>
// import $ from "jquery";
// import './assets/js/script.js'


import { mapState } from 'vuex'
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
		},
		...mapState(['isloading'])
	},
	mounted(){
		// let recaptchaScript = document.createElement('script')
		// recaptchaScript.setAttribute('src', './dist/js/script.js')
		// document.head.appendChild(recaptchaScript)

		
	}
	
}
</script>

<style>
	.loading-progressbar{
		animation-name: e5hlw9lw-B;
		animation-duration: 0.5s;
		animation-fill-mode: both;
		background-color: #3d5d8e;
		opacity: 0;
		animation-timing-function: ease-out;
		position: fixed;
		top: 0;
		height: 4px;
		left: 0;
		right: 0;
		width: 100vw;
		z-index: 99;
		transition: all 0.3s ease;
	}
	
	.loading-progressbar.active{
		opacity: 1;
		transition: all 0.3s ease;
	}
	/* @keyframes e5hlw9lw-B{
		0%{opacity:0}
		100%{opacity:1}
	}; */
	.paclfcx5{
		animation-duration: 2s;
		animation-name: sd7o50sv-B;
		background-color: #74a4f2;
		width: 100%;
		animation-iteration-count: infinite;
		animation-timing-function: ease-out;
		height: 100%;
	}
	@keyframes sd7o50sv-B{
		0%{opacity:1}
		39%{opacity:1}
		75%{opacity:.5}
		100%{opacity:1}
	}
</style>
