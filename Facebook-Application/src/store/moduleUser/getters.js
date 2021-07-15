
import { parseJwt }  from '../../Helper'

export default {
    isLogin : state => {
        let checkToken = parseJwt(state.ACCESS_TOKEN);

        // console.log('checkToken = ',checkToken)
        if(checkToken){
            return true
        } 
        else{
            return false
        } 
    }, 
    currentUser : state => {
        return state.currentUser
    },
    // gettersHackUser : state =>{
    //     return state.hackUser
    // }
    getListPostOfCurrentUser: state =>{
        if(state.currentUser){
            let userIdCurrenUser = state.currentUser.USERID
            console.log(state.posts[userIdCurrenUser])
            return state.posts[userIdCurrenUser]
            
        }
        
        return null
        // return state.posts
    }
}