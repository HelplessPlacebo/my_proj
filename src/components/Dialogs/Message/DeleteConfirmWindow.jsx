import React from "react"
import ms from "./Messages.module.css";
import Dialog from "@material-ui/core/Dialog";
import CloseButton from "../../assetss/images/closeButton.png"


const DeleteConfirmWindow = (props) => {
    const closeWindow = () => {
        props.SetToConfirmDeleting(false)
    }

    return <div>

        <Dialog
            className={ms.confirmDeletingWindow} open={props.ToConfirmDeleting}>

            <div className={ms.wrapper}>
                <img onClick={closeWindow} className={ms.imgClose} src={CloseButton}/>
                <h3 className={ms.confirmDeletingWindowHeader}>
                    Delete messages confirm
                </h3>
                <div className={ms.confirmDeletingWindowText}>
                    Are you sure about this? you will can't restored this message.
                    You will delete message only for your own
                </div>
                <div className={ms.confirmDeletingWindowButtons}>
                    <button className={ms.deleteMessageStyle} onClick={props.deleteMessage}>
                        yes
                    </button>
                    <span className={ms.buttontsDelta}>
                       <button className={ms.deleteMessageStyle} onClick={closeWindow}>
                           no
                       </button>
                </span>
                </div>


            </div>

        </Dialog>

    </div>

}
export default DeleteConfirmWindow