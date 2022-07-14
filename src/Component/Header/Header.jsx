import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.icons101.com/icon_ico/id_80198/Path_of_Exile.ico'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login:
            <NavLink to={'/login'}> Login </NavLink>}

        </div>
    </header>
}
export default Header;