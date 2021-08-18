import { useTodosContext } from "../contexts/TodosContext"


function StatusBar(){

    const [todos, setTodos] = useTodosContext()


    function deleteCompleted(todo) {
        const newList = todos.filter((item) => item.done === false);
 
    setTodos(newList);
    }

    function showCompleted(todo) {
        const newList = todos.filter((item) => item.done === true);
 
    setTodos(newList);
    }

    function showActive(todo) {
        const newList = todos.filter((item) => item.done === false);
 
    setTodos(newList);
    }

    return(
        <div className="statusBar">
            <p>{todos.length} items left</p>
            <p className="status">All</p>
            <p className="status" onClick={() => showActive(todos)}>Active</p>
            <p className="status" onClick={() => showCompleted(todos)}>Completed</p>
            <p className="status" onClick={() => deleteCompleted(todos)}>Clear Completed</p>
        </div>
    )
}

export default StatusBar