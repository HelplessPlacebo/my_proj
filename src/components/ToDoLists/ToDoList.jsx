import React, {useState, useEffect} from "react"
import TDLS from "./ToDoLists.module.css";
import ToDoListMenuIcon from "./ListMenu";
import SaveButton from "./SaveButton";
import GoBackButton from "./GoBackButton";
import TitleChangingField from "./TitleChangeField";
import AddNewTask from "./AddNewTask/AddNewTask";
import ShowTasksButton from "./ToDoListTasks/ShowTasksButton";
import HideTasksButton from "./ToDoListTasks/HideTasksButton";
import Tasks from "./ToDoListTasks/Tasks";
import Preloader from "../assetss/common/Loader/Loader";


const ToDoList = (props) => {
    let [EditTitleMode, SetEditTitleMode] = useState(false)
    let [ShowTasksMode, SetShowTasksMode] = useState(false)
    let [CurrentToDoListTitle, SetToDoListTitle] = useState(props.title)

    const EditTitleModeON = () => {
        SetEditTitleMode(true)
    }
    const EditTitleModeOFF = () => {
        SetEditTitleMode(false)
    }

    const OnToDoListTitleChanging = (el) => {
        SetToDoListTitle(el.currentTarget.value)
    }

    const ShowTask = () => {
        props.GetToDoListTasksThunk(props.ListID, props.ToDoListTasksCount, props.ToDoListTasksPage)
        SetShowTasksMode(true)
        props.ButtonIsDesabledON()
    }

    const ShowTaskModeOFF = () => {
        SetShowTasksMode(false)
        props.ButtonIsDesabledOFF()
    }


    useEffect(() => {
            SetToDoListTitle(props.title)
        }, [props.title]
    )




    return <div>
        {!EditTitleMode ?
            <div className={TDLS.ToDolistsWrapper}>

                <ToDoListMenuIcon ListID={props.ListID}
                                  ShowTasksMode={ShowTasksMode}
                                  EditTitleModeON={EditTitleModeON}
                                  Del={props.DeleteToDoListThunk}/>

                <div className={TDLS.ToDoListTitle}>
                    {props.title}
                </div>
            </div>

            :
            <div className={TDLS.ToDolistsChanchingWrapper}>
                <div>
                    <SaveButton ListID={props.ListID} ChangeToDoListTitleThunk={props.ChangeToDoListTitleThunk}
                                EditTitleModeOFF={EditTitleModeOFF} CurrentToDoListTitle={CurrentToDoListTitle}/>
                    <GoBackButton HandleOnClick={EditTitleModeOFF}/>
                </div>
                <div className={TDLS.ToDoListChangingInput}>
                    <TitleChangingField OnToDoListTitleChanging={OnToDoListTitleChanging}
                                        CurrentToDoListTitle={CurrentToDoListTitle}/>
                </div>

            </div>
        }

        {ShowTasksMode ?

            <div>

                {props.TaskIsFetching ? <Preloader/> :
                    <>
                    <AddNewTask ListID={props.ListID}
                                AddNewTaskThunk={props.AddNewTaskThunk}/>

                    <div>
                        {
                            props.ToDoListTasks.items &&
                                <div className={TDLS.tasksposititon}>
                                    <Tasks
                                        DeleteTaskThunk={props.DeleteTaskThunk}
                                        ToDoListTasks={props.ToDoListTasks}
                                        UpdateTaskInformationThunk={props.UpdateTaskInformationThunk}
                                    />
                                </div>
                        }

                    <div className={TDLS.HideTasksButton}>
                    <HideTasksButton HandleOnClick={ShowTaskModeOFF}/>
                    </div>

                    </div>

                    </>
                }
            </div>
            :
            <div className={TDLS.ShowTasksButton}>
                <ShowTasksButton ShowTasksMode={ShowTasksMode}
                                 HandleOnClick={ShowTask}
                                 ButtonIsDesabled={props.ButtonIsDesabled}
                />
            </div>

        }
    </div>
}
export default ToDoList