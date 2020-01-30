import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const TitleChangingField = (props) => {
    const classes = useStyles();
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <TextField
                    onChange={props.OnToDoListTitleChanging}
                    id="ToDoListChangingField"
                    value={props.CurrentToDoListTitle}
                    className={classes.textField}
                    helperText="maximum 100 symbols"
                    margin="normal"
                />
            </div>
        </form>
    );
}
export default TitleChangingField