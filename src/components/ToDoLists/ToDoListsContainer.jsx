import React from 'react'
import {connect} from "react-redux";
import {AuthRedirect} from "../hocs/AuthRedirect";
import {compose} from "redux";
import ToDoLists from "./ToDoLists";
import {
    GetToDoListIsFetching,
    GetToDoLists,
    GetToDoListTasks,
    GetToDoListTasksCount,
    GetToDoListTasksPage
} from "../../data/ToDoListsSelectors";
import {
    SetToDoListTasksPage, SetToDoListTasksCount, GetToDoListsThunk, AddNewToDoListsThunk,
    DeleteToDoListThunk,ChangeToDoListTitleThunk,
    GetToDoListTasksThunk,AddNewTaskThunk,DeleteTaskThunk,
    UpdateTaskInformationThunk
} from "../../data/ToDoListsReducer"

class ToDoListsContainer extends React.Component {

    componentDidMount() {
        this.props.GetToDoListsThunk();
    }

    render() {
        return (
            <ToDoLists {...this.props} />
        )
    }
}

let StateToProps = (state) => ({
    ToDoLists: GetToDoLists(state),
    ToDoListTasksPage: GetToDoListTasksPage(state),
    ToDoListTasksCount: GetToDoListTasksCount(state),
    ToDoListTasks : GetToDoListTasks(state),
    IsFetching : GetToDoListIsFetching(state)
})

export default compose(connect(StateToProps,
    {
        SetToDoListTasksPage, SetToDoListTasksCount,
        GetToDoListsThunk, AddNewToDoListsThunk,
        DeleteToDoListThunk,ChangeToDoListTitleThunk,
        GetToDoListTasksThunk,AddNewTaskThunk,DeleteTaskThunk,
        UpdateTaskInformationThunk
    }),
    AuthRedirect)(ToDoListsContainer)