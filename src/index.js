import './index.css'
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import store from "./Redux/redux-store";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'))


}
rerenderEntireTree(store.getState())
store.subscribe(() => {
   let state = store.getState()
    rerenderEntireTree(state)
})