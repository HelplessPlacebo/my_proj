export const GetUsers = (state) =>{
    return state.UsersData.Users
}
export const GetPageSize = (state) =>{
    return state.UsersData.pageSize
}
export const GetTotalUsersCount = (state) =>{
    return state.UsersData.totalUsersCount
}

export const GetCurrentPage = (state) =>{
    return  state.UsersData.currentPage
}
export const GetIsFeching = (state) =>{
    return state.UsersData.IsFetching
}
export const GetInProgress = (state) => {
    return state.UsersData.InProcess
}

export const GetPortionSize = (state) => {
    return state.UsersData.PortionSize
}
export const GetFoundedUserSelector = (state) => {
    return state.UsersData.FoundedUser
}

