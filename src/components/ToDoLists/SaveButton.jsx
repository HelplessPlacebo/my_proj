import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const  SaveButton = (props)=> {
    const classes = useStyles();

const SaveNewToDoListTitle = ()=>{
    if(props.CurrentToDoListTitle.length !== 0 && props.CurrentToDoListTitle.length < 100 ) {
        props.ChangeToDoListTitleThunk(props.ListID, props.CurrentToDoListTitle)
        props.EditTitleModeOFF()
    }
}

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={SaveNewToDoListTitle}
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
        </div>
    );
}
export default SaveButton