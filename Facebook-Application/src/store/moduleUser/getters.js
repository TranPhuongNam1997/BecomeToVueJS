
import {parseJwt} from '../../Helper'

export default {
    isLogin : state =>{
        let checkToken = parseJwt(state.ACCESS_TOKEN);

        if(checkToken) return true

        else return false

    }, 
    currentUser : state =>{
        return state.currentUser
    }
}