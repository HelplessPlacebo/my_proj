export const GetUserIDSelector = (state) =>{
    return state.Auth.userId
}
export const GetIsLoginedSelector = (state) => {
    return state.Auth.IsLogined
}
export const GetLoginSelector = (state) => {
    return state.Auth.login
}
export const GetIsFetchingSelector = (state) => {
    return state.Auth.IsFetching
}