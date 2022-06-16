import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let newMessage = React.createRef()

    let addMessage =() => {
    let text = newMessage.current.value;
    alert(text)}

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
                <textarea ref ={newMessage}></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>
            </div>
        </div>
    )
}
export default Dialogs;