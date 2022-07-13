import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img className={s.background}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaqU8aQBRP3I5G-BCN72MNIsTlNLYNyJerw&usqp=CAU'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>

            <div>
                <span className={s.aboutMe}>{props.profile.aboutMe}</span>
            </div>
        </div>
    </div>

}
export default ProfileInfo;