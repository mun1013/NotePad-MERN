import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Alerts(props) {
  function handleClose(){
    props.onClickCancel(false);
  }

  function handleOk() {
    props.onClickOk(false);
  }

  return (
    <div>
      <Dialog
        open={props.dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick={true}
      >
        <DialogTitle id="alert-dialog-title">{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{props.dialogContentText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.isCancelButton && <Button onClick={handleClose} color="primary">
            Cancel
          </Button>}
          <Button onClick={handleOk} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Alerts;