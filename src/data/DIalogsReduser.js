import {API} from "../API/requests";

const Set_All_Dialogs = 'Dialogs/Set_All_Dialogs'
const Set_New_Messages = 'Dialogs/Set_New_Messages'
const Set_InterlocutorAvatar = 'Dialogs/Set_InterlocutorAvatar'
const Set_UserAvatarForDialogs = 'Dialogs/Set_UserAvatarForDialogs'
const Set_NewMessagesCount = 'Dialogs/Set_NewMessagesCount'

let DefaultState = {
    users: [],
    messages: [],
    avatars: [{}],
    NewMessageText: '',
    AllDialogs: [],
    DialogsMessages: null,
    InterlocutorAvatar : "",
    UserAvatar : "",
    NewMessagesCount : 0
}
const DialogsReducer = (state = DefaultState, action) => {
    switch (action.type) {

        case Set_All_Dialogs : {
            return {...state, AllDialogs: action.NewAllDialogs}
        }
        case  Set_New_Messages : {
            return {...state, DialogsMessages: action.NewMessagesData}
        }
        case Set_InterlocutorAvatar :{
            return {
                ...state, InterlocutorAvatar : action.newInterlocutorAvatar
            }
        }
        case Set_UserAvatarForDialogs :{
            return {
                ...state, UserAvatar : action.UserAvatar
            }
        }
        case Set_NewMessagesCount :{
            return {
                ...state, NewMessagesCount : action.NewMessagesCount
            }
        }
        default :
            return state

    }
}


export const SetAllDialogs = (NewAllDialogs) => {
    return {type: Set_All_Dialogs, NewAllDialogs}
}
export const SetNewMessages = (NewMessagesData) => {
    return {type: Set_New_Messages, NewMessagesData}
}
export const setInterlocutorAvatar = (newInterlocutorAvatar) => {
    return {type: Set_InterlocutorAvatar , newInterlocutorAvatar}
}
export const SetNewMessagesCount = (NewMessagesCount) => {
    return {type: Set_NewMessagesCount , NewMessagesCount}
}
export const setUserAvatarForDialogs = (UserAvatar) => {
    return {type: Set_UserAvatarForDialogs , UserAvatar}
}


export const GetAllDialogsThunk = () => async (dispatch) => {
    const data = await API.GetAllDialogs()
    dispatch(SetAllDialogs(data))
}
export const GetNewMessagesThunk = (UserId) => async (dispatch) => {
    const data = await API.GetNewMessagesFromServer(UserId)
    if (!data.error) {
        dispatch(SetNewMessages(data))
    }

}
export const SendNewMessageThunk = (UserId, NewMessage) => async (dispatch) => {
    const data = await API.SendNewMessage(UserId, NewMessage)
    if (!data.error) {
        dispatch(GetNewMessagesThunk(UserId))
    }
}
export const GetInterlocutorAvatarThunk = (UserId) => async (dispatch) => {
    const data = await API.getProfile(UserId)
        dispatch(setInterlocutorAvatar(data.photos.small))
}
export const GetProfileAvatarThunk = (UserID) => async (dispatch) => {
    const data = await API.getProfile(UserID)
        dispatch(setUserAvatarForDialogs(data.photos.small))
}
export const GetNewMessagesCountThunk = () => async (dispatch) => {
    const data = await API.GetNewMessagesCount()
    dispatch(SetNewMessagesCount(data.data))
}
export const DeleteMessageThunk = (MessageID,UserID) => async (dispatch) => {
   await API.DeleteMessage(MessageID)
    dispatch(GetNewMessagesThunk(UserID))

}


export default DialogsReducer