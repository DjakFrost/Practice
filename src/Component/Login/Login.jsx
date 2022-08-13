import React from "react";
import {reduxForm} from "redux-form";
import {buildField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from "../Common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error, captchaUrl}) => {

    return <form onSubmit={handleSubmit}>
        {buildField('Email', 'email', Input, [required])}
        {buildField('Password', 'password', Input, [required], 'password')}
        {buildField(null, 'rememberMe', Input, null, 'checkbox', "remember me")}

        {captchaUrl && <img src={captchaUrl}/>}
        {captchaUrl && buildField("What code is in the image?", 'captcha', Input, [required])}

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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to="/profile"/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl}/>
    </div>
}


const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)