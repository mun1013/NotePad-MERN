import React, { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import Alerts from "../utils/Alerts";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../actions/noteActions';

function App() {
  // Get noteList from noteReducer
  const noteList = useSelector(state => state.todos.noteList);

  // For all dispatch actions
  const dispatch = useDispatch();

  const fetchNote = useCallback(() => {
    dispatch(actions.getNotes());
  }, [dispatch]);

  useEffect(() => {
    fetchNote()
  }, [fetchNote]);

  const [isEmptyDialog, setEmptyDialog] = useState(false);

  /*
   * Add note into addNote action
   * Prompt warning dialog for adding an empty note
   */
  function addNote(inputNote) {
    if (_.isEmpty(inputNote.title) && _.isEmpty(inputNote.title)) {
      setEmptyDialog(true);
      return;
    }

    dispatch(actions.addNote(inputNote));
  }

  /**
   * Empty Note alert Dialog 
   * callback function on OK click
   */
  function onClickEmptyOk(bool) {
    setEmptyDialog(bool);
  }

  return (
    <div>
      <Header/>
      <CreateNote onAddNote={addNote}/>
      {noteList.map((noteItem, index) => {
        return <Note
          key={index}
          id={noteItem._id}
          title={noteItem.title}
          content={noteItem.content}
        />
      })}
      <Alerts
        dialogOpen={isEmptyDialog}
        dialogTitle="Empty Note"
        dialogContentText="Please write some note."
        onClickOk={onClickEmptyOk}
      />
      <Footer/>
    </div>
  )
}

export default App;