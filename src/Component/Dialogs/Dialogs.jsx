import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";



const Dialogs = () => {

    let dialogs = [
        {id: 0, name: "Vadim"},
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Egor'},
        {id: 3, name: 'Ronin'},
        {id: 4, name: 'Cocker'},
        {id: 5, name: 'Nekto'}
    ]

    let dialogElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let message = [
        {id: 0, message: "Hi all"},
        {id: 1, message: "Hi bro, how are you"},
        {id: 2, message: "vzzzzz"},
        {id: 3, message: "..."},
        {id: 4, message: "34"},
        {id: 5, message: "234"}
    ]

    let messagesElements = message
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