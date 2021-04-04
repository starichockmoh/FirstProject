import axios from "axios";
import {DialogsType, MessagesType, PhotosType, ProfileType, ResultCodesEnum, UserType} from "../Types/Types";

const AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '4edd74e2-330b-411c-8c39-ff31c4d6ced4'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
})

type PutDialogResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type GetDialogsResponseType = Array<DialogsType>
type GetUserDialogResponseType = {
    error: null | string
    totalCount: number
    items: Array<MessagesType>
}
type PutMessageResponseType = {
    resultCode: ResultCodesEnum
    data: {message: MessagesType}
    messages: Array<string>
}
type DeleteMessageResponseType = {
    messages: Array<string>
    resultCode: ResultCodesEnum
}


export const DialogsApi = {
    PutDialog(userId: number) {
        return AxiosInstance.put<PutDialogResponseType>(`dialogs/${userId}`)
            .then(res => res.data)
    },
    GetDialogs() {
        return AxiosInstance.get<GetDialogsResponseType>('dialogs')
            .then(res => res.data)
    },
    GetUserDialog(userId: string) {
        let url = 'dialogs/' + userId +'/messages'
        return AxiosInstance.get<GetUserDialogResponseType>(url)
            .then(res => res.data)
    },
    PutMessage(userId:string, message:string) {
        let url = 'dialogs/' + userId +'/messages'
        return AxiosInstance.post<PutMessageResponseType>(url,{body: message})
            .then(res => res.data)
    },
    DeleteMessage (messageId:string) {
        return AxiosInstance.delete<DeleteMessageResponseType>(`dialogs/messages/${messageId}`)
            .then(res => res.data)
    }
}



type AuthUserResponseType = {
    messages: Array<string>
    resultCode: ResultCodesEnum
    data: {
        id: number
        email: string
        login: string
    }
}
type LoginResponseType = {
    messages: Array<string>
    resultCode: ResultCodesEnum
    data: {
        userId: number

    }
}
type LogoutResponseType = {
    messages: Array<string>
    resultCode: ResultCodesEnum
}
type CaptchaResponseType = {
    url: string
}
export const AuthAPI = {
    AuthUser() {
        return AxiosInstance.get<AuthUserResponseType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    AuthLogin(email:string,password:string,rememberMe:boolean,captcha:string | null = null){
        return AxiosInstance.post<LoginResponseType>(`auth/login`, {email,password,rememberMe,captcha}).then(res => res.data)
    },
    AuthLogOut(){
        return AxiosInstance.post<LogoutResponseType>(`auth/logout`).then(res => res.data)

    },
    Captcha(){
        return AxiosInstance.get<CaptchaResponseType>('security/get-captcha-url').then(res => res.data)
    }
}



type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}
type GetProfileResponseType = ProfileType
type GetStatusResponseType = string
type UniversalProfileResponseType = {
    resultCode: number
    messages: Array<string>
}
type ChangeMainPhotoResponseType = {
    resultCode: number
    messages: Array<string>
    photos: PhotosType
}
export const UserAPI = {
    getUsers(currentPage = 1, pageSize = 10,friend = false,term='') {
        return AxiosInstance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&friend=${friend}&term=${term}`)
            .then(response => {
                    return response.data
                }
            )
    },
    followUser(userId:number) {
        return AxiosInstance.post<UniversalProfileResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })

    },
    unfollowUser(userId:number) {
        return AxiosInstance.delete<UniversalProfileResponseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId: string | number) {
        return AxiosInstance.get<GetProfileResponseType>(`profile/${userId}`)
            .then(response => {
                return response.data
            })

    },
    getProfileStatus(userId:string | number){
        return AxiosInstance.get<GetStatusResponseType>(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus (status:string){
        return AxiosInstance.put<UniversalProfileResponseType>(`profile/status/`,{status: status}).then(res => res.data)
    },
    changeProfile(userId: number, profile:ProfileType){
        return AxiosInstance.put<UniversalProfileResponseType>(`profile`,{...profile})
            .then(response => {
                return response.data
            })
    },
    changeMainPhoto(photo:any){
        const formData = new FormData()
        formData.append("image", photo)
        return AxiosInstance.put<ChangeMainPhotoResponseType>(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
}
