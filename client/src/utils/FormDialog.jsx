import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function FormDialog(props) {

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
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}
      >
        <DialogTitle id="form-dialog-title">{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.dialogContentText}</DialogContentText>
          {props.textField.map((item, index) => {
            return <TextField
            autoFocus
            margin="dense"
            key={index}
            name={item.name}
            placeholder={item.placeholder}
            defaultValue={item.defaultValue}
            label={item.label}
            fullWidth
            onChange={props.submitChange}
          /> 
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;