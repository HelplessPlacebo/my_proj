import React from 'react';
import DetailsIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from "@material-ui/core/Button";

const TaskShowDetailsIcon = (props)=> {

    return (
        <div>
            <Button
                variant="text"
                disabled={props.ShowButtonBlocked}
                color="primary"
                onClick={props.HandleOnClick}
                size="large"
                startIcon={<DetailsIcon />}
            >
            </Button>
        </div>
    );
}
export default TaskShowDetailsIcon