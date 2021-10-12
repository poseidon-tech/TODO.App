import React from 'react'
import Todo from './Todo'
// import { ReactComponent as Alarmsvg } from './Alarm.svg';

function Todos({todos,onDelete}) {
    let style={
        minHeight:"50vh"
    }
    return (
        <div className="container" style={style}>
            {console.log(todos[0])}
           <h3 >Todos List</h3>
           {todos.length===0? "No todos to display":
           
           todos.map((todo)=>
           (
           <Todo item={todo} key={todo.idno} onDelete={onDelete} /> )) }
        </div>
    )
}




export default Todos

