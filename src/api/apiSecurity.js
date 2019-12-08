import { instans } from "./instans"

export const apiSecurity = {
    getCaptcha(){
        return  instans.get(`security/get-captcha-url`)
    }
}