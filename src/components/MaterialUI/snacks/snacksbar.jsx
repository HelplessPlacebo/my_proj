import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

const  SnacksBar =(props)=> {
    const { enqueueSnackbar } = useSnackbar();

 const handleClick = () => {
        enqueueSnackbar('Oops, something goes wrong');
    };

    const handleClickVariant = variant => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant });
    };

    return (
        <React.Fragment>
            <Button onClick={handleClick}>Show snackbar</Button>
            <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
        </React.Fragment>
    );
}

export default function IntegrationNotistack() {
    return (
        <SnackbarProvider maxSnack={3}>
            <MyApp />
        </SnackbarProvider>
    );
}
export default SnacksBar