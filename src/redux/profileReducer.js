import { profileAPI } from "../api/apiProfile"
import { stopSubmit } from "redux-form"

const ADD_POST = "ADD-POST"
const SET_USERS = "SET-USERS"
const SET_STATUS = "SET-STATUS" 
const SET_USERS_PHOTO = "SET-USERS-PHOTO"
const SET_EDITING_MODE = "SET-EDITING-MODE"
let initialState = {
    postsData: [
        { id: 0, message: "Hi, how are you?", likesCount: "15" },
        { id: 1, message: "My first post", likesCount: "20" }
    ],
    profile: null,
    status: "",
    editingMode:false
}

const setStatus = (state, status) => {
    return {
        ...state,
        status: status
    }
}

const setUsers = (state, profile) => {
    return {
        ...state,
        profile: profile
    }
}

const addPost = (state, post) => {
    let newPost = {
        id: state.postsData.length,
        message: post,
        likesCount: "0"
    }
    return {
        ...state,
        postsData: [...state.postsData, newPost]
    }
}

const updatePhotoProfile = (state, photos) => {
    return {
        ...state,
        profile:{...state.profile, photos: photos}
    }
}
const changeEditingMode = (state, setEditingMode) => {
    return {
        ...state, 
        editingMode: setEditingMode
    }
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action.post)
        case SET_USERS:
            return setUsers(state, action.profile)
        case SET_STATUS:
            return setStatus(state, action.status)
        case SET_USERS_PHOTO:
            return updatePhotoProfile(state, action.photos)
        case SET_EDITING_MODE:
            return changeEditingMode(state, action.setEditingMode)
        default:
            return state
    }
}

export const setEditingMode = (setEditingMode) => ({type: SET_EDITING_MODE, setEditingMode})
export const setProfileStatus = (status) => ({ type: SET_STATUS, status })
export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setProfileStatus(response.data))
    }

}
export const editStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.editStatus(status)
        if(response.data.resultCode === 0){
            dispatch(setProfileStatus(status))
        }
    }

}

export const addPostProfile = (post) => ({ type: ADD_POST, post })
export const setUsersProfile = (profile) => ({ type: SET_USERS, profile })
export const setUsersPhotoSuccess = (photos) => ({ type: SET_USERS_PHOTO, photos })
export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUsersProfile(response))
    }
}
export const setNewProfileInfo = (profileInfo) => {
    return async (dispatch, getState) => {
        const myId = getState().auth.userId
        let response = await profileAPI.editProfileData(profileInfo)
        if(response.data.resultCode === 0){
            dispatch(setEditingMode(false))
            dispatch(getProfile(myId))
        }else{
           	let arr = []
            for(let i = 0; i < response.data.messages.length; i++){
				arr.push(response.data.messages[i].split(" ")[3].split("(")[1].split(")")[0].split("->"))
			}
            let obj = {}
			let obj2 = {}
            for(let j = 0; j < arr.length; j++){
				let key = arr[j][0].toLowerCase() + ""
				let val = arr[j][1].toLowerCase()
				obj2[val] = response.data.messages[j]
				obj[key] = obj2
                dispatch(stopSubmit("ProfileInfoEditerForm", obj))
			}
        }
    }
}

export const saveNewPhoto = (newPhoto) => {
    return async (dispatch) => {
        let response = await profileAPI.saveNewPhotoForProfile(newPhoto)
        if(response.data.resultCode === 0){
           dispatch(setUsersPhotoSuccess(response.data.data.photos))
        }
    }
}
export default profileReducer