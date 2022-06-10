import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";



const Dialogs = (props) => {

    let dialogElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.state.message
        .map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                    {dialogElements}
            </div>
            <div className={s.message}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;