// import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos"; /* Here we have used {} because we are using name export instead of the default export (means we have not used default keywords in the arrow functions) */
import { Footer } from "./MyComponents/Footer";
import { AddToDo } from "./MyComponents/AddToDo";
import React, { useState } from "react";

function App() {


  const addToDo = (title,desc)=>{
    console.log("Adding the todo ",title,desc)

   const myToDo = {
    sno: todos[todos.length - 1].sno + 1,
    title: title,
    desc: desc,
   }
   setTodos([...todos,myToDo]); //"..." is called the Spread Syntax or Spread Operator. This allows an iterable such as an array expression or string to be expanded or an object expression to be expanded wherever placed.
   console.log(myToDo);
  }

  const onDelete = (todo) => {
    console.log("Task Deleted from todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the college",
      desc: "College is necessary for learning",
    },
    {
      sno: 2,
      title: "Take a rest",
      desc: "Rest is necessary",
    },
    {
      sno: 3,
      title: "Go to the gym",
      desc: "Health is important",
    },
  ]);
  return (
    <>
      <Header
        title="Aaditya's Todo List"
        /* In console it will give error*/ searchBar={false}
      />
      <AddToDo addToDo={addToDo}/>
      <Todos
        todosItems={todos}
        onDelete={
          onDelete
        } /*Adding above todos array to the variable todosItems */
      />
      <Footer />
    </>
  );
}

export default App;
