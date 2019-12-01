import { instans } from "./instans"

export const followAPI = {
    followForUser(idUser) {
        return instans.post(`follow/${idUser}`).then(response => response.data)
    },
    unfollowForUser(idUser) {
        return instans.delete(`follow/${idUser}`).then(response => response.data)
    }
}