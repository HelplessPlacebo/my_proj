import React from 'react';
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsConteiner";
import Preloader from "../assetss/common/Loader/Loader";



const Profile = (props) => {

    return <div>
            {props.IsFetching ? <Preloader/> :
                <>
                <UserInfo profile={props.profile}
                          status={props.status}
                          SetProfileStatus={props.SetProfileStatus}
                          IsMyPage={props.IsMyPage}
                          SetProfilePhoto={props.SetProfilePhoto}
                          SaveProfileData={props.SaveProfileData}
                          SendNewMessageThunk={props.SendNewMessageThunk}
                          IsLogined={props.IsLogined}
                />
                < MyPostsContainer  profile={props.profile} />
                </>
            }
    </div>
}
export default Profile;