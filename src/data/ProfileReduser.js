import {API} from "../API/requests";
import {stopSubmit} from "redux-form";

const add_post = 'Profile/ADD_POST'
const Set_Profile_Of_User = 'Profile/Set_Profile_Of_User'
const Set_Status_Of_User = '/Profile/Set_Status_Of_User'
const Set_Photo_Of_User = '/Profile/Set_Photo_Of_User'
const Set_Is_My_Page = '/Profile/Set_Is_My_Page'
const Set_Own_Name= '/Profile/Set_Own_Name'
const Set_IsFetching= '/Profile/Set_IsFetching'


let DefaultState = {
    Posts : [],
    profile: null,
    status: "",
    IsMyPage: false,
    OwnName : "",
    IsFetching : false
}

const ProfileReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case add_post: {
            let NewPost = {
                id: 6,
                Post: action.newtext,
                likesCount: 0
            };
            return {
                ...state,

                Posts: [...state.Posts, NewPost],
            }
        }
        case Set_Profile_Of_User: {
            return {...state, profile: action.profile}
        }

        case Set_Status_Of_User: {
            return {...state, status: action.status}
        }
        case Set_Photo_Of_User: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        }
        case Set_Is_My_Page: {
            return {...state, IsMyPage: action.bool}
        }
        case Set_Own_Name: {
            return {...state, OwnName: action.MyOwnName}
        }
        case Set_IsFetching: {
            return {...state, IsFetching: action.IsFetching}
        }

        default :
            return state
    }
}

export const addpost = (text) => {
    return {type: add_post, newtext: text}
}

export const setProfileOfUser = (profile) => {
    return {type: Set_Profile_Of_User, profile}
}

export const SetStatusOfUser = (status) => {
    return {type: Set_Status_Of_User, status}
}

export const SetPhotoOfUser = (photo) => {
    return {type: Set_Photo_Of_User, photo}
}

export const SetIsMyPage = (bool) => {
    return {type: Set_Is_My_Page, bool}
}
export const SetOwnName = (MyOwnName) => {
    return {type: Set_Own_Name, MyOwnName}
}
export const SetIsFetching = (IsFetching) => {
    return {type: Set_IsFetching, IsFetching}
}



export const GetProfileThunk = (ProfileID) => async (dispatch,getState) => {
    const MyID = getState().Auth.userId
    dispatch(SetIsFetching(true))
    const data = await API.getProfile(ProfileID)
    dispatch(setProfileOfUser(data))
    if (data.userId === MyID) {
        dispatch(SetOwnName(data.fullName))
    }
    dispatch(SetIsFetching(false))
}


export const GetProfileStatusThunk = (userID) => async (dispatch) => {
    dispatch(SetIsFetching(true))
    const data = await API.getProfileStatus(userID)
    dispatch(SetStatusOfUser(data))
    dispatch(SetIsFetching(false))
}

export const SetProfileStatusThunk = (status) => async (dispatch) => {
    dispatch(SetIsFetching(true))
    const data = await API.setProfileStatus(status)
    if (data.resultCode === 0) {
        dispatch(SetStatusOfUser(status))
    }
    dispatch(SetIsFetching(false))
}

export const SetProfilePhotoThunk = (photo) => async (dispatch) => {
    dispatch(SetIsFetching(true))
    const data = await API.LoadPhotoOnServer(photo)
    if (data.resultCode === 0) {
        dispatch(SetPhotoOfUser(data.data.photos))
    }
    dispatch(SetIsFetching(false))
}

export const UpdateProfileInfoThunk = (profile) => async (dispatch, getState) => {
    const profileID = getState().Auth.userId
    dispatch(SetIsFetching(true))
    const data = await API.PutProfileDataOnServer(profile)
    if (data.resultCode === 0) {
        dispatch(GetProfileThunk(profileID))
    } else {
        dispatch(stopSubmit("ProfileDataEditorForm",{_error : data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
    dispatch(SetIsFetching(false))
}


export default ProfileReducer