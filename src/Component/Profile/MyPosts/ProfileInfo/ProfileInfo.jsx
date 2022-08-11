import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserImage from "../../../../assets/images/UserImage.png"


const ProfileInfo = ({profile, status, updateStatus, isOwner,savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const myAvatarPicturesSelected = (e) =>{
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div className={s.descriptionBlock}>
            <img className={s.profileImg} src={profile.photos.large || UserImage}/>
            {isOwner && <input type={"file"} onChange={myAvatarPicturesSelected}/>}
                <ProfileStatusWithHooks status ={status} updateStatus={updateStatus}/>

            <div>
                <span className={s.aboutMe}>{profile.aboutMe}</span>
            </div>

        </div>
    </div>

}
export default ProfileInfo;