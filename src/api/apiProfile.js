import { instans } from "./instans"

export const profileAPI = {
    getProfile(userId) {
        return instans.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instans.get(`/profile/status/${userId}`)
    },
    editStatus(status){
        return instans.put("/profile/status/",{status:status})
    }
}