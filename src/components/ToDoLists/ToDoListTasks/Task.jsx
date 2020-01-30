import React, {useState,useEffect} from "react"
import ts from "./Tasks.module.css"
import classNames from 'classnames';
import DeleteButton from "./DeleteTaskButton";
import TaskDoneIcon from "./DoneIcone";
import EditTaskButton from "./EditTaskButton";
import TaskDetails from "./TaskDetails";
import NotDoneIcon from "./NotDoneIcon";
import TaskEditForm from "./TaskEditForm";
import {reduxForm} from "redux-form";
import {DateTransform} from "../../utils/dateTransform";


const Task = (props) => {

    let [TaskEditMode, SetTaskEditMode] = useState(false)
    let [status, SetStatus] = useState({})

    let TrueStartDate = DateTransform(props.CurrentTask.startDate)
    let TrueDeadLine = DateTransform(props.CurrentTask.deadline)

const TrueObjMaker=(status,TrueStartDate,TrueDeadLine)=>{
        if (status && TrueStartDate && TrueDeadLine  )
        {
            return Object.assign({...status},{ startDate:TrueStartDate[2]+"-"+TrueStartDate[1]+"-"+TrueStartDate[0],
                deadline :TrueDeadLine[2]+"-"+TrueDeadLine[1]+"-"+TrueDeadLine[0] })

        }
}

    useEffect(() => {
        SetStatus(props.CurrentTask)
        }, [props.CurrentTask]
    )


    const TaskEditModeON = () => {
        SetTaskEditMode(true)
    }
    const TaskEditModeOFF = () => {
        SetTaskEditMode(false)
    }
    const TaskExecutedStyleForWindow = classNames({
        [ts.Ramka] : !props.completed,
        [ts.DoneRamka] : props.completed
    })

    const SaveNewToDoListTaskInfo= (formData)=>{
        console.log(formData)
        props.UpdateTaskInformationThunk(props.ListID,props.TaskID,formData)
        TaskEditModeOFF()

    }

    return <div>
        {  /*  props.ToDoListTasks.map(el => el.ListId === props.ListID && el.TaskData.items.map(key =>{
                  return <div key={key.id}>
                      {key.title}
                  </div>
                  })
              )*/


            !TaskEditMode ?
            <div  className={ts.Main}>

                <div className={classNames(ts.MainWrapper)}>

                    <div className={ts.TaskEditButton}>
                        <EditTaskButton ShowButtonBlocked={props.ShowButtonBlocked} ButtonSize={"small"} HandleOnClick={TaskEditModeON}/>
                    </div>

                    <div className={TaskExecutedStyleForWindow}>
                        <div className={ts.TaskBodyWrapper}>
                            {props.completed ?
                                <div className={ts.iconStatus}>
                                    <TaskDoneIcon/>
                                </div>
                                :
                                <div className={ts.iconStatus}>
                                    <NotDoneIcon/>
                                </div>
                            }


                            <div className={ts.Title}>
                                {props.TaskTitle}
                            </div>


                            <div className={ts.ToTrashIcon}>
                                <DeleteButton DeleteTaskThunk={props.DeleteTaskThunk}
                                              ShowButtonBlocked={props.ShowButtonBlocked}
                                              ListID={props.ListID} TaskID={props.TaskID}/>
                            </div>

                        </div>

                        <div>
                            <TaskDetails

                                CurrentTask={status}
                                ShowButtonBlockedON={props.ShowButtonBlockedON}
                                ShowButtonBlockedOFF={props.ShowButtonBlockedOFF}
                            />
                        </div>

                    </div>

                </div>

            </div>
                :
                <div>
                    <TaskEditFormRedux
                                    initialValues={TrueStartDate && TrueDeadLine
                                           ? TrueObjMaker(status,TrueStartDate,TrueDeadLine)
                                           : status
                                       }
                                       TaskEditModeOFF={TaskEditModeOFF}
                                       ListID={props.ListID}
                                       TaskID={props.TaskID}
                                       onSubmit={SaveNewToDoListTaskInfo}
                                       TaskExecutedStyleForWindow={TaskExecutedStyleForWindow}
                    />
                </div>
        }

    </div>
}
const TaskEditFormRedux = reduxForm({form: 'TaskEditorForm'})(TaskEditForm)

export default Task