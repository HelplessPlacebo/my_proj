import React, {useState, useEffect} from "react"
import ts from "./Tasks.module.css"
import Task from "./Task";


const Tasks = (props) => {

    let [TasksData, SetTasksData] = useState(props.ToDoListTasks.items)
    let [ShowButtonBlocked, SetShowButtonBlocked] = useState(false)


    const ShowButtonBlockedON = () => {
        SetShowButtonBlocked(true)
    }

    const ShowButtonBlockedOFF = () => {
        SetShowButtonBlocked(false)
    }

    useEffect(() => {
            SetTasksData(props.ToDoListTasks.items)
        }, [props.ToDoListTasks.items]
    )



    return <div>
        {


            TasksData.map(task => {

                return <div key={task.id} className={ts.Main}>

                    <Task completed={task.completed}
                          UpdateTaskInformationThunk={props.UpdateTaskInformationThunk}
                          CurrentTask={task}
                          TaskTitle={task.title}
                          ShowButtonBlocked={ShowButtonBlocked}
                          ListID={task.todoListId}
                          TaskID={task.id}
                          DeleteTaskThunk={props.DeleteTaskThunk}
                          TaskAddedDate={task.addedDate}
                          TaskDeadline={task.deadline}
                          TaskDescription={task.description}
                          ShowButtonBlockedON={ShowButtonBlockedON}
                          ShowButtonBlockedOFF={ShowButtonBlockedOFF}
                    />

                </div>
            })
        }
    </div>
}

export default Tasks