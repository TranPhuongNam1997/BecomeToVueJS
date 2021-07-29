
import { parseJwt }  from '../../Helper'

export default {
    //check xem có token hay không nếu có thì trả về true
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
            return state.posts[userIdCurrenUser]
            
        }
        
        return null
        // return state.posts
    }
}