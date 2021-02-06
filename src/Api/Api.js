import * as axios from "axios";

const AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'b1cf864d-0236-4524-ba18-8f6783744dea'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const Captcha = () => {
    return AxiosInstance.get('security/get-captcha-url')
}
export const AuthApi = {
    AuthUser() {
        return AxiosInstance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    AuthLogin(email,password,rememberMe){
        return AxiosInstance.post(`auth/login`, {email,password,rememberMe})
    },
    AuthLogOut(){
        return AxiosInstance.post(`auth/logout`)

    }
}

export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return AxiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
    followUser(userId) {
        return AxiosInstance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })

    },
    unfollowUser(userId) {
        return AxiosInstance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        return AxiosInstance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })

    },
    getProfileStatus(userId){
        return AxiosInstance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus (status){
        return AxiosInstance.put(`profile/status/`,{status: status})
    },
    changeProfile(userId, profile){
        return AxiosInstance.put(`profile`,{userId, ...profile})
            .then(response => {
                return response.data
            })
    },
    changeMainPhoto(photo){
        const formData = new FormData()
        formData.append("image", photo)
        return AxiosInstance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
