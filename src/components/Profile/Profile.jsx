import React from 'react';
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsConteiner";



const Profile = (props) => {

    return <div>
        <UserInfo profile={props.profile}
                  status={props.status}
                  SetProfileStatus={props.SetProfileStatus}
                  IsMyPage={props.IsMyPage}
                  SetProfilePhoto={props.SetProfilePhoto}
                  SaveProfileData={props.SaveProfileData}
                  SendNewMessageThunk={props.SendNewMessageThunk}
                  IsLogined={props.IsLogined}
                  />
        <MyPostsContainer  profile={props.profile} />
    </div>

}
export default Profile;