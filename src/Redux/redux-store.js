import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import {messagesPageReducer} from "./messagesPage-Reduser";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersReducer,
    auth:authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store