import React from "react"
import {
    Input,
    CreateField,
    TextAreaAboutMe,
    ContactFormInput,InputName
} from "../../assetss/common/ValidatorsComponents/ElementsValidators";
import pc from './UserInfo.module.css'
import {MaxLengthCreator, required} from "../../utils/validators";


const max300=MaxLengthCreator(300)
const max150=MaxLengthCreator(150)
const max50=MaxLengthCreator(50)

const ProfileDataEditorForm = (props) => {

    return <div className={pc.EditorFormBG}>

        <form onSubmit={props.handleSubmit}>
            <button className={pc.buttonSaveChanges}>
                Save changes
            </button>
            <button className={pc.buttonGoBack } onClick={props.ContactsEditingOFF}>
                go back
            </button>

            <div className={pc.MyName}>
                <b>My name is : </b>
                {CreateField("Enter your full name", "fullName", [required,max50], InputName)}

            </div>

            <div>
                <b>are u looking for a job? :</b>
                {CreateField("", "lookingForAJob", [max300], Input, {type: "checkbox"})}
            </div>

            <div>
                <b>My professional skills:</b>
                {CreateField("Enter description", "lookingForAJobDescription", [max150],
                    TextAreaAboutMe)}
            </div>
            <div>
                <b> about me:</b>
                {CreateField("print something about you", "aboutMe", [max300],
                    TextAreaAboutMe)}
            </div>

            <div className={pc.MyContacts}>My contacts :</div>
            {props.error
                ?
                <div className={pc.FormError}>
                    {props.error}
                </div>
                : null}
            <div className={pc.ContactsForm}>
                {Object.keys(props.contacts).map(key => {
                    return <div key={key}>
                        {key} : {CreateField(key, "contacts." + key, [max150], ContactFormInput)}
                    </div>
                })}
            </div>



        </form>
    </div>
}

export default ProfileDataEditorForm