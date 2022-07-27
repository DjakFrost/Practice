import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS ='SET_STATUS'

let initialState = {
    posts: [
        {id: 0, message: "Hello, what are you name?", likesCount: "14"},
        {id: 1, message: "My name is Kolya", likesCount: "2"},
        {id: 2, message: "Kolya wtf, return my money bitch!!!!!", likesCount: "20"},
    ],
    newPostText: '',
    profile: null,
    status:''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newMessageBody,
                likesCount: 0
            }
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
            }
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }

        default:
            return state
    }
}

export const addPostActionCreation = (newMessageBody) => ({type: ADD_POST,newMessageBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId)=> (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))

        })
}
export const getStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId)
        .then(data =>
        dispatch(setStatus(data)))
}

export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })}


export default profileReducer