import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateNote(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleInputChange(event) {
    const {name, value} = event.target;
    setInputNote((prevInput) => {
      return {
        ...prevInput, 
        [name]: value
      };
    });
  }

  function submitInput(event) {
    props.onAddNote(inputNote);
    setInputNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return(
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleInputChange} name="title" placeholder="Title" value={inputNote.title}/>}
        <textarea  onClick={expand} onChange={handleInputChange} name="content" placeholder="Write a note..." rows={isExpanded ? 3 : 1} value={inputNote.content}/>
        <Zoom in={isExpanded}><Fab onClick={submitInput}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateNote;