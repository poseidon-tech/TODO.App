import React from 'react'
import  { useState } from 'react';


export const Addtodo = ({addTodo}) => {
    
    
   const [title,setTitle]= useState("");
   const  [desc,setDesc]=useState("");
    let submit =(e)=>
    {
      e.preventDefault();
       if(!title || !desc)
     {
        alert("Title or Description Cannot be blank");
      }
      else
      {
        addTodo(title,desc);
        setTitle("");
        setDesc("");
      }
    }
    return (
        <div className="container my-3">
             <i className="fas fa-skull"></i><h3>Add a todo</h3>
          <form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="tile">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
  </div>
  <div className="form-group">
    <label htmlFor="desc">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
  </div>
  <div className="form-check">
  
  </div>
  <button type="submit" className="btn btn-sm  btn-outline-dark">Add todo</button>
</form>  
        </div>
    )
}
