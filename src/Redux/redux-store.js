import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import {messagesPageReducer} from "./messagesPage-Reduser";


let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: messagesPageReducer
})

let store = createStore(reducers)

window.store = store


export default store