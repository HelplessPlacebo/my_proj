import {API} from "../API/requests";

const Set_All_Dialogs = 'Dialogs/Set_All_Dialogs'
const Set_New_Messages = 'Dialogs/Set_New_Messages'
const Set_InterlocutorAvatar = 'Dialogs/Set_InterlocutorAvatar'
const Set_UserAvatarForDialogs = 'Dialogs/Set_UserAvatarForDialogs'
const Set_NewMessagesCount = 'Dialogs/Set_NewMessagesCount'
const Set_IsFetching = 'Dialogs/Set_IsFetching'

export type DefaultStateType = typeof  DefaultState

type DialogType = {
    id: number | null,
    userName: string | null,
    hasNewMessages: boolean,
    lastDialogActivityDate: string | null,
    lastUserActivityDate: string | null,
    newMessagesCount: number | null,
    photos: {
        small: null | string,
        large: null | string
    }
}
type DialogMessagesType = {
    items: Array < {
        id: string | null
        body: string | null,
        translatedBody: null | string,
        addedAt: string | null
        senderId: null | number,
        senderName: string,
        recipientId: number,
        viewed: boolean
    }>
    totalCount: null | number,
    error: null | string
}

type SetAllDialogsActionType =  {
    type : typeof  Set_All_Dialogs,
    NewAllDialogs : DialogType | null
}
type SetNewMessagesActionType = {
    type :  typeof Set_New_Messages,
    NewMessagesData : DialogMessagesType | null
}
type SetInterlocutorAvatarActionType = {
    type : typeof Set_InterlocutorAvatar,
    newInterlocutorAvatar : string | null
}
type SetUserAvatarForDialogActionType = {
    type : typeof Set_UserAvatarForDialogs,
    UserAvatar : string | null
}
type SetNewMessagesCountActionType = {
    type : typeof Set_NewMessagesCount,
    NewMessagesCount :number | null
}
type SetIsFetchingActionType = {
    type : typeof  Set_IsFetching,
    IsFetching : boolean
}
type ActionType = SetAllDialogsActionType | SetNewMessagesActionType
                    | SetInterlocutorAvatarActionType | SetUserAvatarForDialogActionType
                    | SetNewMessagesCountActionType | SetIsFetchingActionType
type NewMessageType = {
    body : string
}

let DefaultState = {
    AllDialogs: [] as Array<DialogType>,
    DialogsMessages: {} as DialogMessagesType,
    InterlocutorAvatar : "" as string | null,
    UserAvatar : "" as string | null,
    NewMessagesCount : 0 as null | number,
    IsFetching : false as boolean
}


const DialogsReducerTS = (state = DefaultState, action : ActionType) => {
    switch (action.type) {

        case Set_All_Dialogs : {
            return {...state, AllDialogs: action.NewAllDialogs }
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
        case Set_IsFetching :{
            return {
                ...state, IsFetching : action.IsFetching
            }
        }
        default :
            return state

    }
}


export const SetAllDialogs = (NewAllDialogs : DialogType ) : SetAllDialogsActionType =>  {
    return {type: Set_All_Dialogs, NewAllDialogs}
}
export const SetNewMessages = (NewMessagesData : DialogMessagesType) : SetNewMessagesActionType => {
    return {type: Set_New_Messages, NewMessagesData}
}
export const setInterlocutorAvatar = (newInterlocutorAvatar : string) : SetInterlocutorAvatarActionType => {
    return {type: Set_InterlocutorAvatar , newInterlocutorAvatar}
}
export const SetNewMessagesCount = (NewMessagesCount : number)  : SetNewMessagesCountActionType => {
    return {type: Set_NewMessagesCount , NewMessagesCount}
}
export const setUserAvatarForDialogs = (UserAvatar : string) : SetUserAvatarForDialogActionType => {
    return {type: Set_UserAvatarForDialogs , UserAvatar}
}
export const SetIsFetchingDialogs = (IsFetching : boolean) : SetIsFetchingActionType => {
    return {type: Set_IsFetching , IsFetching}
}


export const GetAllDialogsThunk = () => async (dispatch : any ) => {
    dispatch(SetIsFetchingDialogs(true))
    const data = await API.GetAllDialogs()
    dispatch(SetAllDialogs(data))
    dispatch(SetIsFetchingDialogs(false))
}
export const GetNewMessagesThunk = (UserId : number) => async (dispatch : any) => {
    dispatch(SetIsFetchingDialogs(true))
    const data = await API.GetNewMessagesFromServer(UserId)
    dispatch(SetIsFetchingDialogs(false))
    if (!data.error) {
        dispatch(SetNewMessages(data))
    }


}
export const SendNewMessageThunk = (UserId : number, NewMessage : NewMessageType) => async (dispatch : any) => {
    const data = await API.SendNewMessage(UserId, NewMessage)
    if (!data.error) {
        dispatch(GetNewMessagesThunk(UserId))
    }
}
export const GetInterlocutorAvatarThunk = (UserId : number) => async (dispatch : any) => {
    const data = await API.getProfile(UserId)
        dispatch(setInterlocutorAvatar(data.photos.small))
}
export const GetProfileAvatarThunk = (UserID : number ) => async (dispatch : any) => {
    const data = await API.getProfile(UserID)
        dispatch(setUserAvatarForDialogs(data.photos.small))
}
export const GetNewMessagesCountThunk = () => async (dispatch : any) => {
    const data = await API.GetNewMessagesCount()
    dispatch(SetNewMessagesCount(data.data))
}
export const DeleteMessageThunk = (MessageID : number, UserID : number) => async (dispatch : any) => {
   await API.DeleteMessage(MessageID)
    dispatch(GetNewMessagesThunk(UserID))

}


export default DialogsReducerTS
