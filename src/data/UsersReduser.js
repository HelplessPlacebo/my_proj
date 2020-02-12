import {API} from "../API/requests";
import {stopSubmit} from "redux-form";

const follow = 'Users/FOLLOW'
const unfollow = 'Users/UNFOLLOW'
const setusers = 'Users/SET_USERS'
const Set_Current_Page = 'Users/SET_CURRENT_PAGE'
const Set_Total_Count_Of_Users = 'Users/Set_Total_Count_Of_Users'
const IsFetching_Toggle = 'Users/Toggle_is_fetching'
const IsInProcess_Togle = 'Users/IsInProcess_Togle'
const Portion_Size_Changer = 'Users/Portion_Size_C                                                                hanger'
const Set_Founded_User = 'Users/Set_Founded_User'
const FindUserIsFetching_Toggle = 'Users/FindUserIsFetching_Toggle'


let DefaultState = {
    Users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    IsFetching: false,
    FindUserIsFetching : false,
    InProcess: [],
    PortionSize: 1,
    FoundedUser: null
}

const UsersReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case follow: {
            return {
                ...state,
                Users: state.Users.map(us => {
                    if (us.id === action.userID) {
                        return {
                            ...us,
                            followed: true
                        }
                    }
                    return us
                })
            }
        }
        case unfollow: {
            return {
                ...state,
                Users: state.Users.map(us => {
                    if (us.id === action.userID) {
                        return {
                            ...us,
                            followed: false
                        }
                    }
                    return us
                })
            }
        }
        case setusers: {
            return {...state, Users: action.users}
        }
        case Set_Current_Page: {
            return {...state, currentPage: action.currentPage}
        }
        case Set_Total_Count_Of_Users: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case IsFetching_Toggle: {
            return {...state, IsFetching: action.IsFetching}
        }
        case IsInProcess_Togle: {
            return {
                ...state,
                InProcess: action.InProgress ?
                    [...state.InProcess, action.UserID]
                    : state.InProcess.filter(id => id !== action.UserID)
            }
        }
        case Portion_Size_Changer: {
            return {...state, PortionSize: action.PortionSizeChangingValue}
        }
        case Set_Founded_User: {
            return {...state, FoundedUser: action.NewFoundedUser}
        }
        case FindUserIsFetching_Toggle: {
            return {...state, FindUserIsFetching: action.FindUserIsFetching}
        }
        default :
            return state
    }
}
export const OnFollow = (userID) => {
    return {type: follow, userID: userID}
}
export const onUnFollow = (userID) => {
    return {type: unfollow, userID: userID}
}
export const setUsers = (users) => {
    return {type: setusers, users: users}
}
export const SetCurrentPage = (currentPage) => {
    return {type: Set_Current_Page, currentPage: currentPage}
}
export const SetTotalCountOfUsers = (totalCount) => {
    return {type: Set_Total_Count_Of_Users, totalUsersCount: totalCount}
}
export const ToggleIsFetching = (IsFetching) => {
    return {type: IsFetching_Toggle, IsFetching}
}

export const ToggleFindUserIsFetching = (FindUserIsFetching) => {
    return {type: FindUserIsFetching_Toggle, FindUserIsFetching}
}

export const ToggleInProcess = (InProgress, UserID) => {
    return {type: IsInProcess_Togle, InProgress, UserID}
}

export const ChangePortionSize = (value) => {
    return {type: Portion_Size_Changer, PortionSizeChangingValue: value}
}
export const SetFoundedUser = (NewFoundedUser) => {
    return {type: Set_Founded_User, NewFoundedUser}
}

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(ToggleIsFetching(true))
    const data = await API.getUsers(currentPage, pageSize)
    dispatch(ToggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(SetTotalCountOfUsers(data.totalCount))
}

export const unfollowThunk = (userID) => async (dispatch) => {
    dispatch(ToggleInProcess(true, userID))
    const data = await API.DelSub(userID)
    if (data.resultCode === 0) {
        dispatch(onUnFollow(userID))
    }
    dispatch(ToggleInProcess(false, userID))
}

export const followThunk = (userID) => async (dispatch) => {
    dispatch(ToggleInProcess(true, userID))
    const data = await API.AddSub(userID)
    if (data.resultCode === 0) {
        dispatch(OnFollow(userID))
    }
    dispatch(ToggleInProcess(false, userID))
}

export const FindUserThunk = (UserName) => async (dispatch) => {
    dispatch(ToggleFindUserIsFetching(true))
    const data = await API.FindUser(UserName)
    dispatch(ToggleFindUserIsFetching(false))
    if (!data.data.error) {
        dispatch(SetFoundedUser(data.data))
    } else {
        dispatch(stopSubmit("FindUser", {_error: data.data.error.messages[0]}))
    }
}

export default UsersReducer