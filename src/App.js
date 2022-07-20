import React from "react";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";
import UsersContainer from "./Component/Users/UsersContainer";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import HeaderContainer from "./Component/Header/HeaderContainer";
import Login from "./Component/Login/Login";


const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element ={<DialogsContainer/>} />
                        <Route path='/profile/:userId' element ={<ProfileContainer/>} />
                        <Route path='/users' element ={<UsersContainer/>} />
                        <Route path='/login' element ={<Login/>} />
                    </Routes>
                </div>
            </div>
    )
}

export default App;
