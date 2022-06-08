import React from "react";
import './App.css';

import {jsx} from "react/jsx-runtime";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import Dialogs from "./Component/Dialogs/Dialogs";


const App = () => {
    return(
        <div className = 'app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Dialogs/>
            </div>
            {/*<div className= 'app-wrapper-content'>*/}
            {/*    <Profile/>*/}
            {/*</div>*/}

        </div>
    );
}

export default App;
