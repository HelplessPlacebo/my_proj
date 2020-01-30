import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

 const  FindUserModal = (props)=> {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        alert(document.getElementById('FindingUserName').value)
        setOpen(false);
    };

    return (

        <div>
            <Button  variant="contained" color="primary" onClick={handleClickOpen}>
                Search user
            </Button>
            <Dialog    open={open} onClose={handleClose} >
                <DialogTitle >Search user by name</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       enter user name with you looking for
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="FindingUserName"
                        type="userName"
                        fullWidth
                        name="finduser"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Go back
                    </Button>
                    <Button onClick={props.SubmitModal} color="primary">
                        Search
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default FindUserModal