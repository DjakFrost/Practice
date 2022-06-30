import './index.css'
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import store from "./Redux/redux-store";
import {Provider} from "./StoreContext";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'))


}
rerenderEntireTree(store.getState())
store.subscribe(() => {
   let state = store.getState()
    rerenderEntireTree(state)
})