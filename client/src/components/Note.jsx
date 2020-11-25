import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Alerts from "../utils/Alerts";
import { useDispatch } from "react-redux";
import * as actions from '../actions/noteActions';
import FormDialog from "../utils/FormDialog"

function Note(props) {
  const dispatch = useDispatch();
  const [currentNote, setCurrentNote] = useState({
    _id: "",
    title: "",
    content:"",
  });
  const [isEditDialog, setEditDialog] = useState(false);
  const [isDeleteDialog, setDeleteDialog] = useState(false);
  const textFieldprops = [{
    name: "title",
    placeholder: "Title",
    defaultValue: currentNote.title,
    label: "Title"
  }, {
    name: "content",
    placeholder: "Content",
    defaultValue: currentNote.content,
    label: "Content"
  }];

  /**
   * show delete dialog from Alert.jsx
   */
  function showDeleteDialog() {
    setDeleteDialog(true);
  }

  /**
   * Delete note using deleteNote action
   */
  function deleteNote() {
    dispatch(actions.deleteNote(props.id));
  }

  /**
   * Delete alert Dialog 
   * callback function on OK click
   */
  function onClickDeleteOk(bool) {
    deleteNote();
    setDeleteDialog(bool);
  }

  /**
   * Delete alert Dialog 
   * callback function on CANCEL click
   */
  function onClickDeleteCancel(bool) {
    setDeleteDialog(bool);
  }

  /**
   * show edit dialog from FormDialog.jsx
   * set current note to be updated
   */
  function showEditDialog() {
    setEditDialog(true);
    setCurrentNote(() => {
      return {
        _id: props.id,
        title: props.title,
        content: props.content
    }});
  }

  /**
   * Edit note using editNote action
   */
  function editNote() {
    dispatch(actions.editNote(currentNote));
  }

  /**
   * Edit Form Dialog 
   * callback function on OK click
   */
  function onClickEditOk(bool) {
    setEditDialog(bool);
    editNote();
  }

  /**
   * Edit Form Dialog 
   * callback function on CANCEL click
  */
  function onClickEditCancel(bool) {
    setEditDialog(bool);
  }

  /**
   * Edit Form Dialog 
   * handle onChange event in the textfield
  */
  function onSubmitChange(event) {
    const {name, value} = event.target;
    setCurrentNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value
      };
    });
    editNote();
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={showEditDialog}><EditIcon/></button>
      <button onClick={showDeleteDialog}><DeleteIcon/></button>
      <Alerts
        dialogOpen={isDeleteDialog}
        dialogTitle="Delete Note"
        dialogContentText="Are you sure to delete this note?"
        onClickCancel={onClickDeleteCancel}
        onClickOk={onClickDeleteOk}
        isCancelButton={true}
      />
      <FormDialog
        dialogOpen={isEditDialog}
        dialogTitle="Edit Note"
        textField={textFieldprops}
        onClickCancel={onClickEditCancel}
        onClickOk={onClickEditOk}
        submitChange={onSubmitChange}
      />
    </div>
  )
}

export default Note; 