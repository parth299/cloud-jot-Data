import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    let host = "http://localhost:4000"
    const notesInitial = []
    const [notes, setnotes] = useState(notesInitial);

    //Fetch a notes in the backend
    const getNote = async ()=> {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MmY3YWFlOTZiN2IyZjc0OWFjM2MwIn0sImlhdCI6MTcwMzA4MTkyNn0.kvKBfptUT67K8LouYRqZG6bRNZAwjzMzWhIQfk7sLiI"
        }
      });
      const responseJson = await response.json();
      setnotes(responseJson)
    }

    
    //Add a notes in the backend
    const addNote = async (title, description, tag)=> {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MmY3YWFlOTZiN2IyZjc0OWFjM2MwIn0sImlhdCI6MTcwMzA4MTkyNn0.kvKBfptUT67K8LouYRqZG6bRNZAwjzMzWhIQfk7sLiI"
        },
        body: JSON.stringify({title, description, tag})
      });
      const newNote = {
        title: title,
        description: description,
        tag: tag
      }
      setnotes(notes.concat(newNote));
    }

    //Delete a notes
    const deleteNote = async (id)=>{
      
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MmY3YWFlOTZiN2IyZjc0OWFjM2MwIn0sImlhdCI6MTcwMzA4MTkyNn0.kvKBfptUT67K8LouYRqZG6bRNZAwjzMzWhIQfk7sLiI"
        },
      });

      const json = response.json();
      console.log(json);

      const newNotes = notes.filter((note)=>{
        return note._id !== id
      })
      setnotes(newNotes);
    }

    //Edit a note
    const editNote = async (id, title, description, tag)=>{

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MmY3YWFlOTZiN2IyZjc0OWFjM2MwIn0sImlhdCI6MTcwMzA4MTkyNn0.kvKBfptUT67K8LouYRqZG6bRNZAwjzMzWhIQfk7sLiI"
        },
        body: JSON.stringify({title, description, tag}), 
      });


      for(let index = 0; index<notes.length(); index++){
        let element = notes[index];
        if(element._id === id){
          element.title = title;
          element.description = description;
          element.tag = tag
        }
      }
    }

    return(
        <NoteContext.Provider value={{notes, setnotes, addNote, deleteNote, editNote, getNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;