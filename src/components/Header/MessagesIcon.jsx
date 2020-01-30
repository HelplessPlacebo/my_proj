import React from "react"
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge/Badge";
import MailIconHeader from '@material-ui/icons/Mail';



const MessagesIcon = (props) =>{

    return  <div>
        <div >
            <IconButton aria-label= "show 11 new mails" color="inherit">
                <Badge
                    badgeContent={props.NewMessagesCount.toString()}
                    color="secondary">
                    <MailIconHeader />
                </Badge>
            </IconButton></div>

    </div>
}

export default MessagesIcon