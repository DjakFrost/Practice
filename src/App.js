import React from "react";
import './App.css';

import {jsx} from "react/jsx-runtime";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import Dialogs from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs message={props.message} dialogs={props.dialogs} />} />
                        <Route path='/profile' element={<Profile posts={props.posts} />} />
                        <Route path='/news' element={<news/>}/>
                        <Route path='/music' element={<music/>}/>
                        <Route path='/settings' element={<settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
