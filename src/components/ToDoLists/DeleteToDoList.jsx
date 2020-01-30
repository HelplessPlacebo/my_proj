import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const DeleteToDoListButton =(props) =>{
    const classes = useStyles();

    const DeleteList = () =>{
        props.Del(props.ListID)
    }

    return (
        <div>
            <Button
                disabled={props.ShowTasksMode}
                onClick={DeleteList}
                variant="contained"
                size="small"
                color="primary"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
        </div>
    );
}
export default DeleteToDoListButton