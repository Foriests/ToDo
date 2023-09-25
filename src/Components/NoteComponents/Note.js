import { React, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "../css/Note.css";
import Note from "./Note"
function Note({ id, text, deleteNote }) {
  return (
    <div className="note">
        <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
      </div>
      </div>
  );
}
      {notes.map((note) => (
      <Note
      key={note.id}
      id={note.id}
      text={note.text}
      deleteNote={deleteNote}
       />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    
export default Notes;

//states
const [notes, setNotes] = useState([]);
const [inputText, setInputText] = useState("");
// get text and store in state
const textHandler = (e) => {
  setInputText(e.target.value);
};
// add new note to the state array
const saveHandler = () => {
  setNotes((prevState) => [
    ...prevState,
    {
      id: uuid(),
      text: inputText,
    },
  ]);
  //clear the textarea
  setInputText("");
};
//delete note function
const deleteNote = (id) => {
  const filteredNotes = notes.filter((note) => note.id !== id);
  setNotes(filteredNotes);
};