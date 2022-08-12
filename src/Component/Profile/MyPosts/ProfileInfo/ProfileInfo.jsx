import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserImage from "../../../../assets/images/UserImage.png"
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    let [editMode, setEditMode] = useState(false)


    if (!profile) {
        return <Preloader/>
    }

    const myAvatarPicturesSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div className={s.descriptionBlock}>
            <img className={s.profileImg} src={profile.photos.large || UserImage}/>
            {isOwner && <input type={"file"} onChange={myAvatarPicturesSelected}/>}
            {editMode ? <ProfileDataForm profile={profile}/>
                      : <ProfileData toEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}


            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

            <div>
                <span className={s.aboutMe}>{profile.aboutMe}</span>
            </div>

        </div>
    </div>
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={toEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            <b>My Professional skill</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b> About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactsTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}



const Contact = ({contactsTitle, contactValue}) => {
    return <div className={s.contact}>
        <b> {contactsTitle}:</b> {contactValue}
    </div>
}
export default ProfileInfo;