
import UserPhoto from "../../assetss/images/userPhoto.jpg";
import React from "react"
import pc from './UserInfo.module.css'
import Done from '@material-ui/icons/AddAPhoto';

const ProfileAvatar = (props) => {

    const OnPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.SetProfilePhoto(e.target.files[0])
        }
    }
    return <div>

        <div>
            {props.IsMyPage &&
            <div className={pc.AddPhotoButtonPosition}>
                <input className={pc.SelectPhoto} type={"file"}
                       onChange={OnPhotoSelected}
                       accept="image/*"
                       id={"file"}/>

                <label htmlFor="file">
                    <Done   color="primary"  />
                </label>
            </div>
            }
        </div>

        <div>
            <img id={"avatar"} className={pc.UserPhoto}
                 src={(props.photos.large && props.photos.small) == null ? UserPhoto : props.photos.large}/>
        </div>

    </div>
}
export default ProfileAvatar