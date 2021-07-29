import Vue            from 'vue'
import VueRouter      from 'vue-router'

import HomePage       from './Pages/HomePage'
import Login          from './Pages/Login'
import PersonalPage   from './Pages/PersonalPage'
import EditProfile    from './Pages/EditProfile'
import ChangePassword from './Pages/ChangePassword'
import PostDetail     from './Pages/PostDetail'
import PostPage       from './Pages/PostPage'
import NotFound       from './Pages/NotFound'
import Register       from './Components/Register'
import { authenticated , notauthenticated } from './Plugin/authenticator'

Vue.use(VueRouter)

const routes = [
    // trang trang chủ
    { 
        path: '/', 
        name: 'home-page',
        component: HomePage,
        
    },
    // trang đăng nhập
    { 
        path: '/login', 
        name: 'login',
        component: Login,
        beforeEnter: notauthenticated,
    },
    // trang đăng ký
    { 
        path: '/register', 
        name: 'register',
        component: Register,
        beforeEnter: notauthenticated,
    },
    // trang cá nhân
    { 
        path: '/personal/:id', 
        name: 'personal',
        component: PersonalPage,
        beforeEnter: authenticated,
    },
    // trang thay đổi mật khẩu
    { 
        path: '/personal/:id/change-password', 
        name: 'change-password',
        component: ChangePassword 
    },
    // trang chỉnh sửa trang cá nhân
    { 
        path: '/personal/:id/edit-profile', 
        name: 'edit-prifile',
        component: EditProfile 
    },
    // trang chi tiết bài viết
    { 
        path: '/post-detail/:id', 
        name: 'post-detail',
        component: PostDetail,
        beforeEnter: authenticated,

        
    },
    // trang đăng bài
    { 
        path: '/post-page', 
        name: 'post-page',
        component: PostPage,
        beforeEnter: authenticated,

    },
    // trang 404
    {
        path: '*',
        name: 'not-found',
        component: NotFound
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router