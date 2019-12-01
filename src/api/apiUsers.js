import { instans } from "./instans"

export const userAPI = {
    getUsers(currentPage=1, pageSize=10){
        return  instans.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
    }
}