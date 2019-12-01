import { createSelector } from "reselect"

const selectGetUsers = (state) =>{
    return state.findUsersPage.users
}
export const reselectGetUsers = createSelector( selectGetUsers, (user)=>{
    return user.filter(u => true)
})
 
export const selectGetPageSize = (state) =>{
    return state.findUsersPage.pageSize
}
export const selectGetTotalUsersCount = (state) =>{
    return state.findUsersPage.totalUsersCount
}
export const selectGetCurrentPage = (state) =>{
    return state.findUsersPage.currentPage
}
export const selectGetIsFinishLoad = (state) =>{
    return state.findUsersPage.isFinishLoad
}
export const selectGetFollowingInProgres = (state) =>{
    return state.findUsersPage.followingInProgres
}