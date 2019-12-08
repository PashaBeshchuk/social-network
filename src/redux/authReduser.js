import { apiAuthentication } from "../api/apiAuthentication"
import { apiSecurity } from "../api/apiSecurity"
import dialogsReducer from "./dialogsReducer"
import { stopSubmit } from "redux-form"

let SET_AUTH_DATA = "SET-AUTH-DATA"
let ADD_CAPTCHA = "ADD-CAPTCHA" 

let initialState = {
    userId:null,
    login:null,
    email:null,
    userAuth:false,
    captcha:null
}
const setAuthUserData = (state, action) =>{
    return {
        ...state,
        ...action.payload
    }
}

const setCaptcha = (state, captcha) => {
    debugger
    return {
        ...state, 
        captcha: captcha
    }
}
const authReduser = (state = initialState, action) =>{
    switch(action.type){
        case SET_AUTH_DATA:
            return setAuthUserData(state, action)
        case ADD_CAPTCHA:
        debugger
            return setCaptcha(state, action.captcha)
        default:
            return state
    }
}

export const setAuthData = (userId, login, email, userAuth) =>({ type:SET_AUTH_DATA, payload:{userId, login, email, userAuth} })
export const setNewCaptcha = (captcha) => ({type: ADD_CAPTCHA, captcha })

export const getCaptcha = () =>{
    return async (dispatch) =>{
        const response = await apiSecurity.getCaptcha()
        const url = response.data.url
        debugger
        dispatch(setNewCaptcha(url))
    }
}


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

export const authLoginUser = (email, password, remeberMe = false, captcha = null) => {
    return (dispatch) => {
        apiAuthentication.login(email, password, remeberMe, captcha).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                debugger
                if(response.data.resultCode === 10) {
                    dispatch(getCaptcha())
                } 
                dispatch(getCaptcha())
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
