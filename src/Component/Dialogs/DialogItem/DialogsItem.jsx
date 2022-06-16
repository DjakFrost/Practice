import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = 'DialogItem/Message' + props.id
    return (
        <div className={s.dialogs}>
            <img src={props.avatar} alt ='аватарка'/>
            <NavLink to={path} className={n => n.isActive ? s.active : s.item}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;