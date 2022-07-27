import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/validators/validators";



const LoginForm = (props) => {

    return <form  onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field component={Input} name={'rememberMe'} type={'checkbox'}/>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'
})(LoginForm)

const onSubmit = (formData) =>{
    console.log(formData)
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}




export default Login