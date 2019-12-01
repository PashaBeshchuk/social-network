import { profileAPI } from "../api/apiProfile"

const ADD_POST = "ADD-POST"
const SET_USERS = "SET-USERS"
const SET_STATUS = "SET-STATUS"

let initialState = {
    postsData: [
        { id: 0, message: "Hi, how are you?", likesCount: "15" },
        { id: 1, message: "My first post", likesCount: "20" }
    ],
    profile: null,
    status: ""
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
    debugger
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

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action.post)
        case SET_USERS:
            return setUsers(state, action.profile)
        case SET_STATUS:
            return setStatus(state, action.status)
        default:
            return state
    }
}


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
export const getProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUsersProfile(response))
    }
}
export default profileReducer