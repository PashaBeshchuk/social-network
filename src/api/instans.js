import * as axois from "axios"
 
export const instans = axois.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"71580d91-dec4-4b29-bc8c-dcd5824bbc20"
    }
})