import React,{useState} from "react"
import d from "../Dialogs.module.css";
import DeleteConfirmWindow from "./DeleteConfirmWindow";
import ToTrash from "../../assetss/images/trash.png"

const DeleteMessage = (props) =>{
let [ToConfirmDeleting,SetToConfirmDeleting]=useState(false)
let [MessageToRestore,SetMessageToRestore]=useState(false)

const deleteMessage = () =>{
    props.DeleteMessageThunk(props.MessageID,props.DialoguserID)
    SetMessageToRestore(true)
    SetToConfirmDeleting(false)
}



    return <div className={d.ConfirmText}>
        {!ToConfirmDeleting && !MessageToRestore ?
            <img src={ToTrash} className={d.ToTrash} onClick={()=>{
                SetToConfirmDeleting(true)}
            }/>

            :null
        }

        {MessageToRestore &&
            <button className={d.deleteMessageStyle} onClick={()=>{
                SetMessageToRestore(false)
                SetToConfirmDeleting(false)
            }}>
                restore message
            </button>
        }


            <DeleteConfirmWindow
                SetToConfirmDeleting={SetToConfirmDeleting}
                ToConfirmDeleting={ToConfirmDeleting}
                deleteMessage={deleteMessage}

            />

        </div>

}

export default DeleteMessage