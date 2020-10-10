import React from 'react'

import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Slide } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function SnackbarContainer(props) {
    const { open, message, autoHideDuration, onClose, severity } = props;
    return (
        <div>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={open}
                onClose={onClose}
                message={message}
                TransitionComponent={Slide}
                autoHideDuration={autoHideDuration}
                action={
                    <>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    </>
                }
            >
                <MuiAlert onClose={onClose} severity={severity}>
                  {message}
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default SnackbarContainer