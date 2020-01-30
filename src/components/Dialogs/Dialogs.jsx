import React from 'react'
import DialogInfo from "./DialogInfo";


const Dialogs = (props) => {

    return (<div >

            {props.MessagesData.AllDialogs.map(el => {
                return <DialogInfo key={el.id} DialogUserName={el.userName}
                               DialogUserAvatar={el.photos.small ?
                                   el.photos.small
                                   : el.photos.large}
                               NewMessagesCount={el.newMessagesCount}
                               MessageSendTime={el.lastDialogActivityDate}
                               UserID={el.id}
                />
            })}
        </div>
    )
}
export default Dialogs;