import React from 'react';
import HideIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from "@material-ui/core/Fab";



const  HideTasksButton = (props)=> {
    return (
        <div>
            <Fab  onClick={props.HandleOnClick} size="small" color="primary" aria-label="edit" >
                <HideIcon  />
            </Fab>
        </div>
    );
}
export default HideTasksButton