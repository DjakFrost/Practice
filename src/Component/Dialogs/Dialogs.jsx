import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/messagesPage-Reduser";




const Dialogs = (props) => {
    debugger
    let newMessage = React.createRef()

    let onNewMessageChange = () => {
        let text = newMessage.current.value
        props.updateNewMessageTextActionCreator(text)}

    let addMessageClick = () => {
        props.addMessageClick()
    }

    let messageUser = props.message
        .map(d => <Message message={d.message} id={d.id}/>)

    let dialogElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.dialogsItems}>
                {messageUser}

                <div className={s.button}>
                    <textarea onChange={onNewMessageChange} ref={newMessage} value={props.newMessageText}></textarea>
                    <div>
                        <button onClick={addMessageClick}>Add message</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dialogs;