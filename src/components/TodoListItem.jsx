import { useTodosContext } from "../contexts/TodosContext"
import React, { useState} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



function TodoListItem(){
    const [ todos, setTodos ] = useTodosContext()

    function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }


    return(
        <div>
            {todos.filter(item => item.display).map((todo, index) =>
            <Draggable key={todo.id} draggableId={todo.text} index={index}>
              {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={todo.done ? "todoListItem-done" : ""}>
                    <input 
                        type="checkbox"
                        checked={todo.done} 
                        className="roundCheckBox"
                        onChange={() => toggleComplete(todo.id)}
                    /><p className="list-text">{todo.text}</p>
                </li>
              )}
            </Draggable>)}
        </div>
    )
}

export default TodoListItem