import {profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS ='SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

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
        case DELETE_POST:{
            return {...state, posts: state.posts.filter(n=> n.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS:{
            debugger
            return {...state, profile: {...state.profile, photos:action.photos}}
        }

        default:
            return state
    }
}

export const addPostActionCreation = (newMessageBody) => ({type: ADD_POST,newMessageBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId)=> async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) =>{
    const data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) =>{
    const data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }}

export const savePhoto = (file) => async (dispatch) =>{
    const data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }}

export const saveProfile = (profile) => async (dispatch, getState) =>{
    const userId= getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }}

export default profileReducer