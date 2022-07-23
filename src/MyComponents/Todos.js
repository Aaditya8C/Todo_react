import React from "react";
// import {TodoItem} from "../MyComponents/TodoItem"; /**Here we are using .. as we are importing the folder from the MyComponent folder itself */
import { TodoItem } from "./TodoItem"; /**We can write it as in this type also */

export const Todos = (props) => {

  /** Here we are using name export */
  return (
    <div className="container">
      <h3 className="my-3">Todo's List</h3>
      {/* {props.todos.length == 0 ? "No todos to diplay" : */}

      <TodoItem
        todo={props.todosItems[0]} /**Creating the object of TodoItems.js file*/
      />
      {props.todosItems.map((todo) => {
        return (
          <>
          <hr />
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          </>
          
        );
      })}

      {/* Printing all the todo list items using map function */}
    </div>
  );
};
