import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
    <nav className={s.navbar}>
        <div>
            <NavLink to='/Profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div>
            <NavLink to='/Dialogs'
                     className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <div className={s.listText}>
        </div>
    </nav>
    )
}

    export default Navbar;