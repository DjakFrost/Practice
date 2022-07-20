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
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data}
            )    }
}

export const authAPI = {
    headerAuth(){
        return instance(`auth/me`)
            .then(response=>{
                return response.data
            })
    }
}