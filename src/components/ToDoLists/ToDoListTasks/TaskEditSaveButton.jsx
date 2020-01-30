import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const  TaskEditSaveButton = (props)=> {

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
        </div>
    );
}
export default TaskEditSaveButton