import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/Dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
            </div>
            )
}

const Message = (props) => {
    return(
        <div className={s.dialog}>{props.message}</div>
)
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name ='Vadim' id='1'/>
                <DialogItem name ='Kolya' id='2'/>
                <DialogItem name ='Egor' id='3'/>
                <DialogItem name ='Ronin' id='4'/>
                <DialogItem name ='Cocker' id='5'/>
                <DialogItem name ='Nekto228' id='6'/>
            </div>
            <div className={s.message}>
                <Message message = 'Hi all'/>
                <Message message = 'Hi bro, how are you'/>
                <Message message = 'vzzzzz'/>
            </div>
        </div>
    )
}
export default Dialogs;