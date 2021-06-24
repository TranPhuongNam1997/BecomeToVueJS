import Vue from 'vue'
import VueRouter from 'vue-router'

// import pages
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PostDetail from './Pages/PostDetail'
import NotFound from './Pages/NotFound'

Vue.use(VueRouter)

const routes = [
	{ 
		path: '/',
		name: 'home-page',
		component: HomePage,
		// children: [
		// 	{ path: '', component: UserHome }
		// ]
	},
	{ 
		path: '/about',
		name: 'about',
		component: About 
	},
	
	{ 
		path: '/contact',
		name: 'contact',
		component: Contact 
	},
	{ 
		path: '/post-detail',
		name: 'post-detail',
		component: PostDetail 
	},
	{
		path: '*',
		component: NotFound
	}

]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router