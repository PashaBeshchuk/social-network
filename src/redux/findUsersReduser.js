import { userAPI } from "../api/apiUsers"
import { followAPI } from "../api/apiFollow"
import { followUnfollowUpdate } from "../util/varibals/validators"

const CHANGE_FOLLOW = "CHANGE-FOLLOW"
const SET_USER = "SET-USER"
const CHANGE_TOTAL_USERS_COUNT = "CHANGE-TOTAL-USERS-COUNT"
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE"
const CHANGE_IS_FINISH_LOAD = "CHANGE-IS-FINISH-LOAD"
const FOLLOWING_IN_PROGRES = "FOLLOWING_IN_PROGRES"
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFinishLoad: false,
    followingInProgres: []
}
const toggleFollowingInProgres = (state, isFetching, userId) => {
    return {
        ...state,
        followingInProgres: isFetching
            ? [...state.followingInProgres, userId]
            : state.followingInProgres.filter(id => {
                return id !== userId
            })
    }
}
const trackIsFinishLoad = (state, isFinishLoad) => {
    return {
        ...state,
        isFinishLoad: isFinishLoad
    }
}

const trackCurrentPage = (state, number) => {
    return {
        ...state,
        currentPage: number
    }
}

const trackTotalUsersCount = (state, count) => {
    return {
        ...state,
        totalUsersCount: count
    }
}
const trackFollow = (state, id) => {
    return {
        ...state,
        users: state.users.map(u => {
            if (u.id === id) {
                return { ...u, followed: !u.followed }
            }
            return u
        })
    }
}

const setNewUsers = (state, users) => {
    return {
        ...state,
        users: [...users]
    }
}

const findUsersRedusers = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW:
            return trackFollow(state, action.id)
        case SET_USER:
            return setNewUsers(state, action.users)
        case CHANGE_TOTAL_USERS_COUNT:
            return trackTotalUsersCount(state, action.countUsers)
        case CHANGE_CURRENT_PAGE:
            return trackCurrentPage(state, action.currentPage)
        case CHANGE_IS_FINISH_LOAD:
            return trackIsFinishLoad(state, action.isFinishLoad)
        case FOLLOWING_IN_PROGRES:
            return toggleFollowingInProgres(state, action.isFetching, action.userId)
        default:
            return state

    }
}

export const changeCurrentPage = (number) => ({ type: CHANGE_CURRENT_PAGE, currentPage: number })
export const changeTotalUsersCount = (count) => ({ type: CHANGE_TOTAL_USERS_COUNT, countUsers: count })
export const changeFollow = (userId) => ({ type: CHANGE_FOLLOW, id: userId })
export const setUser = (users) => ({ type: SET_USER, users })
export const changeIsFinishLoad = (isFinishLoad) => ({ type: CHANGE_IS_FINISH_LOAD, isFinishLoad })
export const changeFollowinInProgres = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRES, isFetching, userId })
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(changeIsFinishLoad(true))
        let users = await userAPI.getUsers(currentPage, pageSize)
        dispatch(changeIsFinishLoad(false))
        dispatch(setUser(users.items))
        dispatch(changeTotalUsersCount(users.totalCount))

    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        followUnfollowUpdate(userId, dispatch, followAPI.unfollowForUser, changeFollowinInProgres, changeIsFinishLoad, changeFollow)
    }  
}

export const follow = (userId) => {
    return (dispatch) => {
        followUnfollowUpdate(userId, dispatch, followAPI.followForUser, changeFollowinInProgres, changeIsFinishLoad, changeFollow)
    }
}

export default findUsersRedusers;