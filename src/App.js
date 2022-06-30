import React from "react";
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";


const App = () => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar  />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element ={<DialogsContainer/>} />
                        <Route path='/profile' element ={<Profile/>} />
                    </Routes>
                </div>
            </div>
    )
}

export default App;
