import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter} from 'react-router-dom'
import {GetProfileThunk,
    GetProfileStatusThunk,
    SetProfileStatusThunk,
    SetProfilePhotoThunk,
    SetIsMyPage,UpdateProfileInfoThunk}
    from '../../data/ProfileReduser'
import {compose} from "redux";
import { GetIsMyPageSelector,
    GetProfileSelector, GetStatusSelector} from "../../data/ProfileSelectors";
import {GetIsLoginedSelector, GetUserIDSelector} from "../../data/AuthSelectors";
import {SendNewMessageThunk} from "../../data/DIalogsReduser"


class ProfileContainer extends React.Component {

    ProfileDataToPaint(){
        let ProfileID = this.props.match.params.userID
        if(!ProfileID){
            ProfileID = this.props.userID
            this.props.SetIsMyPage(true) //  if this branch is going so we are in own page
            if(!ProfileID){
                this.props.history.push("/login")
            }
        }
        else{
            this.props.SetIsMyPage(false) // if this branch is going so we are on some user page
        }
        if(ProfileID){
            this.props.GetProfileThunk(ProfileID)
            this.props.GetProfileStatusThunk(ProfileID)
        }
    }

    componentDidMount() {
        this.ProfileDataToPaint()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.match.params.userID !== prevProps.match.params.userID ){
            this.ProfileDataToPaint()
        }
    }

    render() {

        return (
            <Profile  profile={this.props.profile}
                     status={this.props.status}
                     SetProfileStatus={this.props.SetProfileStatusThunk}
                      SetProfilePhoto={this.props.SetProfilePhotoThunk}
                      IsMyPage={this.props.IsMyPage}
                      SaveProfileData={this.props.UpdateProfileInfoThunk}
                      SendNewMessageThunk={this.props.SendNewMessageThunk}
                      IsLogined={this.props.IsLogined}
                        />
        )
    }
}

let MapStateToProps = (state) => ({
    profile: GetProfileSelector(state),
    status : GetStatusSelector(state),
    userID : GetUserIDSelector(state),
    IsMyPage : GetIsMyPageSelector(state),
    IsLogined : GetIsLoginedSelector(state)})




export default compose(
    connect(MapStateToProps, {GetProfileThunk,GetProfileStatusThunk,
        SetProfileStatusThunk,SetProfilePhotoThunk,SetIsMyPage,
        UpdateProfileInfoThunk,SendNewMessageThunk}),
    withRouter)(ProfileContainer)