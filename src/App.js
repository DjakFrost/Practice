import React, {Suspense} from "react";
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./Component/Users/UsersContainer";
import HeaderContainer from "./Component/Header/HeaderContainer";
import Login from "./Component/Login/Login";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./Redux/app-reducer";
import Preloader from "./Component/Common/Preloader/Preloader";
import store from "./Redux/redux-store";


const DialogsContainer = React.lazy(() => import('./Component/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Component/Profile/ProfileContainer'))



class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/profile/:userId/*' element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized:state.app.initialized
})


let AppContainer =  connect (mapStateToProps, {initializedApp})(App);

const TestJSApp = (props)=> {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default TestJSApp