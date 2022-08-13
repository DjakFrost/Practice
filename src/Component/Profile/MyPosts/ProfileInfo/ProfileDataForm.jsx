import React from "react";
import {buildField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from "../../../Common/FormsControls/FormsControls.module.css"

const ProfileDataForm = ({handleSubmit,profile, error}) => {
  return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
      {error && <div className={s.formSummaryError}>
          {error}
      </div>}
        <div>
            <b>Full name</b>: {buildField("Full name", "fullName",Input ,[])}
        </div>
        <div>
            <b>Looking for a job</b>:{buildField("", "lookingForAJob",Input ,[],'','',{type:"checkbox"})}
        </div>
        <div>
            <b>My Professional skill</b>
            {buildField("My Professional skill", "lookingForAJobDescription",Textarea ,[])}
        </div>
        <div>
            <b>About me</b>
            {buildField("About me", "aboutMe",Input ,[])}
        </div>
        <div>
            <b>Looking for a job</b>
        </div>
        <div>
            <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <div key = {key} className={s.contact}>
            <b>
                {key}:{buildField(key, "contacts." + key,Input ,[])}
            </b></div>
        })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm