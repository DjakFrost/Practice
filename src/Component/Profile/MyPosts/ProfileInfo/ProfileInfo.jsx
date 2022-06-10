import React from "react";
import s from "./ProfileInfo.module.css";
import MyPosts from "../MyPosts";


const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaqU8aQBRP3I5G-BCN72MNIsTlNLYNyJerw&usqp=CAU'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>

}
export default ProfileInfo;