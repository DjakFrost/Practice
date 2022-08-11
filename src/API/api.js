import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    headers: {"API-KEY": '7bcb1b6e-b34d-49e3-9d2d-5033ebeda1f9'},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    postFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    userIdPage(userId) {
        console.warn('Obsolete method, used  profileAPI.getProfile')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI={
    getProfile(userId){
    return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data}
        )},
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
            .then(response => {
                return response.data
            })},
    savePhoto(photoFile){
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData)
    }
}


export const authAPI = {
    headerAuth(){
        return instance.get(`auth/me`)
            .then(response=>{
                return response.data
            })
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response=>{
                return response.data
            })
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(response=>{
                return response.data
            })
    }

}