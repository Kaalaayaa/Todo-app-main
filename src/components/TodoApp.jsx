import TodoListItem from "./TodoListItem"
import StatusBar from "./StatusBar"
import { useTodosContext } from "../contexts/TodosContext"



function TodoApp() {

    const [todos, setTodos ] = useTodosContext()

    

    return(
        <div className="todoApp">
            <ul>
                <TodoListItem />
                <StatusBar />
            </ul>
            <p className="bottomText">Drag and drop to reorder list</p>
            
        </div>
    )

}

export default TodoApp