import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Navbar = (props) => {
    let userList = props.state.dialogs
        .map(u=><Friend id={u.id} name={u.name} avatar={u.avatar}/>)
    return <nav className={s.navbar}>
        <div>
            <NavLink to='/Profile' className={navData=>navData.isActive ? s.active :s.item}>Profile</NavLink>
        </div>
        <div>
            <NavLink to='/Dialogs' className={navData=>navData.isActive ? s.active :s.item}>Messages</NavLink>
        </div>
        <div className={s.listText}>
            MyFriend:
            {userList}
        </div>
    </nav>
}
export default Navbar;