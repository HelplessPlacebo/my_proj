import React, {useState} from "react"
import pc from './UserInfo.module.css'
import Preloader from "../../assetss/common/Loader/Loader";
import ProfileStatusF from "./ProfileStatusF";
import ProfileData from "./ProfileData"
import ProfileAvatar from "./ProfileAvatar";
import ProfileDataEditorForm from "./ProfileDataEditorForm";
import {reduxForm} from "redux-form";
import SendMessageOnUserPage from "./SendMessageOnUserPage";


const UserInfo = (props) => {

    let [ContactsIsEditing, SetContactsIsEditing] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }


    const ContactsEditingOn = () => {
        SetContactsIsEditing(true)
    }

    const ContactsEditingOFF = () => {
        SetContactsIsEditing(false)
    }

    const PutNewProfileInfoToServer = (formData) => {

      props.SaveProfileData(formData).then(()=>{
          SetContactsIsEditing(false)
      })
    }

    return <div className={pc.userdescrition}>
        <div className={pc.ProfileName}>
            {props.profile.fullName != null ? props.profile.fullName : null}
        </div>

        <ProfileAvatar IsMyPage={props.IsMyPage}
                       photos={props.profile.photos}
                       SetProfilePhoto={props.SetProfilePhoto}/>


        <ProfileStatusF status={props.status}
                        SetProfileStatus={props.SetProfileStatus}
                        IsMyPage={props.IsMyPage}/>
        {props.IsLogined &&
            <SendMessageOnUserPage UserName={props.profile.fullName}
                                   IsMyPage={props.IsMyPage}
                                   UserID={props.profile.userId}
                                   SendNewMessageThunk={props.SendNewMessageThunk}
            />
        }


        {
            ContactsIsEditing ?
            <div>
                <ProfileDataEditorFormRedux initialValues={props.profile}
                                            contacts={props.profile.contacts}
                                            onSubmit={PutNewProfileInfoToServer}
                       ContactsEditingOFF={ContactsEditingOFF}/>
            </div>
            : <div>
                <ProfileData profile={props.profile}
                             IsMyPage={props.IsMyPage}
                             ContactsEditingOn={ContactsEditingOn}/>
            </div>
        }
    </div>
}
const ProfileDataEditorFormRedux = reduxForm({form: 'ProfileDataEditorForm'})(ProfileDataEditorForm)
export default UserInfo;