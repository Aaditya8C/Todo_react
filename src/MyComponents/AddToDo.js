import React from "react";
import { useState } from "react";
// import React, { useState } from "react";

export const AddToDo = ({addToDo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const add = (e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description can't be null");
        }
        addToDo(title,desc);
    }
  return (
    <div className="container my-3">
        <h3>Add a To-do</h3>
      <form onSubmit={add}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            To-do Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            To-do Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
