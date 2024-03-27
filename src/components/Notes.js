import React, { useContext, useEffect } from "react";
import contextValue from '../context/notes/noteContext'
import { Noteitem } from "./Noteitem";

const Notes = () => {
    const context = useContext(contextValue);
    const {notes, getNote} = context;

    useEffect(() => {
      getNote();
      // eslint-disable-next-line
    }, [])
    

  return (
    <div>
    <h1 className="font-pixel text-5xl pl-24 py-3">YOUR NOTES</h1>
    (notes.length()===0 && "No Notes - Lets Create Some Notes!")
      <div className="YourNotes w-screen h-screen flex gap-11 justify-center my-14">
        {notes.map((note) => {
          return <Noteitem key={note._id}  note={note}/>;
        })}
      </div>
    </div>
  );
};

export default Notes;
