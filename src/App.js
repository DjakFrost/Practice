import React from "react";
import './App.css';

import {jsx} from "react/jsx-runtime";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Profile from "./Component/Profile";


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
