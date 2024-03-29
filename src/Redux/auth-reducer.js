import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})


export const getAuthUserData = () => async (dispatch) => {
   const data = await authAPI.headerAuth()
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }

}


export const login = (email, password, rememberMe) => async(dispatch) => {
    const data = await authAPI.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Wrong login, password"
                dispatch(stopSubmit("login", {_error: message}))
            }

}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}


export default authReducer