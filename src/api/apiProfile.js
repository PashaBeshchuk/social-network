import { instans } from "./instans"

export const profileAPI = {
    getProfile(userId) {
        debugger
        return instans.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instans.get(`/profile/status/${userId}`)
    },
    editStatus(status){
        return instans.put("/profile/status/",{status:status})
    },
    saveNewPhotoForProfile(newPhoto){
        const formData = new FormData()
        formData.append("image",newPhoto)
        return instans.put("/profile/photo", formData, {
            headers: {
                'Content-Type': `multipart/form-data`
            }
        })
    },
    editProfileData(profileData){
        return instans.put("/profile", profileData)
    }
}