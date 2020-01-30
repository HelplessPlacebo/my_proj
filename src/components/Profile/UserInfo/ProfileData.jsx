import React from "react"
import Contact from "./Contact";
import pds from "./ProfileData.module.css"

const ProfileData = (props) => {
const ProfileContacts = Object.keys(props.profile.contacts)
const ProfileContactsValues = ProfileContacts.map(el => props.profile.contacts[el])
const ValueNotNull = (values) =>{
        return values !== null
    }

    return <div className={pds.aboutME}>
        {
            props.profile.aboutMe && <div>
            {props.profile.aboutMe}
        </div>
        }

        {
            props.profile.lookingForAJob ?
            <div>
                Im looking for a job
            </div>
            :
            <div>
                Im have a job
            </div>
        }
        {props.profile.lookingForAJobDescription &&
        <div>
            {props.profile.lookingForAJobDescription}
        </div>
        }
        <div className={pds.contacts}>
            <div>
                {props.IsMyPage && <button className={pds.buttonEditInformation}
                                           onClick={props.ContactsEditingOn}>
                    edit information
                </button>}
            </div>
            {
                ProfileContactsValues.some(ValueNotNull) ?
                    "My contacts :"
                    : null
            }

            {ProfileContacts.map(key => {
                return <Contact key={key} ContactName={key}
                                ContactValue={props.profile.contacts[key]}
                                SetIsAnyContact={props.SetIsAnyContact}/>
            })}
        </div>
    </div>
}

export default ProfileData