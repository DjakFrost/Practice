import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/Dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={n=>n.isActive ? s.active :s.item}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;