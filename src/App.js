import logo from "./logo.svg";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import { Addtodo } from "./components/Addtodo";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  let inittodo;

  if(localStorage.getItem("todos")===null)
  { inittodo=[]
    console.log(inittodo.length)
    
    
  }
  else
  {
    
  inittodo=JSON.parse(localStorage.getItem("todos"))
  console.log(inittodo);
  }
  const onDelete = (item) => {
    console.log(item);
    setTodos(
      todos.filter((e) => {
        return e !== item;
      })
    );
  }
  const addTodo = (title, desc) => {
    let no;
    if (todos.length === 0) {
      no = 0;
    } else {
      no = todos[todos.length - 1].idno + 1;
    }
    const myTodo = {
      idno: no,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

   const [todos, setTodos] = useState(inittodo);
   useEffect(()=>
   {
     localStorage.setItem("todos",JSON.stringify(todos));
   },[todos])

  return (
    <div>
      <Router>
      <Header title="My todo List" Searchbar={false} />
      <Switch>
          <Route exact path="/"
            render={() => {
              return (
                <>
                <Addtodo addTodo={addTodo} />
                 <Todos todos={todos} onDelete={onDelete} />
                 <Footer />
              </>
              )
            }}>
          
          
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
         
        </Switch>
      
      
      </Router>
    </div>
  );
}

export default App;
