import {API} from "../API/requests";
import {stopSubmit} from "redux-form";

const add_post = 'Profile/ADD_POST'
const Set_Profile_Of_User = 'Profile/Set_Profile_Of_User'
const Set_Status_Of_User = '/Profile/Set_Status_Of_User'
const Set_Photo_Of_User = '/Profile/Set_Photo_Of_User'
const Set_Is_My_Page = '/Profile/Set_Is_My_Page'
const Set_Own_Name= '/Profile/Set_Own_Name'


let DefaultState = {
    Posts: [],
    TextNewPost: '',
    profile: null,
    status: "",
    email: "",
    password: "",
    rememberMe: false,
    IsMyPage: false,
    OwnName : ""
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




export const GetProfileThunk = (ProfileID) => async (dispatch,getState) => {
    const MyID = getState().Auth.userId
    const data = await API.getProfile(ProfileID)
    dispatch(setProfileOfUser(data))
    if (data.userId === MyID) {
        dispatch(SetOwnName(data.fullName))
    }
}


export const GetProfileStatusThunk = (userID) => async (dispatch) => {
    const data = await API.getProfileStatus(userID)
    dispatch(SetStatusOfUser(data))
}

export const SetProfileStatusThunk = (status) => async (dispatch) => {
    const data = await API.setProfileStatus(status)
    if (data.resultCode === 0) {
        dispatch(SetStatusOfUser(status))
    }
}

export const SetProfilePhotoThunk = (photo) => async (dispatch) => {
    const data = await API.LoadPhotoOnServer(photo)
    if (data.resultCode === 0) {
        dispatch(SetPhotoOfUser(data.data.photos))
    }
}

export const UpdateProfileInfoThunk = (profile) => async (dispatch, getState) => {
    const profileID = getState().Auth.userId
    const data = await API.PutProfileDataOnServer(profile)
    if (data.resultCode === 0) {
        dispatch(GetProfileThunk(profileID))
    } else {
        dispatch(stopSubmit("ProfileDataEditorForm",{_error : data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}


export default ProfileReducer