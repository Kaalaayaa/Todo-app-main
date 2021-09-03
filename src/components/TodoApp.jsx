import TodoListItem from "./TodoListItem"
import StatusBar from "./StatusBar"
import { useTodosContext } from "../contexts/TodosContext"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import React, { useState} from 'react'


function TodoApp() {

    const [todos, setTodos ] = useTodosContext()

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(todos)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setTodos(items)
}

    

    return(
        <div className="todoApp">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="todos">
                    {(provided) => (
                    <ul className="todos" {...provided.droppableProps} ref={provided.innerRef}>
                        <TodoListItem />
                        {provided.placeholder}
                        <StatusBar />
                    </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <p className="bottomText">Drag and drop to reorder list</p>
            
        </div>
    )

}

export default TodoApp