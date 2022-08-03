import React from "react";
import s from "./FormsControls.module.css";
import {Field} from "redux-form";


const Element = Element => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <Element {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = Element('textarea')
export const Input = Element('input')


export const creteField = (placeholder, name, component, validate, type, text ="",props ={}) =>
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validate}
               type={type}
               {...props}/> {text}
    </div>