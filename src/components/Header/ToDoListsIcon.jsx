import React from "react"
import IconButton from "@material-ui/core/IconButton";
import ListIcon from '@material-ui/icons/ListAlt';



const ToDoListsIcon = (props) =>{
    return <div>
        <div >
            <IconButton  color="inherit">
                <ListIcon />
            </IconButton>
        </div>
    </div>
}

export default ToDoListsIcon