import './index.css'
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import store from "./Redux/redux-store";
import {Provider} from "react-redux";

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'))

