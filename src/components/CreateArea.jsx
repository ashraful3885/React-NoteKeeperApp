import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {

  const [note, setNote] = useState({
    title:"",
    content:""
  })

  const [isClicked, setClick] = useState(false)

  function handleChange(event){
    const {name, value} = event.target

    setNote((prevNote)=>(
      {...prevNote, [name]:value}
    ))
  }

  function handleAddClick(event){
    props.addNote(note)
    setNote({
      title:"",
      content:""
    })
    event.preventDefault()
  }

  function handleClick(){
    setClick(true)
  }

  return (
    <div>
      <Zoom in={true}>
        <form className="create-note" onClick={handleClick}>
          <input onChange={handleChange} value={note.title} name="title" placeholder={isClicked ? "Title..." : "Take a note..."} spellcheck="false" />
          {isClicked &&
          <div>
            <hr/>
            <textarea onChange={handleChange} value={note.content} name="content" placeholder="Content..." rows="5" spellcheck="false" />
          </div>}
          {isClicked && 
            <Zoom in={true}>
              <Fab onClick={handleAddClick}><AddIcon/></Fab>
            </Zoom>
          }
        </form>
      </Zoom>
    </div>
  );
}

export default CreateArea;
