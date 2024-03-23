import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])

  function addNote(note){
    setNotes((prevNote)=>(
      [...prevNote, note]
    ))
  }

  function deleteNote(id){
    setNotes((prevNote)=>(
      prevNote.filter((note, index)=>(
        index !== id
      ))
    ))
  }
  
  return (
    <div>
      <Header />
      <div className="container">
      <CreateArea addNote={addNote}/>
        {notes.map((note,index)=>(
          <Note  
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
