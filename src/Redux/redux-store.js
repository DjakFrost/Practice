import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import {messagesPageReducer} from "./messagesPage-Reduser";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store


export default store