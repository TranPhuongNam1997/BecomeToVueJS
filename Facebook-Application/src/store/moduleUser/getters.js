
import { parseJwt }  from '../../Helper'

export default {
    isLogin : state => {
        let checkToken = parseJwt(state.ACCESS_TOKEN);

        console.log('checkToken = ',checkToken)
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
}