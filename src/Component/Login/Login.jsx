import React from "react";
import {Field, reduxForm} from "redux-form";
import {creteField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "../Common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error}) => {

    return <form onSubmit={handleSubmit}>
        {creteField('Email', 'email', Input, [required])}
        {creteField('Password', 'password', Input, [required], 'password')}
        {creteField(null, 'rememberMe', Input, null, 'checkbox', "remember me")}
        
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to="/profile"/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)