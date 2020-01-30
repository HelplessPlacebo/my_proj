import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

const DeleteButton = (props)=> {

    const DeleteTask = ()=>{
        props.DeleteTaskThunk(props.ListID,props.TaskID)

    }
    return (
        <div>
            <Button
                disabled={props.ShowButtonBlocked}
                variant="text"
                color="inherit"
                onClick={DeleteTask}
                size="large"
                startIcon={<DeleteIcon />}
            >
            </Button>
        </div>
    );
}
export default DeleteButton