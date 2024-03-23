import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function Note(props) {

  const [isMouseOver, setMouseOver] = useState(false)

  function handleClick(){
    props.deleteNote(props.id)
  }

  return (
    <Zoom in={true}>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Zoom in={true}>
          <Fab onClick={handleClick}><DeleteIcon/></Fab>
        </Zoom>
      </div>
    </Zoom>
  );
}

export default Note;
