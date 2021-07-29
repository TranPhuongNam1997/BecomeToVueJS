
import store from '../store'

//trạng thái đã đăng nhập rồi

const authenticated = (to, from, next) =>{
    if(store.getters.isLogin == true){
        next()
    }
    else{
        next({
            name: 'login',
            query:{
                ridirect: to.name
            }
        })
    }
}

const notauthenticated = (to,from,next) => {
//trạng thái chưa đăng nhập
    if(store.getters.isLogin == false){
        next();
    }
    else{
        next({
            name: 'home-page',
            query:{
                ridirect: to.name
            }
        })
    }
}
export {
    authenticated,notauthenticated
}