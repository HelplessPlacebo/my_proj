import React from 'react';
import Button from '@material-ui/core/Button';
import GoBackIcon from '@material-ui/icons/ArrowBack';


const GoBackButton = (props)=> {
    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                onClick={props.HandleOnClick}
                size="small"
                startIcon={<GoBackIcon  />}
            >
                Back
            </Button>
        </div>
    );
}
export default GoBackButton