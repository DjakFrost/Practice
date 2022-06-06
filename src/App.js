import React from "react";
import './App.css';

import {jsx} from "react/jsx-runtime";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";


const App = () => {
    return(
        <div className = 'app-wrapper'>
            <Header/>
                <Navbar/>
                    <Profile/>
</div>
            );
            }

export default App;
