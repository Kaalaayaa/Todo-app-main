import { useTodosContext } from "../contexts/TodosContext"
import React, { useState} from 'react'


function TodoListItem(){
    const [ todos, setTodos ] = useTodosContext()

    function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }


    return(
        <div>
            {todos.map(todo =>
                <li>
                    <input 
                        type="checkbox"
                        checked={todo.done} 
                        className="roundCheckBox"
                        onChange={() => toggleComplete(todo.id)}
                    /><p>{todo.text}</p>
                </li>)}
        </div>
    )
}

export default TodoListItem