import * as axois from "axios"
 
export const instans = axois.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"dec75d6b-6ba0-47cf-9b75-d8cef7f7134b"
    }
})