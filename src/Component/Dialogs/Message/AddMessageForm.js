import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit ={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength50]} placeholder="Enter your message" name="newMessageBody"/>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)