import React from "react";
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import Dialogs from "./Component/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar  state={props.state.messagesPage}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>}/>
                        <Route path='/profile' element={<Profile profile={props.state.profile} addPost={props.addPost}
                        updateNewPostText ={props.updateNewPostText}/>}/>

                    </Routes>
                </div>
            </div>
    )
}

export default App;
