import {API} from "../API/requests";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'Auth/SET_USER_DATA'
const IsFetching_Toggle = 'Auth/IsFetching_Toggle'
const Set_Captcha_Url = 'Auth/Set_Captcha_Url'

let DefaultState = {
    IsLogined: false,
    IsFetching: false,
    CaptchaUrl: null
}

const AuthReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data
            }
        }
        case IsFetching_Toggle: {
            return {...state, IsFetching: action.IsFetching}
        }
        case Set_Captcha_Url: {
            return {...state, CaptchaUrl: action.CaptchaURLFromServer}
        }
        default :
            return state
    }
}

export const SetAuthUser = (userId, email, login, IsLogined) =>
    ({type: SET_USER_DATA, data: {userId, email, login, IsLogined}})

export const ToggleIsFetching = (IsFetching) => {
    return {type: IsFetching_Toggle, IsFetching}
}
export const SetCaptchaUrl = (CaptchaURLFromServer) => {
    return {type: Set_Captcha_Url, CaptchaURLFromServer}
}

export const AuthMeThunk = () => async (dispatch) => {
    ToggleIsFetching(true)
    const data = await API.AuthMe() //возвращает данные авторизованного юзера
    dispatch(ToggleIsFetching(false))
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(SetAuthUser(id, email, login, true))
    }
}

export const LoginThunk = (email, password, rememberMe = false, captcha) =>
    async (dispatch) => {
        const data = await API.Login(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(AuthMeThunk())
        } else {
            if (data.resultCode === 10) {
                dispatch(GetCaptchaThunk())
            }
            dispatch(stopSubmit("login", {_error: data.messages[0]}))
        }
    }

export const LogOutThunk = () => async (dispatch) => {
    const data = await API.LogOut()
    if (data.resultCode === 0) {
        dispatch(SetAuthUser(null, null, null, false))
    }
}
export const GetCaptchaThunk = () => async (dispatch) => {
    const data = await API.GetCaptchaFromServer()
    const captchaURL = data.url
    dispatch(SetCaptchaUrl(captchaURL))

}


export default AuthReducer