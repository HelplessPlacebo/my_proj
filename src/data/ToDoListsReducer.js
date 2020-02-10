import {API} from "../API/requests";
import {stopSubmit} from "redux-form";


const SET_TO_DO_LISTS = 'ToDoLists/SET_TO_DO_LISTS';
const SET_TO_DO_LIST_TASKS_Page = 'ToDoLists/SET_TO_DO_LIST_TASKS_Page';
const SET_TO_DO_LISTS_TASKS_Count = 'ToDoLists/SET_TO_DO_LISTS_TASKS_Count';
const SET_TO_DO_LIST_TASKS = 'ToDoLists/SET_TO_DO_LIST_TASKS';
const IsFetching_Toggle = 'ToDoLists/IsFetching_Toggle';
const TaskIsFetching_Toggle = 'ToDoLists/TaskIsFetching_Toggle';


let DefaultState = {
    ToDoLists: [],
    ToDoListTasks : [],
    ToDoListTasksPage: 1,
    ToDoListTasksCount: 10,
    IsFetching : false,
    TaskIsFetching : false
}

const ToDoListsReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case SET_TO_DO_LISTS: {
            return {...state, ToDoLists: action.NewToDoLists}
        }
        case SET_TO_DO_LIST_TASKS_Page: {
            return {...state, ToDoListTasksPage: action.NewToDoListTasksPage}
        }
        case SET_TO_DO_LISTS_TASKS_Count: {
            return {...state, ToDoListTasksCount: action.NewToDoListTasksCount}
        }
       case SET_TO_DO_LIST_TASKS: {
            return {...state, ToDoListTasks: action.Tasks}
        }

        /*case SET_TO_DO_LIST_TASKS: {
            let NewTask = {
                ListId: action.ListID,
                TaskData: action.Tasks,

            };

          if(state.ToDoListTasks.every(el=>el.ListId !== action.ListID)) {
                return {
                    ...state,
                    ToDoListTasks: [...state.ToDoListTasks, NewTask]
                }
            }
          else return {
              ...state,
              ToDoListTasks: [...state.ToDoListTasks.filter(item=>{return item.ListId === action.ListID}).TaskData, action.Tasks]
              }
        }*/

        case IsFetching_Toggle:{
            return {...state, IsFetching: action.IsFetching}
        }
        case TaskIsFetching_Toggle:{
            return {...state, TaskIsFetching: action.TaskIsFetching}
        }
        default :
            return state
    }
}


export const SetToDoLists = (NewToDoLists) => {
    return {type: SET_TO_DO_LISTS, NewToDoLists}
}
export const SetToDoListTasksPage = (NewToDoListTasksPage) => {
    return {type: SET_TO_DO_LIST_TASKS_Page, NewToDoListTasksPage}
}
export const SetToDoListTasksCount = (NewToDoListTasksCount) => {
    return {type: SET_TO_DO_LISTS_TASKS_Count, NewToDoListTasksCount}
}
export const SetToDoListTasks = (Tasks) => {
    return {type: SET_TO_DO_LIST_TASKS, Tasks}
}
export const ToggleIsFetching = (IsFetching) => {
    return {type : IsFetching_Toggle, IsFetching}
}
export const SetTaskIsFetching = (TaskIsFetching) => {
    return {type : TaskIsFetching_Toggle, TaskIsFetching}
}



export const GetToDoListsThunk = () => async (dispatch) => {
    dispatch(ToggleIsFetching(true))
    const ResponseData = await API.GetToDoLists()
    dispatch(SetToDoLists(ResponseData.data))
    dispatch(ToggleIsFetching(false))
}

export const AddNewToDoListsThunk = (title) => async (dispatch) => {
 await API.CreateNewToDoList(title)
        dispatch(GetToDoListsThunk())
}

export const DeleteToDoListThunk = (ToDoListID) => async (dispatch) => {
    await API.DeleteToDoList(ToDoListID)
    dispatch(GetToDoListsThunk())
}

export const ChangeToDoListTitleThunk = (ToDoListID, Newtitle) => async (dispatch) => {
    await API.ChangeToDoListTitle(ToDoListID, Newtitle)
        dispatch(GetToDoListsThunk())
}

export const GetToDoListTasksThunk = (ToDoListID, count,page) => async (dispatch) => {
    dispatch(SetTaskIsFetching(true))
   const DataResponse = await API.GetToDoListTasks(ToDoListID, count, page)
    dispatch(SetTaskIsFetching(false))
    if(!DataResponse.data.error) {
        dispatch(SetToDoListTasks(DataResponse.data))
    }

}

export const AddNewTaskThunk = (ToDoListID, TaskTitle) => async (dispatch) => {
  const DataResponse = await API.CreateNewTakForToDoList(ToDoListID, TaskTitle)
    if(DataResponse.data.resultCode === 0) {
        dispatch(GetToDoListTasksThunk(ToDoListID))
    }
}
export const DeleteTaskThunk = (ToDoListID,TaskId) => async (dispatch) => {
    const DataResponse = await API.DeleteTaskFromToDoList(ToDoListID,TaskId)
    if(DataResponse.data.resultCode === 0) {
        dispatch(GetToDoListTasksThunk(ToDoListID))
    } else  dispatch(stopSubmit("TaskEditorForm", {_error: DataResponse.data.messages[0]}))
}
export const UpdateTaskInformationThunk = (ToDoListID,TaskId,status) => async (dispatch) => {
    const DataResponse = await API.ChangeTaskInformation(ToDoListID,TaskId,status)
    if(DataResponse.data.resultCode === 0) {
        dispatch(GetToDoListTasksThunk(ToDoListID))
    }
}



export default ToDoListsReducer