import { apiAuthentication } from "../api/apiAuthentication"
import dialogsReducer from "./dialogsReducer"
import { stopSubmit } from "redux-form"

let SET_AUTH_DATA = "SET-AUTH-DATA" 

let initialState = {
    userId:null,
    login:null,
    email:null,
    userAuth:false
}
const setAuthUserData = (state, action) =>{
    return {
        ...state,
        ...action.payload
    }
}

const authReduser = (state = initialState, action) =>{
    switch(action.type){
        case SET_AUTH_DATA:
            return setAuthUserData(state, action)
        default:
            return state
    }
}

export const setAuthData = (userId, login, email, userAuth) =>({ type:SET_AUTH_DATA, payload:{userId, login, email, userAuth} })

export const getAuthUserData = () =>{
    return (dispatch) =>{
        return apiAuthentication.userAuthentication().then(response=>{
            if(response.data.resultCode === 0){
                let { id, login, email } = response.data.data
                dispatch(setAuthData(id, login, email, true))
            }
        })
    }
}

export const authLoginUser = (email, password, remeberMe = false) => {
    return (dispatch) => {
        apiAuthentication.login(email, password, remeberMe).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let massage = response.data.messages.length > 0 ? response.data.messages[0] : ""
                dispatch(stopSubmit("authLogin", {_error:massage}))
            }          
        })
        
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        apiAuthentication.logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false))
            }
        })
    }
}
export default authReduser
