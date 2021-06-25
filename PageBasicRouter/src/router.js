import Vue from 'vue'
import VueRouter from 'vue-router'

// import pages
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PostDetail from './Pages/PostDetail'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import store from './Store'

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
		path: '/post-detail/:title.:id',
		name: 'post-detail',
		component: PostDetail ,
		beforeEnter: (to, from, next) => {
			if(store.state.isLogin == true){
				next();
			}
			else{
				//query là để thể hiện bị redirect từ đâu
				next({path: '/login', query: {redirect: 'post-detail'}})
			}
		}
	},
	
	{ 
		path: '/login',
		name: 'login',
		component: Login 
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
