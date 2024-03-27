import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {

  const context = useContext(noteContext);
  const {addNote} = context;

  const [note, setNode] = useState({title: "", description: "", tag: ""})

  const handleClick = (e)=> {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }

  const onChange = (e)=>{
    setNode({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
    <h1 className="font-pixel text-center text-5xl">ADD NOTES</h1>
    <form className="max-w-sm mx-auto font-pixel my-14">
      <div className="mb-5">
        <label
          htmlFor="large-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Title
        </label>
        <input
          type="text"
          id="title" name="title" onChange={onChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Description
        </label>
        <input
          type="text"
          id="description" name="description" onChange={onChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Tag
        </label>
        <input
          type="text"
          id="tag" name="tag" onChange={onChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button className="p-2 border-black bg-blue-500 mt-2 rounded-md text-white" onClick={handleClick}>
        SUBMIT
      </button>
    </form>
    </>
  );
};

export default AddNote;
