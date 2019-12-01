import { instans } from "./instans"

export const apiAuthentication = {
    userAuthentication(){
        return instans.get("auth/me")
    },
    login(email, password, rememberMe = false, captcha = true) {
        return instans.post("auth/login",{
            email:email,
            password:password,
            rememberMe:rememberMe,
            captcha:captcha
        })
    },
    logout() {
        return instans.delete("auth/login")
    }
}