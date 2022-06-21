import './index.css'
import App from "./App";
import React from "react";
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>, document.getElementById('root'))


}
rerenderEntireTree(state)
subscribe(rerenderEntireTree);