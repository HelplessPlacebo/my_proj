export const GetToDoLists = (state) =>{
    return state.ToDoListsData.ToDoLists
}
export const GetToDoListTasksPage = (state) =>{
    return state.ToDoListsData.ToDoListTasksPage
}
export const GetToDoListTasksCount = (state) =>{
    return state.ToDoListsData.ToDoListTasksCount
}
export const GetToDoListTasks = (state) =>{
    return state.ToDoListsData.ToDoListTasks
}
export const GetToDoListIsFetching = (state) =>{
    return state.ToDoListsData.IsFetching
}
export const GetToDoListTaskIsFetching = (state) =>{
    return state.ToDoListsData.TaskIsFetching
}