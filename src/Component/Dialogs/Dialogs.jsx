import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let newMessage = React.createRef()

    let onMessageChange = () => {
        let text = newMessage.current.value
        props.updateNewMessageText(text)
    }
    let addMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text)
        newMessage.current.value = ''
    }


    let messageUser = props.state.message
        .map(d => <Message message={d.message} id={d.id}/>)

    let dialogElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.dialogsItems}>
                {messageUser}

                <div className={s.button}>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.state.newMessageText}></textarea>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dialogs;