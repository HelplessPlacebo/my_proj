import React from 'react';
import ShowIcon from '@material-ui/icons/KeyboardArrowDown';
import Fab from "@material-ui/core/Fab";



const  ShowTasksButton = (props)=> {

    return (
        <div>

            <Fab disabled={props.ButtonIsDesabled} onClick={props.HandleOnClick}  size="small" color="primary" aria-label="edit" >
                <ShowIcon/>
            </Fab>
        </div>
    );
}
export default ShowTasksButton