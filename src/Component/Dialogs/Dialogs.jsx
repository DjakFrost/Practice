import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom"
import AddMessageForm from "./Message/AddMessageForm";


const Dialogs = (props) => {

    let addMessageClick = (values) => {
        props.addMessageClick(values.newMessageBody)
    }

    let messageUser = props.message
        .map(d => <Message message={d.message} id={d.id}/>)

    let dialogElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)

    if (!props.isAuth) return <Navigate to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.dialogsItems}>
                {messageUser}

                <div className={s.button}>

                    <div>
                        <AddMessageForm onSubmit={addMessageClick}/>
                    </div>

                </div>
            </div>
        </div>
    )
}




export default Dialogs;