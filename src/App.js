import React from "react";
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./Component/Dialogs/DialogsContainer";
import UsersContainer from "./Component/Users/UsersContainer";
import ProfileContainer from "./Component/Profile/ProfileContainer";


const App = () => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element ={<DialogsContainer/>} />
                        <Route path='/profile/:userId' element ={<ProfileContainer/>} />
                        <Route path='/users' element ={<UsersContainer/>} />
                    </Routes>
                </div>
            </div>
    )
}

export default App;
