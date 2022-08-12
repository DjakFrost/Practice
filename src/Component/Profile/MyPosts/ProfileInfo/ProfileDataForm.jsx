import React from "react";
import {buildField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile}) => {
  return <form>
        <div>
            <button onClick={() => {}}>save</button>
        </div>
        <div>
            <b>Full name</b>: {buildField("Full name", "fullName",Input ,[])}
        </div>
        <div>
            <b>Looking for a job</b>:{buildField("", "lookingForAJob",Input ,[],'','',{type:"checkbox"})}
        </div>
        <div>
            <b>My Professional skill</b>: {profile.lookingForAJobDescription}
            {buildField("My Professional skill", "lookingForAJobDescription",Textarea ,[])}
        </div>
        <div>
            <b> About me</b>: {profile.aboutMe}
            {buildField("About me", "aboutMe",Input ,[])}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
        {/*    <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contact key={key} contactsTitle={key} contactValue={profile.contacts[key]}/>*/}
        {/*})}*/}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm