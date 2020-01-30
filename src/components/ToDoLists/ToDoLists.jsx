import React,{useState} from "react"
import CreateNewToDoList from "./CreateNewToDoList/CreateNewToDoList";
import TDLS from "./ToDoLists.module.css"
import ToDoList from "./ToDoList";


const ToDoLists = (props) => {
let [ButtonIsDesabled,SetButtonIsDesabled] = useState(false)

    const ButtonIsDesabledON=()=>{
        SetButtonIsDesabled(true)
    }
    const ButtonIsDesabledOFF=()=>{
        SetButtonIsDesabled(false)
    }
    return <div>
        <CreateNewToDoList AddNewToDoListsThunk={props.AddNewToDoListsThunk}
                          />
        {props.ToDoLists &&
        props.ToDoLists.map(key => {
            return <div className={TDLS.ToDoListsPosition} key={key.id}>

                <ToDoList {...props}
                          ListID={key.id}
                          title={key.title}
                          ButtonIsDesabled={ButtonIsDesabled}
                          ButtonIsDesabledON={ButtonIsDesabledON}
                          ButtonIsDesabledOFF={ButtonIsDesabledOFF}
                />
            </div>
        })
        }
    </div>
}

export default ToDoLists